import React, { useState } from 'react';
import styles from './index.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handleClick = (number) => {
        setCurrentPage(number);
        paginate(number);
    }

    return (
        <ul className={styles.wrapper}>
            {pageNumbers.map(number => (
                <li key={number} onClick={() => handleClick(number)}
                 className={currentPage === number ? styles.active : ''}>
                    <a className={styles.a} href='#!'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;