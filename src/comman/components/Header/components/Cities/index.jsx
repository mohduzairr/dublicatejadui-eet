import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const Cities = (props) => {
  const dispatch=useDispatch();
    //  const property = useSelector(state => state.property)
    const samecity = ()=>{
        dispatch({
            type:"SAVE_SELECTED_CITY",
         payload:{
            city:props.city,
        }
    });
    }


    
    return (
       <> 
        <div className="city-pop">

            <li>
            <a href="#" onClick={samecity}>{props.city}</a>
            {/* <a href="#" onClick={samecity}>{property?.selectedCity?.city}</a> */}

            </li>
{/* 
        <ul className="city-drop-link-group">
            <li>
            <a href="" onClick={samecity}>{props.city}</a>
            </li>
            </ul> */}
        </div>
       </>
    )
}
