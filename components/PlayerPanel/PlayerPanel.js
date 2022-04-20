import React from 'react';

const PlayerPanel = ({ name = 'Player' }) => {
  return (
    <div className='w-1/4 flex flex-col gap-y-4 bg-gray-100 p-4 border-r border-gray-600'>
      <h2 className='text-2xl font-semibold text-gray-800'>{name}</h2>
      <div className='w-full h-full grid grid-cols-2 grid-rows-3 gap-4'>
        <div className='flex-1 bg-blue-200'></div>
        <div className='flex-1 bg-red-200'></div>
        <div className='flex-1 bg-slate-200'></div>
        <div className='flex-1 bg-green-200'></div>
        <div className='flex-1 bg-yellow-200'></div>
        <div className='flex-1 bg-purple-200'></div>
      </div>
    </div>
  );
};

export default PlayerPanel;
