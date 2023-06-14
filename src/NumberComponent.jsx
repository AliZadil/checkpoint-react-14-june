import React, { useEffect, useState } from 'react';

const NumberComponent = () => {
    const [number, setNumber] = useState(null);
    const [isOdd, setIsOdd] = useState(false);

    useEffect(() => {
        setIsOdd(number % 2 !== 0)
    }, [number])

    useEffect(() => {
        fetchNumber()
    }, []);

    const fetchNumber = () => {
        fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
            .then(response => response.text())
            .then(data => {
                const number =parseInt(data.trim());
                const isOdd = number % 2 !== 0;
                setIsOdd(isOdd)
                setNumber(number)
            })
    }
    
    const handleIncrement = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const handleSaveToLocal = () => {
        localStorage.setItem('numbers', number);
    }

    const handleLoadFromLocal = () => {
        const saveNumber = localStorage.getItem('numbers')
        if (saveNumber !== null) {
            setNumber(parseInt(saveNumber));
        }
    }

    const numberStyle = isOdd ? 'red' : 'blue';

    return (
        <div>
            <p className={numberStyle} >Number: {number}</p>
            <button onClick={handleIncrement} >Increament</button>
            <button onClick={handleSaveToLocal} >Save to Local</button>
            <button onClick={handleLoadFromLocal} >Load from local</button>
        </div>
    )
}




export default NumberComponent;