import React from 'react';

function Pagination({ totalPages, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= 3; i++) {
        pageNumbers.push(i);
    }
    return <div className="main__pagination">

        <button className="main__button">First</button>
        <button className="main__button">Prev</button>
        {pageNumbers.map(number =>
            <button key={number} className="main__button">
                <span>{number}</span>
            </button>
        )}
        <button className="main__button">...</button>
        <button className="main__button">Next</button>
        <button className="main__button">Last</button>
    </div>;
}

export default Pagination;
