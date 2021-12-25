import{ React,useState, useEffect} from 'react'
// import CardList from "../CardList";
import axios from 'axios';
import properties from '../../properties'
import { useLocation } from 'react-router';
import { Footer } from 'comman/components/Footer';
import Header from 'comman/components/Header';
import { DifferentPropertiesHeader } from './components/DifferentPropertiesHeader';
import { SubPropertyListHeader } from 'comman/components/SubPropertyListHeader';
import { useSelector } from 'react-redux';
import CardList from './components/CardList/indes';


 const PropertyListPage = ({city,setCity,setLocation}) => {
     const property = useSelector(state => state.property)
      const location=  useLocation();
      console.log("city dikhao"+location);
     // setCity(location.state.city);
     const [fetchProperties, setFetchProperties] = useState([]);

     const [cityy,setCityy]=useState()
     useEffect(() => {
        getData();
        

         
     }, [location.state]);

    async function getData() {
        const fetchData={city:property?.selectedCity?.city,flat:location.state?.flat,reason:location.state?.reason,maxbudget:location.state?.maxbudget,minbudget:location.state?.minbudget,location:property?.selectedLocation?.area,onebedroom:location.state?.onebedroom,twobedroom:location.state?.twobedroom,threebedroom:location.state?.threebedroom,owner:location.state?.rent,agent:location.state?.agent}
        console.log("dikha do be pagal"+fetchData);
        const propertiesResult = await axios.get(properties.search_url, { params: fetchData });
        console.log(propertiesResult);
        setFetchProperties(propertiesResult.data.data);
        setCityy(fetchData)

    }
    return (
        <>
        <div>
          
             <Header
                city={property?.selectedCity?.city}
             setCity={setCity}   
             />

           <SubPropertyListHeader
              city={city}
           setCity={setCity}
           fetchProperties ={fetchProperties}
           setFetchProperties={setFetchProperties}
           defaultfetchProperties={[...fetchProperties]}

           />

            {  cityy &&
           <DifferentPropertiesHeader
                        city ={cityy.city}
                        flat ={cityy.flat}
                       reason={cityy.reason}
                        price={cityy.flat_price}
                        location={cityy.location}
               per_square_fit={cityy.per_square_fit}
                   created_at={cityy.created_at}
             fetchPropHeader ={fetchProperties}
           setFetchProperties={setFetchProperties}
           />}
           
                    {
                        fetchProperties.length ?
                       fetchProperties.map((property,index)=>{
                            return (

                                <CardList
                                id={property.id}
                                city={property.city}
                                flatprice={property.flat_price}
                                location={property.location}
                                per_square_fit={property.per_square_fit}
                                furnish_status={property.furnished_status}
                                images={property.property_images}
                                reason={property.reason}
                                type={property.type}
                                superarea_length={property.superarea_length}
                                Possession_Status={property.Possession_Status}
                                water_availability_status={property.water_availability_status}
                                name={property.name}
                                commercialcomplex_status={property.commercialcomplex_status}
                                />
                        )})  : <p style={{textAlign:'center',fontSize:"35px",paddingTop:"50px",paddingBottom:"50px",color:'rgb(216, 35, 42)'}}>Properties Not Found</p>    }
                            <Footer/>


        </div>

        </>
    )
}


export default  PropertyListPage