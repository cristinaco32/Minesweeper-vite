import React, { useEffect, useState } from 'react';

function API() {
    const [fact, setFact] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        fetch(('http://numbersapi.com/random/math'))
            .then(res => res.text())
            .then(text => {
                setFact(text)
                fetch(`https://cataas.com/cat/says/${text}?json=true`)
                    .then(response => response.json())
                    .then(data => {
                        const {url} = data
                        setImage(url)
                    })
            })
    }, [])

    return (
        <div>
            {image && <img className='max-w-lg max-h-50 mt-5 mr-5' 
            src={`https://cataas.com/${image}`} alt='Random image of a cat with a number fact'/>}
        </div>
        
    )
}

export default API;