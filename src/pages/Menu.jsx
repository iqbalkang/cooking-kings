import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Table from '../components/Table';

const Menu = () => {
  const { selectedCategory } = useSelector((store) => store.menu);

  return (
    <section className='bg-whitish w-full p-8 rounded-lg text-xs text-blackish'>
      <Categories />

      <h2 className='text-base font-bold capitalize mb-2 mt-4'>items in category - ({selectedCategory})</h2>

      <Table />
    </section>
  );
};

export default Menu;
