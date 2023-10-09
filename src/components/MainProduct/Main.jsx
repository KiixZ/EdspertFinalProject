import React from 'react';
import ProductList from './List';

function Main() {
  const products = [
    {
      title: 'Programming ReactJS',
      description: 'Getting Started with React JS',
      batch: 'Batch 9',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 2.060.000',
      discountedPrice: 'Rp. 560.000',
    },
    {
      title: 'Programming ReactJS 1',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 2.010.000',
      discountedPrice: 'Rp. 510.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
    {
      title: 'Kursus JavaScript',
      description: 'Belajar JavaScript dasar',
      batch: 'Batch 1',
      mentor: 'Ardi W Saputra, Ade Armytana',
      date: '9 September 2023',
      originalPrice: 'Rp. 1.000.000',
      discountedPrice: 'Rp. 800.000',
    },
  ];

  return (
    <div className="b">
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <ProductList key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Main;
