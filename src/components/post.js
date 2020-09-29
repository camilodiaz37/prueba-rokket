import React from 'react';
import "./post.css";
import { useHistory } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

function PostCompleto({ data, props }) {
    const { guardar, guardarPost } = props;
    const history = useHistory();

    const volver = (event) => {
        event.preventDefault()
        guardarPost(null);
        guardar(props.state.tagBusqueda)
        history.goBack();

    }
    return (
        <>
            <div className="post-container">
                <div className="post-image" style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${data.image}")`,
                    backgroundPosition: "center center",
                }}>
                </div>
                <div className="post-content">
                    <h2 className="name">{data.owner?.firstName} {data.owner?.lastName}</h2>
                    <p className="email">{data.owner?.email}</p>
                    <div className="tags">
                        {data.tags.map((tag, index) => <h3 key={index} className="tag">{tag}</h3>)}
                    </div>
                    <p className="description">{data.text}</p>
                    <a href={data.link} className="link">{data.link}</a>
                    <div className="likes">
                        <FavoriteIcon className="corazon" /><h3 className="likes-h3">{data.likes} Likes</h3>
                    </div>
                    <p className="fecha">{data.publishDate}</p>

                </div>
            </div>
            <a className="backToList" onClick={(event) => volver(event)} href="!#">Volver a listado de posts</a>
        </>
    )
}
export default PostCompleto;