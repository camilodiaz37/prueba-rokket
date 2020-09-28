import React from "react"
import './header.css'
import SearchBar from './searchBar'


function Header({ buscar, toHome }) {
    return (
        <header className="header">
            <nav className="nav">
                <h1 onClick={toHome} className="nav-titulo">Rokket</h1>
                <SearchBar className="SearchBar" buscar={buscar} />
            </nav>
        </header>
    )
}

export default Header;