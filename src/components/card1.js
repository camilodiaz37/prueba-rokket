import React from 'react';
import { useHistory } from 'react-router-dom';
import './card1.css';

function Card1({ card, props, index }) {
    const { guardar, guardarPost } = props;
    const history = useHistory();

    const handleClick = () => {
        guardarPost(index)
        history.push(`/post/${card.id}`)
        guardar(props.state.tagBusqueda);
    }

    return (
        <div className="card" onClick={() => handleClick()}>
            <div className="front">
                <img className="image" alt="imagen" src={card.image} />
            </div>
            <div className="back" style={{
                backgroundSize: "cover",
                backgroundImage: `url("${card.image}")`,
                backgroundPosition: "center center",
            }}>
                <div className="contenido" >
                    <div className="cont">
                        <h2 className="name">{card.owner?.firstName} {card.owner?.lastName}</h2>
                        <p className="email">{card.owner?.email}</p>
                    </div>
                    <div className="tags">
                        {card.tags.map((tag, index) => <h3 key={index} className="tag">{tag}</h3>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1;