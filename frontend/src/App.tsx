import React from 'react';
import logo from './logo.svg';
import { videoProps } from './interfaces/videoProps';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Video from './components/Video';
import { router } from './router';
import {RouterProvider} from "react-router-dom"

function App() {
  const [videos,setvideos] = useState<videoProps[]>([])

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
