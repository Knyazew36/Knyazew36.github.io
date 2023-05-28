import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TableServices from '../Table/TableServices';

const Box = () => {
  const service = useSelector((state) => state.service);
  return (
    <div className='w-full p-2 print:hidden'>
      {Object.keys(service).map((section, index) => (
        <Accordion defaultActiveKey='0' key={section}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{section}</Accordion.Header>
            <Accordion.Body>
              <TableServices
                data={service[section]}
                key={service[section].code}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Box;
