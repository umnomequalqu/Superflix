import React from 'react';
import logo from './logo.svg';
import { videoProps } from './components/Video';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Video from './components/Video';
import { router } from './router';
import {RouterProvider} from "react-router-dom"

function App() {
  const [videos,setvideos] = useState<videoProps[]>([
    
    {
      id: '123-3123-12',
      name: "COMO CURAR (RÁPIDO) SUA PROCRASTINAÇÃO",
      url: "https://www.youtube.com/embed/faE1EGQJ0lQ",
    }, 
    {
      id: '123-3123-12',
      name: "O QUE É GIT E GITHUB? - definição e conceitos importantes 1/2",
      url: "https://www.youtube.com/embed/DqTITcMq68k",
    },  
    {
      id: '123-3123-12',
      name: "COMO USAR GIT E GITHUB NA PRÁTICA! - desde o primeiro commit até o pull request! 2/2",
      url: "https://www.youtube.com/embed/UBAX-13g8OM",
    }   
  ])

  return (
    // <div className="App">
    //   <Navbar cor="dark" fonte="white"/>
    //   <div className='text-div'><h1>Videos inscritos</h1></div>
    //   <div className='videos-div'></div>
    //   {
    //     videos.map(v=><Video key={v.id} {...v}/>)
    //   }
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;
