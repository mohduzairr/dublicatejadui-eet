import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router'

export const RentFlatCity = () => {
   const history = useHistory();
  const property = useSelector(state => state.property)

 const rent_flat=()=>{
        history.push({
            pathname:"./propertylist",
            state:{
                // city:props.city,
                city: property?.selectedCity?.city,
                flat:"Flat/ Apartment",
                reason:"Rent/ Lease",

            }     

        })   
     }

    return (
    <div className="drop-links">

        <li>
            <div className="drop-links-bdg" onClick={rent_flat}>Flat in  {property?.selectedCity?.city}  </div>
        </li>

    </div>
    )
}
