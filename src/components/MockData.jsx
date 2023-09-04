import React, { useState } from 'react';

function MockData({ getMockData }) {
    const [inputText, setInputText] = useState('')

    const handleChange = (event) => {
      setInputText(event.target.value)
    };
  
    const handleClick = () => {
      getMockData(inputText)
    };
  

    return (
        <div className='flex flex-col'>
            <textarea className='font-italic w-[300px] h-[100px] border-2 border-solid border-red-800 hover:border-green-400 hover:outline-none focus:border-green-400 focus:outline-none' data-testid='mockDataLoader-textarea' autoFocus onChange={handleChange} value={inputText}/>
            <button className='bg-green-400 font-italic border-2 border-solid border-t-green-200 border-r-green-600 border-b-green-600 border-l-green-200' data-testid='mockDataLoader-loadButton' onClick={handleClick}>Crear</button>
        </div>
    )
}

export default MockData;