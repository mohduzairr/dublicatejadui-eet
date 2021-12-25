import axios from 'axios';
import properties from 'properties';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { Cities } from './components/Cities';
  


function Header({ setCity,setLocation}) {
    const  property = useSelector(state => state.property)
//    const location=useLocation();
   const [citydata,setCityData]= useState([]);
//    const [cityheads,setCityHeads]= useState("");
   const user = useSelector(state => state.user)

  useEffect(() => {
     getData();
    //  userData()

      
  }, [])

 async function getData() {
     const citiesResult = await axios.get(properties. area_locality_url);
     setCityData(citiesResult.data.data);
    //  setCityHeads(citiesResult.data.data)
 }


    


    const history = useHistory();
    const login=()=>{
        history.push('/login')
    }

    const signup=()=>{
        history.push('/register')
    }

   

   

   

    const proplist=()=>{
        history.push({
            pathname:'/propertylist'
        });
    }
   

    const postproperty=()=>{
        if(user?.data?.token){
            history.push('/propertypost');
    
         }else{
             alert("please first login than you can post the property")
            history.push('/login');
         }

    }

    const redirecthome=()=>{
        history.push('./')
    }

  
   const profile =()=>{

       history.push({
        pathname:'/profilepage',
          state:{
             token:user?.data?.token,
            // name:user?.data?.name,
            // email:user?.data?.email,
            // phone:user?.data?.phone
          }
       })
   }

   

    return (
        <>
        <header className="head">
        {/* <!-- As a heading --> */}

        <nav className="navbar main-navbar navbar-expand-md container" id="navbar">

            <div className="hamburger-menu">
            <input type ="checkbox"/>

            <div  className="hamburgers-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>

            </div>
            <div className="menu-items">
            <ul className="back">
            <li className="btn3" >PropNex<li className="text11"></li></li>
            <li className="btn4">SignUp Now!</li>
            <li className="text12"><strong>Sign in to get a personalised feed!</strong></li>
            <li>Login</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Resources</li>
            <li>Help</li>


            </ul>
            </div>
            </div>
            <div className="navbar-brand" onClick={redirecthome}>Propnex</div>


            <div className="collapse navbar-collapse justify-content-evenly">

            <div className="navbar-nav">
            <div className="dropdown">

            {/* <div className="dropdown-toggle " data-toggle="dropdown"><span className="text">{city}</span></div> */}
            <div className="dropdown-toggle " data-toggle="dropdown"><span className="text">{property?.selectedCity?.city}</span></div>

            <div className="dropdown-menu">
            <div className="menu">
            <div className="city-drop-lt">
            <div className="city-drop-row">
            {/* <div className="cell">
            <a href="" className="text3">INDIA</a>
            </div> */}
            {/* <div className="cell text-right pos-rel">
            </div> */}
            </div><br/><br/>

            {/* <div className="city-drop-heading">Popular Cities</div> */}
                       {/* {
                           
                          citydata.map((fetchcity)=>{
                             return(
                                <Cities
                                city={fetchcity.city}
                                setCity={setCity}
                                />
                             )
                           })
                       } */}

                         
            {/* <ul className="city-drop-link-group">
            <li>
            <a href="">New Delhi</a>
            </li> */}
            {/* <li>
            <a href="" >banglore</a>
            </li>
            <li>
            <a href="">Patna</a>
            </li>
            <li>
            <a href="">Karela</a>
            </li>
            <li>
            <a href="">Hydrabad</a>
            </li> */}
            {/* </ul> */}
            {/* <div className="city-drop-heading">Other Cities</div> */}
            <div className="cell">
            {/* <a href="" className="text3">INDIA</a> */}
            </div><br/>
            {/* <div className="city-drop-heading">Popular Cities</div> */}

            <ul className="city-drop-link-group">

                        {
                           
                           citydata.map((fetchcity)=>{
                              return(
                                 <Cities
                                 city={fetchcity.city}
                                 setCity={setCity}
                                 location={fetchcity.location}
                                 setLocation={setLocation}
                                 />
                              )
                            })
                        }


            {/* <li>
            <a href=""></a>
            </li>
            <li>
            <a href=""></a>
            </li>
            <li>
            <a href=""></a>
            </li>
            <li>
            <a href=""></a>
            </li>
            <li>
            <a href="">Faridabad</a>
            </li> */}

            </ul>
            </div>
   

            {/* <div className="city-drop-lt">
            <div className="city-drop-row">
            <div className="cell">
            <a href="" className="text3">INDIA</a>
            </div>
            <div className="cell text-right pos-rel">
            </div>
            </div>

            <div className="city-drop-heading">Nearby Cities</div>
            <ul className="city-drop-link-group">
            <li>
            <a href="">Noida</a>
            </li>
            </ul>
            <div className="city-drop-heading">Popular Cities</div>
            <ul className="city-drop-link-group">
            <li>
            <a href="">New Delhi</a>
            </li>

            </ul>
            <div className="city-drop-heading">Other Cities</div>
            <ul className="city-drop-link-group">
            <li>
            <a href="">Trivandrum</a>
            </li>
            </ul>
            </div> */}
            
            </div>
            </div>
            </div>
            </div>
            <span className="space"></span>
             
            <div className="navbar-nav">               
             {/* condition ? statement 1 : statement 2 */}
            <div className="dropdown">

            <div className="dropdown-toggle" data-toggle="dropdown">
           <span className="text" >  { user?.data?.token ? "Hi," +user?.data?.name :  "Login"} </span>
            </div>
            <div className="dropdown-menu">
            <div className="login">
            <div className="mb-login__box">
            <div className="mb-login__divider1">
            <span className="mb-login__divider__label">My Activity</span>
            </div>
            <div className="mb-login__drop-links">
            <li ><a href="">Contacted Properties</a></li>
            <li ><div className="drop-links-bdg" onClick={proplist}>Viewed Properties</div></li>
            <li><a href="">Shortlisted Properties</a></li>
            <li id=""><a href="">Searches</a></li>
            </div>
            <div className="mb-login__divider"></div>
            <div className="mb-login__drop-links">
            <li><a href="">Recommendations</a></li>
            <li><div className="drop-links-bdg" onClick={profile}> {user?.data?.token &&  "My Profile"}</div></li>
            </div>
            </div>
            <div className="mb-login__box signup-box">
            <a href="#" className="mb-login__drop-cta" onClick={login} style={{backgroundColor:'rgb(216, 35, 42)'}}  >Login</a>
            <div className="mb-login__drop-text-2">New to Magicbricks?<a href="#"  className="signup-link"  onClick={signup}  >SignUp</a></div>
            </div>
            </div>

            </div>
            </div>
            </div>
            <div className="mb-header__main__postproperty">
            <a href="#" onClick={postproperty}>Post Property <span className="badge" style={{backgroundColor:'#ffc72c',fontWeight:'bold',texttransform: 'uppercase'}}>Free</span></a>
            </div>
            </div>
            {/* </div> */}
        </nav>



    </header>
     </>
    )
}

export default Header
