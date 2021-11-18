import axios from 'axios';
import properties from 'properties';
import React, { useEffect, useState } from 'react'
import MallPropertyBoxes from './components/MallPropertyBoxes';

 const MallProperties = ({title}) => {
     
    const [fetchProperties, setFetchProperties] = useState([]);
     
     
    useEffect(() => {
       getData();
        
    }, [])
  
   async function getData() {
       const propertiesResult = await axios.get(properties.mallproperties_image_url);
       console.log(propertiesResult);
       setFetchProperties(propertiesResult.data.data);
   }
    return (
        <>
            <div className="text20"> <h2 >{title}
            </h2><a href="#" ><span className="view1">View all</span></a></div>
            <div className="container1">

            {    
                 fetchProperties.map((properties,index)=>{
                     

                      return(
                        properties.property_images &&
                        <MallPropertyBoxes
                        id={properties.id}
                        image={properties.property_images} 
                        type={properties.type}
                        city={properties.city}
                        
                         />

                      )
                  })
              }        



             {/* <MallPropertyBoxes
            link="index.html"
            title="Mall Inspection"
            title1="Make sure you're getting what your Mall (Rave3) promised"
            />
             <MallPropertyBoxes
            link="index.html"
            title="Mall Inspection"
            title1="Make sure you're getting what your Mall (RaveMoti) promised"
            />
             <MallPropertyBoxes
            link="index.html"
            title="Mall Inspection"
            title1="Make sure you're getting what your Mall (RaveMoti) promised"
            /> */}
            </div>
            </>
    )
}


export default MallProperties