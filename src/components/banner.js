import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from './request'
import './banner.css';
import AutorBanner from './autorBanner'

function Banner() {
    const [card, setCard] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.Obtener_diez, { headers: { 'app-id': requests.APP_ID } });
            setCard(request.data.data[(Math.floor(Math.random() * (10 - 1)) + 1)]);
            return request;
        }
        fetchData();
    }, [])

    return (
        <section className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${card.image}")`,
                backgroundPosition: "center center",
            }}>
            <AutorBanner datos={card.owner} />
        </section>
    )
}

export default Banner;