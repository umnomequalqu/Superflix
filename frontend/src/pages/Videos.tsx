import React, { useState, useEffect } from 'react'
import { videoProps } from '../interfaces/videoProps';
import Video from '../components/Video';
import { getVideosData } from '../hooks/getVideosData';
import { DELETED_VIDEO } from '../types/deleteVideoTypes';
import { AddNewButton } from '../components/Botao';
import axios from 'axios';

function Videos() {
    const [videos,setvideos] = useState<videoProps[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)

    const mudarModal = ()=>{
      setShowModal((state)=>!state)
    }
  useEffect(()=>{
    getVideosData()
     .then((res:videoProps[])=>setvideos(res))
     .catch((err:any)=>console.log(err))
  },[])

  const createVideo = (name: string, description: string, url: string ) =>{
    axios.post<{ video: videoProps}>(`http://localhost:3000/videos/createVideo`, {name, description, url})
    .then((res) => {
      setvideos([...videos, res.data.video])
    })
    .catch((err) => console.log("Erro ao cadastrar video", err));
  }


  const deleteVideoWithSuccess =(resHook: string, id: string)=>{
    if (resHook == DELETED_VIDEO){
      setvideos(videos.filter(v => v._id !== id))
    }
  } 

  const editVideo = (_id: string, name: string, description: string, url: string) => {
    axios.put<{ video: videoProps }>(`http://localhost:3000/videos/editVideo/${_id}`, {_id, name, description, url})
    .then((res) => {
      const newUpdateVideos = videos.map((v) => (v._id === _id ? res.data.video : v));
      setvideos(newUpdateVideos)
    })
    .catch((err) => console.log("Erro ao pegar os dados da api", err));
  }

      return (
        <div className="App">
          <div className='text-div'>
            <h1>Videos inscritos</h1>
            <AddNewButton abrirModal={mudarModal}
            {
              showModal ? <Modal fecharModal={mudarModal}/> : null
            }/>
              </div>
          <div className='videos-div'></div>
          {
            videos.map(v=><Video key={v._id} {...v}/>)
          }
        </div>
      )
}

export default Videos