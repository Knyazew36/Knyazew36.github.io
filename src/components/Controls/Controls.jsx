import React from 'react';

import { updateService } from '../../serviceSlice/serviceSlice';
import { addBasket, removeBasket } from '../../basketSlice/basketSlice';
import { useDispatch } from 'react-redux';

const Controls = ({ elem }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-2 '>
      <button
        className='btn btn-primary'
        onClick={() => {
          const increment = true;
          dispatch(updateService({ ...elem, increment }));
          dispatch(addBasket({ ...elem, value: 1 }));
        }}
      >
        Добавить
      </button>
      <button
        onClick={() => {
          const decrement = true;
          dispatch(updateService({ ...elem, decrement }));
          dispatch(removeBasket(elem));
        }}
        className='btn btn-danger'
      >
        Уменьшить
      </button>
    </div>
  );
};

export default Controls;
