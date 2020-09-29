import React from 'react';
import "./cardResults.css"

function CardResults({ data }) {
    return (
        <div className="results">
            <h1>Se encontraron {data.total} resultados: </h1>
            <p>Maximo de 50 elementos por página</p>
        </div>
    )
}

export default CardResults;