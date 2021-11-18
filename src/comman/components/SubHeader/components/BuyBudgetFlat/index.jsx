import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const BuyBudgetFlat = () => {
    const property = useSelector(state => state.property)
 const history=useHistory()
    const budget_flats=()=>{
        history.push({
            pathname:"./propertylist",
            state:{
                reason:"Buyer/Owner",
                // city:props.city,
                city:property?.selectedCity?.city,
                flat:"Flat/ Apartment",
                maxbudget:5000000,
                minbudget:100000
            }     

        })    }

    return (
   <div className="drop-links">
        <li><div className="drop-links-bdg"   onClick={budget_flats}>Under 50lac</div></li>

    </div>
    )
}
