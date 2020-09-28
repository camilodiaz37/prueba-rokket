import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



function Pagination({ totalPosts, paginacion }) {
    const pageNumbers = [];
    const pages = Math.floor(totalPosts / 50)

    for (let i = 0; i < pages; i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" onClick={(e) => paginacion(number, e)} className="page-link">{number + 1}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;