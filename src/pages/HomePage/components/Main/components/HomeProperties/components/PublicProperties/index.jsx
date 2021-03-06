import axios from 'axios';
import properties from 'properties';
import {React, useEffect, useState,} from 'react'
import PropertyBox from './comoponents/PropertyBox';
// import PropertyBox from '../PropertyBox'

function PublicProperties({title}) {
    const [fetchProperties, setFetchProperties] = useState([]);
     
     
     useEffect(() => {
        getData();
         
     }, [])
   
    async function getData() {
        const propertiesResult = await axios.get(properties.properties_list_url);
        console.log(propertiesResult);
        setFetchProperties(propertiesResult.data.data);
    }
    return (
        <>
                    <div className="text20"> <h2 >{title}
                    </h2></div>

                    <div className="container1">

              {    
                 fetchProperties.slice(0,4).map((properties,index)=>{
                     
                 

                  
                      return(
                        properties.property_images &&
                        <PropertyBox
                        id={properties.id}
                        image={properties.property_images} 
                        type={properties.type}
                        location={properties.location}
                         />

                      )
                    
                  })
              }        
                   
                    
                   </div>
        </>
    )
}

export default PublicProperties
