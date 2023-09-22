import React, { useEffect } from 'react'
import { videoProps } from '../interfaces/videoProps';
import { useState } from 'react';
import Video from '../components/Video';
import { getVideosData } from '../hooks/getVideosData';
import { DELETED_VIDEO } from '../types/deleteVideoTypes';
import { AddNewButton } from '../UI/AddNewButton';
function Videos() {
    const [videos,setvideos] = useState<videoProps[]>([])
    const [showModal, setShowModal] = useState(false)

    const mudarModal = ()=>{
      setShowModal((state)=>!state)
    }
  useEffect(()=>{
    getVideosData()
     .then((res:videoProps[])=>setvideos(res))
     .catch((err:any)=>console.log(err))
  },[])

  const deleteVideoWithSuccess =(resHook: string, id: string)=>{
    if (resHook == DELETED_VIDEO){
      setvideos(videos.filter(v => v._id !== id))
    }
  } 
    
      return (
        <div className="App">
          <div className='text-div'>
            <h1>Videos inscritos</h1>
            <AddNewButton abrirModal={mudarModal}/>
              </div>
          <div className='videos-div'></div>
          {
            videos.map(v=><Video key={v._id} {...v}/>)
          }
        </div>
      )
}

export default Videos