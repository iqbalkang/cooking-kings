import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryItems } from '../features/menu/menuThunks';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.menu);

  const handleGetCategoryItems = (category) => {
    dispatch(getCategoryItems(category));
  };

  const returnCategoriesList = categories.map((category) => (
    <li key={category.id}>
      <button onClick={handleGetCategoryItems.bind(null, category.short_name)}>{category.name}</button>
    </li>
  ));

  return (
    <ul className='flex justify-between gap-4 flex-wrap bg-accent py-3 rounded-lg px-4 text-whitish'>
      {returnCategoriesList}
    </ul>
  );
};

export default Categories;
