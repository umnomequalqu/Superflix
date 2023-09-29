import React, {useState, useEffect} from "react";
import "./Form.css"
import { FormProps } from "../interfaces/formProps";

function Form(props: FormProps){
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [editMode, setEdit] = useState<boolean>(false);


    return (
        <form onSubmit={envioForm} className={"form"}>
            <h1>"Adicionar vídeo"</h1>
            <label htmlFor="title">Titulo</label>
            <input
                type="text"
                placeholder="Titulo do Vídeo"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <label htmlFor="description">Descricao</label>
            <input
                type="text"
                placeholder="Descrição do Vídeo"
                name="description"
                id="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                />
                <label htmlFor="url">URL</label>
            <input
                type="text"
                placeholder="URL do Vídeo"
                name="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Cadastrar Video</button>
        </form>
    )
}

export default Form;