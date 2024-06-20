import React from 'react'
import { useEffect, useState } from 'react'
import "./orderbut.css"
import BuyCard from './BuyCard'
const Orderbut = ({price , title}) => {

  const [value, setvalue] =useState(0)
  
  // useEffect(() => {
  //   alert("i am always changing ")
  //  });

  // useEffect(() => {
  //   console.log("i only come once")
  //  }, []);
  
  // useEffect(() => {
  //    console.log("value is changed")
  //   }, [value]);
  // console.log(title);
    
  // console.log(value)
    return (
        <>
        
      <div className='card-margin linee'>
        Price - <span className='price'>   {price} </span>
      </div>
        <div className='mid'>
          
            <div className='but'> 
          {/* asdasdasdasdasd */}
        <button className='card-margin left' onClick={()=>{
          if (value > 0) {setvalue(value -  1)}
        }} > - </button>
        <p  className='card-margin '> {value}  </p>
        <button className='card-margin right' onClick={()=>{
          setvalue(value + 1)
        }} > + </button>
      </div>
        </div>
        <BuyCard value = {value} titles = {title} price = {price} setvalue = {setvalue} ></BuyCard>
        </>
      
     
    )
}

export default Orderbut
