import React, { useMemo } from 'react';

const Pagination = props => {
    const { totalPages, paginate, currentPage, className } = props;
    const classRemoved = `${currentPage === totalPages ? 'pagination__button--removed' : ''}`;

    const paginationRange = useMemo(() => {
        if(currentPage === totalPages || currentPage === totalPages - 1) {
            return [totalPages - 1, totalPages];
        }
        const arr = [];
        for (let i = currentPage; i <= currentPage + 2; i++) {
            arr.push(i);
        }
        return arr;
    }, [currentPage, totalPages]);

    const onNext = () => {
        paginate(currentPage + 1);
    };

    const onPrevious = () => {
        paginate(currentPage - 1);
    };

    const onFirst = () => {
        paginate(1);
    };

    const onLast = () => {
        paginate(totalPages);
    };

    return <div className={`pagination ${className}`}>

        <button onClick={onFirst} className="pagination__button">First</button>
        <button onClick={onPrevious}
                className={`pagination__button ${currentPage === 1 ? 'pagination__button--disabled' : ''}`}
        >Prev
        </button>

        {
            paginationRange.map(number =>
                <button onClick={() => paginate(number)} key={number}
                        className={`pagination__button ${currentPage === number ? 'pagination__button--active' : ''}`}
                >
                    <span>{number}</span>
                </button>
            )
        }

        <button className={`pagination__button ${classRemoved}`}>...</button>
        <button onClick={onNext} className={`pagination__button ${classRemoved}`}>Next</button>
        <button onClick={onLast} className={`pagination__button ${classRemoved}`}>Last</button>
    </div>;
};

export default Pagination;
