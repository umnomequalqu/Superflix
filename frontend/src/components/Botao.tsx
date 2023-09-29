import React, {useState} from "react"
import "./Button.css"

interface AddNewButtonProps{
    abrirOModal: () => void;
    showModal?: boolean;
}
export function AddNewButton(props: AddNewButtonProps){
    const [mouse, setMouse] = useState(true)
    return(
        <div 
        onMouseLeave={()=>setMouse(true)}
        onMouseEnter={()=>setMouse(false)}
        onClick={() => props.abrirOModal()}
        className={`${mouse ? "addNewButton" : "addNewButton-mouse"}`}>
            {mouse ? "+" : "Adicionar um vídeo"}
        </div>
    )
}