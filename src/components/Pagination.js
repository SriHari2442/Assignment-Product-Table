import React from 'react';
import styles from './ProductList.module.css'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  console.log(itemsPerPage,totalItems)
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pageItem}>
            <a onClick={() => paginate(number)} href=" #" className={styles.pageLink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
