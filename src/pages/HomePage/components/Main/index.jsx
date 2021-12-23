import { Footer } from 'comman/components/Footer';
import Header from 'comman/components/Header';
import { SubHeader } from 'comman/components/SubHeader';
import React from 'react'
import HomeProperties from './components/HomeProperties';
// import HomeProperties from './components/HomeProperties';
import Search from './components/Search';



const Main = ({city, setCity ,name , setName,location,setLocation}) => {
    return (
        <>
            <div className="body">
                <Header city={city} setCity={setCity}  name={name}  setName={setName} location={location} setLocation={setLocation}  />
                <SubHeader city={city} location={location} />
                <Search/>
                <HomeProperties/>
                <Footer/>

            </div>

        </>
    )
}

export default Main;