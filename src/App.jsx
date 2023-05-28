import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

import Box from './components/Box/Box';
import Basket from './components/Basket/Basket';

function App() {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <main className='flex'>
        {false && <Sidebar />}
        <Box />
        <Basket />
      </main>
    </div>
  );
}

export default App;
