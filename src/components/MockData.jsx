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
        <div>
            <textarea data-testid='MockData' autoFocus onChange={handleChange} value={inputText}/>
            <button onClick={handleClick}>Crear</button>
        </div>
    )
}

export default MockData;