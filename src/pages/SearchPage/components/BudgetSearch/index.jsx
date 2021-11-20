import React, { useState } from 'react'

export const BudgetSearch = ({ maxprice,setMaxPrice, minprice, setMinPrice}) => {
   
    return (
        <div>
            <select onChange={(e)=>setMinPrice(e.target.value)}>
                <option value="min price">min price</option>
                <option value="500000">5lac</option>
                <option value="1000000">10lac</option>
                <option value="2000000">20lac</option>
                <option value="3000000">30lac</option>
                <option value="4000000">40lac</option>
            </select>
            <di>
            <select onChange={(e)=>setMaxPrice(e.target.value)}>
                <option value="">min price</option>
                <option value="1000000">10lac</option>
                <option value="2000000">20lac</option>
                <option value="3000000">30lac</option>
                <option value="4000000">40lac</option>
                <option value="5000000">50lac</option>
            </select>

            </di>
        </div>
    )
}
