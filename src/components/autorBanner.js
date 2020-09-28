import React from 'react'
import './autorBanner.css'

function AutorBanner(props) {
    const { datos } = props;
    return (
        <div className="content">
            <h3 className="titulo">Subido por: {datos?.firstName} {datos?.lastName}</h3>
            <div className="info">
                <img className="imagen-usuario" src={datos?.picture} alt="usuario" />
                <h3 className="cuenta">
                    {datos?.email}
                </h3>
            </div>

        </div>
    )
}
export default AutorBanner;