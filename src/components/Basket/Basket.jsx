import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TextBottom from '../Text/TextBottom';
const Basket = () => {
  const services = useSelector((state) => state.basket);
  useEffect(() => {}, [services]);
  return (
    <div className='w-[20%] h-full basket'>
      <div className='px-2 py-6 fixed basket right-0 bottom-0 top-24 flex w-[16%] flex-col justify-between basket-gradient print:w-full print:justify-start'>
        <p className='text-xl font-bold print:hidden'>Выбранные услуги:</p>
        <p className='text-xl font-bold print:block hidden mb-8 text-center'>
          Предварительный план лечения и стоимость услуг в рублях:
        </p>
        <div className='overflow-y-auto h-[70%] print:h-auto '>
          <ol className='px-0 flex flex-col gap-2 max-w-7xl print:gap-2.5'>
            {services.map((item, index) => (
              <li
                className='flex gap-2 px-1 print:px-0 print:w-full print:justify-between'
                key={index}
              >
                <p className='w-[80%]'> {item.description}</p>
                <p className=' shrink-0 w-12 text-bold'>{item.value} ед.</p>
                <p className=' shrink-0 w-[18%] text-bold hidden print:block'>
                  Цена: {item.price} руб.
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className='text-xl font-bold print:text-end'>
          Общая сумма:{' '}
          {services.reduce(
            (acc, item) =>
              acc + (item.value > 0 ? item.price * item.value : item.price),
            0
          )}{' '}
          руб.
        </p>
        <div className='flex flex-col gap-2 print-hidden print:hidden'>
          <button
            type='button'
            className='btn btn-success '
            onClick={() => window.print()}
          >
            Печать
          </button>
          <button type='button' className='btn btn-info '>
            Скидка
          </button>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className='btn btn-secondary'
            type='button'
          >
            Очистить полностью
          </button>
        </div>
        <TextBottom />
      </div>
    </div>
  );
};

export default Basket;
