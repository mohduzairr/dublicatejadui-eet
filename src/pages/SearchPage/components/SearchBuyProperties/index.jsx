import React, { useState } from 'react'

export const SearchBuyProperties = ({plot,setPlot,flat,setFlat,villa,setVilla}) => {

   
  
  

    return (
        <> 
        <ul>
        <li>
            <button onClick={()=>setFlat(!flat)} checked={flat} type="checkbox">1BHK</button><br/><br/>
        </li>
        <li>
            <button onClick={()=>setPlot(!plot)} checked={plot} type="checkbox">2BHK</button><br/><br/>
       </li>
       <li>
            <button onClick={()=>setVilla(!villa)} checked={villa} type="checkbox">3BHK </button>
       </li>     
            </ul>
         </>

    
    )
}
