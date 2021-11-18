import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const LocationinCity = (props) => {
    // const dispatch = useDispatch()
    const property = useSelector(state => state.property)
const history=useHistory()

    const del_laxmi = ()=>{
        var allItems =props.fetchPropHeader;
        // const sortedFetchPropertiesArray = allItems.sort((a, b) => a.location > b.location ? 1 : -1);
        const sortedFetchPropertiesArray = allItems.filter((a) => a.location == props.location);
        if(sortedFetchPropertiesArray.length==0){
            alert(props.location+""+"not available")
            // const sortedFetchPropertiesArray = allItems.filter((a) => a.location == props.location);
            props.setFetchProperties(props.defaultfetchProperties);

        }else{
            props.setFetchProperties(sortedFetchPropertiesArray);

        }



        // dispatch({
        //     type:"SAVE_SELECTED_LOCATION",
        //      payload:{
        //         area:props.location
        //     }
        // });


        // history.push({
        //     pathname:"/propertylist",
           

        //       state:{
        //     //     area:props.location,
        //         reason:"Buyer/Owner",
        //        flat:"Flat/ Apartment"
        //     //     city:props.city
 
        //     }
        // })


     }
   
    return (
       <>
        <li class="roundbtn"> 
       <button class="btn btn-outline-secondary" type="button" onClick={del_laxmi} >{props.location}</button>
       {/* <button class="btn btn-outline-secondary" type="button" onClick={del_laxmi} >{property?.selectedLocation?.area}</button> */}

       </li>
       </>
    )
}
