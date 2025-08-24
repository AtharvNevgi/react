import React, {useEffect, useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(
        ()=> {
            console.log("Count Changed");
        },
        [count]
    )

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count -1);
    }
    const reset = () => {
        setCount(0);
    }
    {
        /*
        *{
        margin: 0;
        padding: 0;
        }
        .counter-container {
        text-align: center;
        font-family: Arial, sans-serif; 
        background-color: black;
        height: 100vh;
        }
        .counter-display {
        font-size: 10em;
        margin-top: 0;
        margin-bottom: 50px;
        color: white;
        }
        .counter-button {
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        font-weight: bold;
        margin: 0px 5px;
        background-color: hsl( 197, 100%, 58%);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        }
        .counter-button:hover {
        background-color: hsl( 197, 100%, 48%);
        }
        */
    }
    return( <>
                <div className="counter-container">
                    <p className="counter-display">{count}</p>
                    <button className="counter-button" onClick={decrement}>Decrement</button>
                    <button className="counter-button" onClick={reset}>Reset</button>
                    <button className="counter-button" onClick={increment}>Increment</button>
                </div>
            </>)
}
export default Counter