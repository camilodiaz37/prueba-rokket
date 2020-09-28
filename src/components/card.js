import React from 'react'
import "./card.css"
import FavoriteIcon from '@material-ui/icons/Favorite';

function Card({ card }) {
    return (
        <div className="card" >
            <div className="contenido">
                <h2 className="name">{card.owner?.firstName} {card.owner?.lastName}</h2>
                <p className="email">{card.owner?.email}</p>
                <img className="image" alt="iamgen" src={card.image} />
                <div className="tags">
                    {card.tags.map((tag, index) => <h3 key={index} className="tag">{tag}</h3>)}
                </div>
                <p className="description">{card.text}</p>
                <a href={card.link} className="link">{card.link}</a>
                <div className="likes">
                    <FavoriteIcon className="corazon" /><h3 className="likes-h3">{card.likes} Likes</h3>
                    <p className="fecha">{card.publishDate}</p>
                </div>
            </div>
        </div>
    )
}


export default Card;