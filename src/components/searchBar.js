import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.css';


function SearchBar({ buscar }) {
    return (
        <div className="search">
            <form onSubmit={buscar}>
                <input className="search-input" placeholder="Busca acá" id="input" />
                <SearchIcon className="lupa" onClick={buscar} />
            </form>
        </div>
    )
}
export default SearchBar;
