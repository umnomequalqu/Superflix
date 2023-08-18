import React from 'react'
import { videoProps } from '../components/Video';
import { useState } from 'react';
import Video from '../components/Video';

function Videos() {
    const [videos,setvideos] = useState<videoProps[]>([
    
        {
          id: '123-3123-12',
          name: "COMO CURAR (RÁPIDO) SUA PROCRASTINAÇÃO",
          url: "https://www.youtube.com/embed/faE1EGQJ0lQ",
        }, 
        {
          id: '123-3123-12',
          name: "COMO CURAR (RÁPIDO) SUA PROCRASTINAÇÃO",
          url: "https://www.youtube.com/embed/faE1EGQJ0lQ",
        },  
        {
          id: '123-3123-12',
          name: "COMO CURAR (RÁPIDO) SUA PROCRASTINAÇÃO",
          url: "https://www.youtube.com/embed/faE1EGQJ0lQ",
        }   
      ])
    
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