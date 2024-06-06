import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryItems, getMenuCategories } from '../features/menu/menuThunks';

const Table = () => {
  const dispatch = useDispatch();
  const { categoryItems } = useSelector((store) => store.menu);

  useEffect(() => {
    dispatch(getMenuCategories());
    dispatch(getCategoryItems('SS'));
  }, []);

  const leftColumClasses = 'px-6 py-3 border-r border-blackish';
  const rightColumnClasses = 'px-6 py-3';

  const returnCategoryList = categoryItems.map((item) => (
    <tr key={item.id} className='border border-blackish hover:text-black'>
      <td className={leftColumClasses}>{item.name}</td>
      <td className={rightColumnClasses}>{item.description}</td>
    </tr>
  ));

  return (
    <table className='w-full text-left'>
      <thead className='uppercase border border-blackish'>
        <tr>
          <th className={leftColumClasses}>name</th>
          <th className={rightColumnClasses}>description</th>
        </tr>
      </thead>
      <tbody>{returnCategoryList}</tbody>
    </table>
  );
};

export default Table;
