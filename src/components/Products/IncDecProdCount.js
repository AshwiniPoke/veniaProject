import React from 'react';
import {useState} from "react";

const IncDecCount = () => {
 
    let [num, setNum]= useState(1);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>1)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
  return (
    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 quanBar'>
      <button className="quantity-minus" aria-label="DecQuantity" onClick={decNum}>-</button>
      <input type="text" className='quantity' value={num} onChange={handleChange} aria-label="quantity"/>
      <button className='quantity-plus' aria-label='IncQuantity' onClick={incNum}>+</button>
    </div>
  )
}

export default IncDecCount