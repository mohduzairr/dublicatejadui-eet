import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const RentBudgetFlat = () => {
    
    const property = useSelector(state => state.property)
    const history = useHistory()
    const rent_budget=()=>{
        history.push({
            pathname:"./propertylist",
            state:{
                reason:"Rent/ Lease",
                // city:props.city,
                city:property?.selectedCity?.city,
                flat:"Flat/ Apartment",
                reason:"Rent/ Lease",

            }     

        })       }



    return (
         <div className="drop-links">
           <li><div  className="drop-links-bdg"  onClick={rent_budget}>Under 50lac</div></li>
         </div>
    )
}
