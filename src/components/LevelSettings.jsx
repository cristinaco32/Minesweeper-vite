import React from 'react';
import '../style/LevelSettings.css';

function LevelSettings({ changeGameLevel }) {
  return (
    <section className='flex flex-row justify-center p-2.5 bg-ls-color-1 my-0 mx-[21.875em] rounded-[1.25em]'> 
      <button className='my-0 mx-2.5 pr-2.5 pl-[0.938em] text-ls-color-2 
      rounded-md cursor-pointer bg-transparent  duration-200 hover:bg-ls-color-3 transition hover:text-ls-color-1 font-italic' onClick={() => { changeGameLevel('Easy') }}>Easy</button>
      <button className='my-0 mx-2.5 pr-2.5 pl-[0.938em] text-ls-color-2 
      rounded-md cursor-pointer bg-transparent  duration-200 hover:bg-ls-color-3 transition hover:text-ls-color-1 font-italic' onClick={() => { changeGameLevel('Intermediate') }}>Intermediate</button>
      <button className='my-0 mx-2.5 pr-2.5 pl-[0.938em] text-ls-color-2 
      rounded-md cursor-pointer bg-transparent  duration-200 hover:bg-ls-color-3 transition hover:text-ls-color-1 font-italic' onClick={() => { changeGameLevel('Expert') }}>Expert</button>
    </section>
  );
}

export default LevelSettings;
