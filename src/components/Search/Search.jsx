import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Controls from '../Controls/Controls';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const service = useSelector((state) => state.service);
  const serviceSearchList = [];

  Object.keys(service).map((e) => service[e].map((n) => serviceSearchList.push(n)));

  const searchInputHandler = (value) => {
    setInputValue(value);
    serviceSearchList.filter((el) => el.description);
  };
  
  return (
    <div className='relative w-[90%] print:hidden'>
      <form>
        <input
          type='search'
          value={inputValue}
          onChange={(e) => searchInputHandler(e.target.value)}
          placeholder='Поиск услуг'
          className='relative z-20'
        />
      </form>
      {inputValue && (
        <>
          <div
            className='fixed w-full h-full bg-black left-0 bottom-0 opacity-25 transition-all delay-1000'
            onClick={() => setInputValue('')}
          ></div>
          <div className='absolute bg-[rgb(167,215,255)] w-full left-0 rounded-xl max-h-[70vh] overflow-y-auto px-3 py-3 flex flex-col gap-2 shadow-2xl rounded-t-none'>
            {serviceSearchList
              .filter((el) => {
                if (
                  el.description
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                ) {
                  return true;
                }
              })
              .map((elem, index) => (
                <tr
                  key={index}
                  className={`cursor-pointer px-2 py-2  flex rounded-xl shadow-xl transition-all text-lg
                justify-between ${
                  elem.value > 0 ? 'bg-green-300' : 'bg-yellow-50'
                }`}
                >
                  <td className='w-[60%]'>{elem.description}</td>
                  <td className='w-[12.5%]'>Цена: {elem.price}</td>
                  <td className='w-[12.5%]'> Колличество: {elem.value}</td>
                  <td className='w-[15%]'>
                    <Controls elem={elem} />
                  </td>
                </tr>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
