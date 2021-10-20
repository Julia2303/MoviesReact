import React from 'react';

function Pagination() {
    return <div className="main__pagination">
        <button className="main__button">First</button>
        <button className="main__button">Prev</button>
        <button className="main__button active-page">1</button>
        <button className="main__button">2</button>
        <button className="main__button">3</button>
        <button className="main__button">...</button>
        <button className="main__button">Next</button>
        <button className="main__button">Last</button>
    </div>;
}

export default Pagination;
