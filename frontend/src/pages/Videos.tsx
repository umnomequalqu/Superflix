import React, { useEffect } from 'react'
import { videoProps } from '../components/Video';
import { useState } from 'react';
import Video from '../components/Video';
import { getVideosData } from '../hooks/getVideosData';
function Videos() {
    const [videos,setvideos] = useState<videoProps[]>([])
    
  useEffect(()=>{
    getVideosData()
     .then((res:videoProps[])=>setvideos(res))
     .catch((err:any)=>console.log(err))
  })
    
      return (
        <div className="App">
          <div className='text-div'><h1>Videos inscritos</h1></div>
          <div className='videos-div'></div>
          {
            videos.map(v=><Video key={v.id} {...v}/>)
          }
        </div>
      )
}

export default Videos