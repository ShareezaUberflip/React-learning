import React, { useState } from 'react';

const increaseValue = (initialValue) => {
   return initialValue + 1;
};

const decreaseValue = (currentValue) => {
  return currentValue - 1;
};

const resetNumber = () => {
   return 0;
};

const UseStateCounter = () => {
  let [number, setNumber] = useState(0);
  return <>
    <section>
    <h2>Counter {number} </h2>
    <br/>
    <button className='button' style={{marginRight:'1rem'}}
      onClick={() =>
       // console.log(initialNum.value)
        setNumber(increaseValue(number))
      }
    >
      Increase</button>
     <button className='button' style={{marginRight:'1rem'}}
     onClick={() =>
       // console.log(initialNum.value)
        setNumber(decreaseValue(number))
      }
    >Decrease
     </button>

     <button className='button'
     onClick={() =>
       // console.log(initialNum.value)
        setNumber(resetNumber())
      }
    >Reset
     </button>
    </section> 

    </>;
};

export default UseStateCounter;
