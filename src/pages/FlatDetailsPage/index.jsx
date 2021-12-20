import{ React,useState, useEffect} from 'react'
import properties from '../../properties'
import axios from 'axios';
import { useLocation } from 'react-router'
import Header from 'comman/components/Header'
import { PropertyDeatailsBox } from './components/PropertyDetailsBox'
import { FlatAgent } from './components/FlatAgent'
import { FlatDescription } from './components/FlatDescription';
import { PropertySimilarProject } from './components/PropertySimilarProject';
import { FlatDetailsSlider } from './components/FlatDetailsSlider';
import { Footer } from 'comman/components/Footer';
import { SubHeader } from 'comman/components/SubHeader';
 

export const FlatDetails = () => {
    const [fetchProperties, setFetchProperties] = useState();
    const location = useLocation();
    //  console.log(location.state)

    useEffect(() => {
       getData();
    }, [])
    
  
   async function getData() {
    // const details_prop= {location:location.state}
    const details_prop=location.state
    //  console.log(details_prop)
       const propertiesResult = await axios.get(properties.properties_details_url+"/"+details_prop);

       console.log(propertiesResult);
       setFetchProperties(propertiesResult.data.data);
   }

  

    return (
        <>   
        <Header/>
        <SubHeader/>
        <div class="container size">

                  { fetchProperties &&   
                    <PropertyDeatailsBox
                    id={fetchProperties.id}
                    city={fetchProperties.city}
                    flatprice={fetchProperties.flat_price}
                    location={fetchProperties.location}
                    per_square_fit={fetchProperties.per_square_fit}
                    furnish_status={fetchProperties.furnished_status}
                    images={fetchProperties.property_images}
                    reason={fetchProperties.reason}
                    bedroom={fetchProperties.bedroom}
                    bathroom={fetchProperties.bathroom}
                    balcony={fetchProperties.balcony}
                    phone={fetchProperties.phone}  
                    type={fetchProperties.type}
                    superarea_length={fetchProperties.superarea_length}
                    carpet_area={fetchProperties.carpet_area}
                    transaction_type={fetchProperties.transaction_type}
                    Possession_Status={fetchProperties.Possession_Status}
                    covered_carparking={fetchProperties.covered_carparking}
                    project_society_name={fetchProperties.project_society_name}





                    
                    />
                }      
            
            <FlatAgent/>
            <FlatDescription/>
            <PropertySimilarProject/>
            <FlatDetailsSlider/>
            </div>
            <Footer/>

        </>
    )
}
