import React, { useEffect, useState } from 'react';

function API() {
    const [number, setNumber] = useState()
    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(('http://numbersapi.com/random/math'))
            .then(res => JSON.stringify(res))
            .then(text => {
                console.log(text)
                // const num = text.split(' ')[0]
                // setNumber(num)

                // fetch(`http://numbersapi.com/${number}`)
                //     .then(response => response.json())
                //     .then(data => {
                //         console.log(data)
                //         setFact(data)
                //     })
            })
    }, [])

    return (
        <div>
            {fact && <p>{fact}</p>}
        </div>
    )
}

export default API;