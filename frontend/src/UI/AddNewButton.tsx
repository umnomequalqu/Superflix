import React, {useState} from "react"
import "./AddNewButton.css"

export function AddNewButton(props){
    const [mouse, setMouse] = useState(true)
    return(
        <div 
        onMouseLeave={()=>setMouse(true)}
        onMouseEnter={()=>setMouse(false)}
        onClick={()=>props.abrirModal()}
        className={`${mouse ? "addNewButton" : "addNewButton-mouse"}`}>
            {mouse ? "+" : "Adicionar um vídeo"}
        </div>
    )
}