import React from 'react';

const Board = () => {
  return (
    <div className='w-1/2 flex-1 flex justify-center items-center bg-gray-100 p-4'>
      <div className='w-full h-full grid grid-cols-3 grid-rows-3 gap-4'>
        <div className='bg-blue-200'></div>
        <div className='bg-red-200'></div>
        <div className='bg-slate-200'></div>
        <div className='bg-green-200'></div>
        <div className='bg-yellow-200'></div>
        <div className='bg-purple-200'></div>
        <div className='bg-orange-200'></div>
        <div className='bg-cyan-200'></div>
        <div className='bg-teal-200'></div>
      </div>
    </div>
  );
};

export default Board;
