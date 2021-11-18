import axios from 'axios';
import properties from 'properties';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';






export const DifferentPropertiesHeader = (props) => {
  const property = useSelector(state => state.property)
console.log("batao be"+props);
  
  const lth_price = ()=>{
    var allItems = props.fetchPropHeader;
    const sortedFetchPropertiesArray = allItems.sort((a, b) => a.flat_price > b.flat_price ? 1 : -1);
    // sortedFetchPropertiesArray[0].flat_price=10;
    props.setFetchProperties([...sortedFetchPropertiesArray]);

  }


  const htl_price = ()=>{
    var allItems = props.fetchPropHeader;
    const sortedFetchPropertiesArray = allItems.sort((a, b) => a.flat_price > b.flat_price ? -1 : 1);
    // sortedFetchPropertiesArray[0].flat_price=10;
    props.setFetchProperties([...sortedFetchPropertiesArray]);

  }


  const htl_rate_sqft = ()=>{
    var allItems = props.fetchPropHeader;
    const sortedFetchPropertiesArray = allItems.sort((a, b) => a.per_square_fit > b.per_square_fit ? -1 : 1);
    // sortedFetchPropertiesArray[0].flat_price=10;
    props.setFetchProperties([...sortedFetchPropertiesArray]);

  }

  const lth_rate_sqft = ()=>{
    var allItems = props.fetchPropHeader;
    const sortedFetchPropertiesArray = allItems.sort((a, b) => a.per_square_fit > b.per_square_fit ? 1 : -1);
    // sortedFetchPropertiesArray[0].flat_price=10;
    props.setFetchProperties([...sortedFetchPropertiesArray]);

  }

  const recent_update = ()=>{
    var allItems = props.fetchPropHeader;
    // const sortedFetchPropertiesArray = allItems.sort((a, b) => a.created_at > b.created_at ? 1 : -1);
    // const sortedFetchPropertiesArray =allItems.slice().sort((a, b) => b.created_at - a.created_at);
    const sortedFetchPropertiesArray = allItems.sort((a,b) => new Date(a) > new Date(b) ? 1 : -1);

    // sortedFetchPropertiesArray[0].flat_price=10;
    props.setFetchProperties([...sortedFetchPropertiesArray]);

  }


    return (
        <>
      <div class="container contentbody justify-content-center" >

         <div class="heading-menu">
          <ul class="head-list">
            <li class="listing">
              <a href="#" class="active">
                Properties
              </a>
            </li>
            <li class="listing">
              <a href="#">New Project</a>
            </li>
            <li class="listing">
              <a href="#">Top Agents</a>
            </li>
          </ul>
        </div> 
        <div class="filter-menu">
        

          <div class="filter-menu1">
            <h1 class="filter-heading">
            {props.flat} Properties in {property?.selectedCity?.city} for {props.reason}{" "}
            </h1>
          </div>

          <div class="filter-menu2">
            <div class="sort">
              <div class="dropdown">
                <div
                  type="dropdown"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="txt"> Sort By</span> Relevance
                </div>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <button class="dropdown-item" type="button">
                      Relevance
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button" onClick={lth_price}>
                      Price - Low to High
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button" onClick={htl_price}>
                      Price - High to Low
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button" onClick={recent_update}>
                      Most Recent
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button" onClick={htl_rate_sqft}>
                      Rate/sqft - High to Low
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button"  onClick={lth_rate_sqft}>
                      Rate/sqft - Low to High
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sortlist">
              <div class="dropdown">
                <div
                  type="dropdown"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="txt">
                    {" "}
                    <i class="bi bi-list"></i>
                  </span>{" "}
                  List
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div>
        </>
            
    )
}
