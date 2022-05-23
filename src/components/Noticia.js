//import React from "react";

function Noticia(props) {

    const noticia = {
        titulo: "Curso React 2022",
        descripcion: "Esto es un ejemplo de desestructuracion"
    }

    const { titulo, descripcion } = props

    return (
        <div>
            <h1 className='mi-titulo'>Mi noticia : {titulo} - {descripcion}</h1>
            <p>{descripcion}</p>
        </div>
    )
}
export default Noticia