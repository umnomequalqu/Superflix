import { useState } from "react";
import React from "react";
import "./Video.css"

export interface videoProps{
   id: string,
   name: string,
   description?: string,
   url: string
}

function Video(props: videoProps){
    
    return (
        <div className='cardVideo'>
            <h2>{props.name}</h2>
            <iframe src={props.url}> </iframe>
            <p>
                {
                    props.description ? props.description
                    : "não tem descrição"
                }
            </p>
            </div>
    )
}

export default Video