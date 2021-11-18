import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const FlatsInCity = () => {
  const property = useSelector(state => state.property)
   const history= useHistory()
   
      
    const flat_type=()=>{
        history.push({
            pathname:"./propertylist",
            state:{
                reason:"Buyer/Owner",
                city:property?.selectedCity?.city,
                // location:property?.selectedLocation?.area,
                flat:"Flat/ Apartment"
            }     

        })
    }

    return (
    <div className="drop-links">
        {/* <li><div className= "drop-links-bdg"    onClick={flat_type}>flat in {props.city}</div></li> */}
        <li><div className= "drop-links-bdg"    onClick={flat_type}>flat in {property?.selectedCity?.city}</div></li>

    </div>
    )
}
