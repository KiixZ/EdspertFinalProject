// Pagination.jsx
import React, { useState } from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`mr-6 text-gray-400 cursor-pointer ${
            i === currentPage ? 'text-gray-900' : ''
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="font-bold text-end mt-40 p-5">
      <button className="text-gray-400 mr-4" onClick={handlePreviousPage}>
        &lt; Sebelumnya
      </button>
      {generatePageNumbers()}
      <button className="ml-2 text-gray-900 mr-8" onClick={handleNextPage}>
        Selanjutnya &gt;
      </button>
    </div>
  );
}

export default Pagination;
