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
                 fetchProperties.map((properties,index)=>{
                     

                      return(
                        properties.property_images &&
                        <PropertyBox
                        id={properties.id}
                        image={properties.property_images} 
                        type={properties.type}
                         />

                      )
                  })
              }        
                   
                    {/* <PropertyBox link="index.html" image="images/bg_1.jpeg" title="Porpetry2" />
                    <PropertyBox link="index.html" image="images/bg_1.jpeg" title="Porpety3" />
                    <PropertyBox link="index.html" image="images/bg_1.jpeg" title="Porpety3" /> */}

                    
                   </div>
        </>
    )
}

export default PublicProperties
