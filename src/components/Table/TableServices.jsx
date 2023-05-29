import React, { useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Controls from '../Controls/Controls';

const TableServices = ({ data }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Код услуги</th>
            <th>Услуга</th>
            <th>Цена</th>
            <th>Коллличество</th>
            <th>Управление</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => (
            <tr
              key={index}
              className={`cursor-pointer px-2 py-2  rounded-xl shadow-xl transition-all text-lg
                justify-between ${elem.value > 0 ? 'bg-green-300' : 'bg-yellow-50'
                }`}
            >
              <td>{elem.code}</td>
              <td>{elem.description}</td>
              <td className='w-[50px]'>{elem.price}</td>
              <td className='w-[50px]'>{elem.value} ед.</td>
              <td className='w-[150px]'>
                <Controls elem={elem} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableServices;
