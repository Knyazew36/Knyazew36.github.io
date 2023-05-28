import React from 'react';
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import TextTop from '../Text/textTop';
const Header = () => {
  return (
    <header className='flex relative h-24 shrink-0'>
      <div className='gradient-header h-24 justify-between  shadow-md fixed px-4 w-full flex items-center gap-20 z-10 '>
        <Link to={ROUTES.HOME} className='w-[150px] block shrink-0'>
          <img src='./logo.svg' />
        </Link>
        <Search />
        <TextTop />
      </div>
    </header>
  );
};

export default Header;
