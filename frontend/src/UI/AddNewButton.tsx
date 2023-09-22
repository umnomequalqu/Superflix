import React, {useState} from "react"
import "./AddNewButton.css"

export function AddNewButton(abrirModal){
    const [mouse, setMouse] = useState(true)
    return(
        <div 
        onMouseLeave={()=>setMouse(true)}
        onMouseEnter={()=>setMouse(false)}
        onClick={()=>abrirModal()}
        className={`${mouse ? "addNewButton" : "addNewButton-mouse"}`}>
            {mouse ? "+" : "Adicionar um vídeo"}
        </div>
    )
}