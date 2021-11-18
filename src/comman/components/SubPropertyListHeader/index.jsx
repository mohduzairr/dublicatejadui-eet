import axios from 'axios'
// import { LocationinCity } from 'pages/LocationinCity'
import properties from 'properties'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { LocationinCity } from './components/LocationInCity'

export const SubPropertyListHeader = ({fetchProperties,setFetchProperties,defaultfetchProperties}) => {
    const property = useSelector(state => state.property)
    const history = useHistory();
     const [area,setArea]=useState();
          const location1=useLocation()
    const[location,setLocation]=useState([]);      


    useEffect(() => {
        getlocation();
        // setArea(city)

     }, [])

    async function getlocation() {
        //    const region = {area:city};
        // const region = {area:location1.state.city}
        const region = {area:property?.selectedCity?.city}

           console.log("123344"+region);
        const locationResult = await axios.get(properties.city_locality_url, { params: region });
        console.log("=====locality"+locationResult);
        setLocation(locationResult.data.data);

    }
    


    const city_flat = ()=>{
         history.push({
             pathname:'./propertylist',
             state:{
                 flat:"Flat/ Apartment",
                 reason:"Buyer/Owner",
                //  city:location1.state.city,
                 city:property?.selectedCity?.city,
                //  area:location.location

                 
             }
         })
    }


    


    const city_villa = ()=>{
        history.push({
            pathname:'./propertylist',
            state:{
                flat:"Villa",
                reason:"Buyer/Owner",
                // city:location1.state.city,
                city:property?.selectedCity?.city,
                area:location.location

                
            }
        })
   }


   const all_location = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            // city:location1.state.city
            flat:"Flat/ Apartment",

            city:property?.selectedCity?.city,

         
        }
    })
}


const bhk_one = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            // city:location1.state.city,
            reason:"Buyer/Owner",
            onebedroom:"1bedroom",
            city:property?.selectedCity?.city

           

         
        }
    })
}


const bhk_two = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            // city:location1.state.city,
            reason:"Buyer/Owner",
            twobedroom:"2bedroom",
            city:property?.selectedCity?.city,

           

         
        }
    })
}


const bhk_three = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            city:location1.state.city,
            reason:"Buyer/Owner",
            threebedroom:"3bedroom",
            city:property?.selectedCity?.city

           

         
        }
    })
}


const budget = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            // city:location1.state.city,
            city:property?.selectedCity?.city,
            flat:"Flat/ Apartment",
            maxbudget:1500000,
            minbudget:100000,
            reason:"Buyer/Owner"

        }
    })
}


const owner = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            // city:location1.state.city,
            city:property?.selectedCity?.city,
            flat:"Flat/ Apartment",
            reason:"Buyer/Owner",
            owner:1


        }
    })
}

const agent = ()=>{
    history.push({
        pathname:'./propertylist',
        state:{
            // city:location1.state.city,
            city:property?.selectedCity?.city,
            flat:"Villa",
            reason:"Rent/ Lease",
            agent:2

        }
    })
}



    return (
        <>

<header class="head">

      

        <div class="navigation12 ">
            <section class="navmenu">
                <div class="filternavbar">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Buy</button>
                                
                                <div class="dropdown-menu" role="menu">

                                    <li class="menuitem1"> Owner</li>
                                    {/* <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button">Buy</button><button class="btn btn-outline-secondary" type="button">Rent</button><button class="btn btn-outline-secondary" type="button">PG</button></li> */}
                                    <li class="menuitem1">Agentcc</li>
                                    {/* <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button">Buy</button><button class="btn btn-outline-secondary" type="button">Lease</button></li> */}
                                </div>
                            </div>
                            <input type="text" class="form-control" name="x" placeholder="Search term..."/>
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button"><i class="bi bi-search"></i></button>
                            </span>
                        </div>
                    </div>
                </div>


                <div class="comp1">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Top Localities</button>
                                
                                <div class="dropdown-menu" role="menu">
                                    <li class="roundbtn"> 
                                    <button class="btn btn-outline-secondary" type="button"  onClick={all_location}>Select All</button>
                                    </li>
                                 
                                     {
                                           location.map((locality)=>{
                                                return(
                                                    <LocationinCity
                                             location={locality.location}
                                                 city={locality.city}
                                     fetchPropHeader ={fetchProperties}
                                   setFetchProperties={setFetchProperties}
                                   defaultfetchProperties={defaultfetchProperties}
                                                 
                                                 />
                                                )
                                            })
                                     } 



                                    {/* <li class="roundbtn"> 
                                    <button class="btn btn-outline-secondary" type="button" onClick={del_laxmi} >laxminagar</button>
                                    </li> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="comp1">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Flat</button>
                                
                                <div class="dropdown-menu" role="menu">
                                    <ul>
                                        <li class="menuitem1"> Residential</li>
                                        <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button" onClick={city_flat}>Flat</button>
                                        <button class="btn btn-outline-secondary" type="button" onClick={city_villa}>House/villa</button>
                                        {/* <button class="btn btn-outline-secondary" type="button">Plot</button> */}
                                        </li>
                                        {/* <li class="menuitem1">Commercial</li> */}
                                        {/* <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button">Office Space</button><button class="btn btn-outline-secondary" type="button">Shop/Showroom</button></li> */}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="comp1">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Budget</button>
                                
                                <div class="dropdown-menu" role="menu">

                                    <li class="menuitem1"> Residential</li>
                                    <li class="roundbtn"> 
                                    <button class="btn btn-outline-secondary" type="button" onClick={budget}>Budget Under 15lac</button>
                                    {/* <button class="btn btn-outline-secondary" type="button">Rent</button>
                                    <button class="btn btn-outline-secondary" type="button">PG</button> */}
                                    </li>
                                    {/* <li class="menuitem1">Commercial</li>
                                    <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button">Buy</button>
                                    <button class="btn btn-outline-secondary" type="button">Lease</button>
                                    </li> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="comp1">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">BHK</button>
                                
                                <div class="dropdown-menu" role="menu">

                                    <li class="menuitem1"> </li>
                                    <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button" onClick={bhk_one}>1BHK</button>
                                    <button class="btn btn-outline-secondary" type="button" onClick={bhk_two}>2BHK</button>
                                    <button class="btn btn-outline-secondary" type="button" onClick={bhk_three}>3BHK</button>
                                    </li>
                                    <li class="menuitem1"></li>
                                    {/* <li class="roundbtn"> 
                                    <button class="btn btn-outline-secondary" type="button">4BHK</button>
                                    <button class="btn btn-outline-secondary" type="button">5BHK</button>
                                    </li> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="comp1">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Posted By</button>
                                
                                <div class="dropdown-menu" role="menu">

                                    {/* <li class="menuitem1"> Ownwer</li> */}
                                    <li class="roundbtn">
                                         <button class="btn btn-outline-secondary" type="button" onClick={owner}>Owner</button>
                                         {/* <button class="btn btn-outline-secondary" type="button">Rent</button> */}
                                         {/* <button class="btn btn-outline-secondary" type="button">PG</button> */}
                                         </li>
                                    {/* <li class="menuitem1">Commercial</li> */}
                                    <li class="roundbtn"> 
                                    <button class="btn btn-outline-secondary" type="button" onClick={agent}>Agent</button>
                                    {/* <button class="btn btn-outline-secondary" type="button">Lease</button> */}
                                    </li>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="comp1">
                    <div class="col-xs-8">
                        <div class="input-group">
                            <div class="input-group-btn search-panel">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">More Filters</button>
                                
                                <div class="dropdown-menu" role="menu">

                                    <li class="menuitem1"> Owner</li>
                                    <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button">Buy</button><button class="btn btn-outline-secondary" type="button">Rent</button><button class="btn btn-outline-secondary" type="button">PG</button></li>
                                    <li class="menuitem1">Agent</li>
                                    <li class="roundbtn"> <button class="btn btn-outline-secondary" type="button">Buy</button><button class="btn btn-outline-secondary" type="button">Lease</button></li>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        

        </div>

    </header>
    
        </>

    )
}
