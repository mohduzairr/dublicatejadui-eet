import React from 'react';
import { useState } from 'react';



const Radio = ({radio,setRadio})=>{
      
    return (
        <>
        {/* <div>i am</div> */}
        <div className="radio-div">
      <input onChange={(e)=>{
          console.log(e.currentTarget.value);
          setRadio(e.currentTarget.value)
      }} type="radio" id="css" name="fav_language"  value="1"/> 
       <label for="html">Buyer/Owner </label>

     <input onChange={(e)=>{
         console.log(e.currentTarget.value)
         setRadio(e.currentTarget.value)
        }} type="radio" id="css" name="fav_language" value="2"/>
       <label for="css">Agent </label>

       <input onChange={(e)=>{
       console.log(e.currentTarget.value)
       setRadio(e.currentTarget.value)
    }} type="radio" id="javascript" name="fav_language" value="3" />
        <label for="css">Builder</label>

        </div>
        </>

    )
}

export default Radio;