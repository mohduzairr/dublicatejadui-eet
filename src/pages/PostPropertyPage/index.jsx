import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import properties from '../../properties';
import Header from 'comman/components/Header';
import { OwnerDetailspost } from './components/OwnerDetailsPost';
import { PropertyFeaturesPost } from './components/PropertyFeaturesPost';
import { CommercialShopPost } from './components/CommercialShopPost';
import { PropertiesImages } from './components/PropertiesImages';
import { Footer } from 'comman/components/Footer';
import { useSelector } from 'react-redux';

 const PostPropertyPage = () => {


   
    const [role, setRole] = useState("");
    const[checkrole,setCheckrole]=useState('');
    const[name,setName]=useState("");
    const[chectname,setCheckname]=useState();
    const[phone,setPhone]=useState("");
    const[checkphone,setCheckphone]=useState()
    const[email,setEmail]=useState("");
    const [checkemail,setCheckmail]=useState();
    const [reason, setReason] = useState("");
    const[checkreason,setCheckreason] = useState('');
    const [city, setCity] = useState("");
    const[checkcity,setCheckcity]=useState();
    const [location, setLocation] = useState("");
    const [checklocation,setChecklocation]=useState();
    const [propertytype, setpropertytype] = useState("");
    const[checkproperty,setCheckproperty] = useState();
    const [floor,setFloor]=useState(0)
    const [furnished,setFurnished]=useState();
    const [flatprice, setFlatprice] = useState(0)
    const [persquarefit, setPersquarefit] = useState(0)
    const [bedroom, setBedroom] = useState()
    const [bathroom, setBathroom] = useState()
    const [balcony, setBalcony] = useState(0)
    const [coveredArea,setCoveredArea]=useState();
    const [checkcoveredarea, setCheckcoveredarea] = useState()
    const [plotBreadth,setPlotBreadth]=useState();
    const [plotArea,setPlotArea]=useState();
    const [plotLength,setPlotLength]=useState();
    const [superarea, setSuperarea] = useState()
    const [builtuparea, setBuiltuparea] = useState()
    const[checkbedroom,setCheckbedroom]=useState('')
    const [checkbalcony,setCheckbalcony]=useState();
    const[checkbathroom,setCheckbathroom]=useState();
    const [societyname, setSocietyname] = useState()
    const [checksocietyname, setCheckSocietyname] = useState()
    const [landzone, setLandzone] = useState()
    const [checklandzone, setChecklandzone] = useState()
    const [carpetarea, setCarpetarea] = useState()
    const [opencarparking, setsetOpencarparking] = useState()
    const [coveredcarparking, setCoveredcarparking] = useState()
    const [transactiontype, setTransactiontype] = useState()
    const [possessionstatus,setPossessionStatus] = useState()
    const [constructionage, setConstructionage] = useState()
    const [images, setImages] = useState([]);
    const[checkimage,setCheckimage]=useState();
    const [allEntry, setAllentry] = useState([]);
    const [massage, setMassage] = useState([]);
    let location1 = useLocation();
    const history = useHistory();
  
    const user = useSelector(state => state.user)

      const post = (e) => {
      e.preventDefault();
    //   const postEntry = { role: role,name:name,phone:phone,email:email, reason: reason, city: city, location: location, propertytype: propertytype, bedroom: bedroom, balcony: balcony, bathroom: bathroom,};
    //   console.log(postEntry);
    //   setAllentry([...allEntry, postEntry]);
      getData();
    }
   
   

    const postField_validation = ()=>{
        if(!role){
            setCheckrole('please select the personal details')
            return false;
        }else if(!name || name.length<3){
            setCheckname("please fill the correct name")
            return false;
        }else if(!phone || phone.length <10){
            setCheckphone('mobile number should be 10 digit')
            return false;
        }else if(!email ||  email.length <=10){
           setCheckmail("please fill the correct email");
           return false;
        }else if(!reason){
            setCheckreason('please select the property details')
          return false;
        }else if(!propertytype){
            setCheckproperty('please select property type')
            return false;
        }else if(!bedroom){
            setCheckbedroom('please select the bedroom')
        }else if(!balcony){
            setCheckbalcony('please select the balcony')
             return false;
        }else if(!bathroom){
            setCheckbathroom('please select the bathroom')
            return false;
        }else if(!city){
            setCheckcity('please select the city')
            return false;
          }else if(!societyname){
            setCheckSocietyname('please select the societyname')
            return false;
        }else if(!location){
            setChecklocation("please select the location");
            return false; 
         
          }else if(!coveredArea){
            setCheckcoveredarea("please fill the field");
            return false; 
           }else if(!landzone){
              setChecklandzone("please select the feild");
              return false;
        }else if(!images){
            setCheckimage('please select the image')
        }
        return true;
    }
    
    const getData = async () => {
        if(/*postField_validation()*/true ){  
           
      const config = {
        headers: { Authorization: `Bearer ${user?.data?.token}`,  ContentType: 'multipart/form-data', enctype: "multipart/form-data" }
      };

      const data = new FormData() 
      images.forEach(file => data.append('image[]',file));
      //data.append('images', images[0])
      data.append('role', role)
      data.append('name', name)
      data.append('phone', phone)
      data.append('email', email)
      data.append('reason', reason)
      data.append('city', city)
      data.append('location', location)
      data.append('propertytype', propertytype)
      data.append('bedroom', bedroom)
      data.append('balcony', balcony)
      data.append('bathroom', bathroom)
      data.append('floor', floor)
      data.append('furnished',furnished)
      data.append('persquarefit',persquarefit)
      data.append('flatprice',flatprice)
      data.append('societyname',societyname)
      data.append('landzone',landzone)
      data.append('coveredArea',coveredArea)
      data.append('plotArea',plotArea)
      data.append('plotLength',plotLength)
      data.append('plotBreadth',plotBreadth)
      data.append('superarea',superarea)
      data.append('builtuparea',builtuparea)
      data.append('carpetarea',carpetarea)
      data.append('transactiontype',transactiontype)
      data.append('possessionstatus',possessionstatus)
      data.append('constructionage',constructionage)
      data.append('opencarparking',opencarparking)
      data.append('coveredcarparking',coveredcarparking)





      
      
      
      


      
      
      console.log(data);
      const rest = await axios.post(properties.post_properties_url, data, config);
      console.log(rest);
  
      if (rest.data.success == false) {
        setMassage(rest.data.error);
        
        history.push('/login');

      }
      else {
        setMassage(rest.data);
        setRole('');
        setReason('');
        setCity('');
        setLocation('');
        history.push('/propertylist');
      };
  
  
        }
    }


    return (
        

     <>
     <Header/>
        <div className="content2 container">
          <form >
            <label className="name"><b>Sell or Rent your Property</b></label>
            <div>We've over <b>15 Lac buyers and tenants</b> for you! </div>
            <br/>
            <div className="heading-1"><b>Personal Details</b></div>
        
            <div className="radio1">
              <label>I am</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1"
              onChange={(e) => {
              console.log(e.currentTarget.value)
              setRole(e.currentTarget.value);
                }}
              />
              <label for="name">Buyer/Owner </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="2"
                onChange={(e) => {
                 console.log(e.currentTarget.value)
                 setRole(e.currentTarget.value);
                  }}
              />
              <label for="name"> Agent</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                 value="3"
                 onChange={(e) => {
                 console.log(e.currentTarget.value)
                 setRole(e.currentTarget.value);
               }}
                 
              />
              <label for="name">Builder </label>

              { !role && <div><p>{checkrole}  </p></div>}

        
            </div>
        {  role==1 && <div>
          <OwnerDetailspost
             email={email}
             setEmail={setEmail}
             checkemail={ checkemail}
             setCheckmail={ setCheckmail}
             name ={name}
             setName={setName}
             chectname={chectname}
             setCheckname={setCheckname}
             phone={phone}
             setPhone={setPhone}
             checkphone={checkphone}
             setCheckphone={setCheckphone}
             />
          
          </div>}
             
        
          
            <br/>
            <div className="heading-1"><b>Property Details</b></div>
        
            <div className="radio1">
              <label>For</label>
              <input className="radios" type="radio" name="flexRadioDefaultt" id="flexRadioDefault11"
              
              value="sale"
              onChange={(e)=>setReason(e.target.value)}    />
              <label for="name">Sale </label>

              <input className="radios" type="radio" name="flexRadioDefaultt" id="flexRadioDefault11"
               value="Rent/ Lease"
               onChange={(e)=>setReason(e.target.value)}  />
              <label for="name"> Rent/ Lease</label>

              <input className="radios" type="radio" name="flexRadioDefaultt" id="flexRadioDefault11"  
               value="PG/Hostel"
               onChange={(e)=>setReason(e.target.value)}      />
              <label for="name"> PG/Hostel
              </label>
              { !reason &&  <p>{checkreason}</p>}

            </div>
        
        
        
        
        
            <div className="form-group first">
              <label className="name1">Property Type </label>
              <br/>
        
              <select className="drop"
               defaultValue={propertytype}
               onChange={(e) => setpropertytype(e.target.value)} >
                <option value="-1">Select Property Type</option>
                <optgroup label="ALL RESIDENTIAL"></optgroup>
                <option value="Flat/ Apartment">Flat/ Apartment</option>
                <option value="Residential House">Residential House</option>
                <option value="Villa">Villa</option>
                <option value="1Builder Floor Apartment">Builder Floor Apartment</option>
                <option value="Residential Land/ Plot">Residential Land/ Plot</option>
                <option value="Penthouse">Penthouse</option>
                <option value="tudio Apartment">Studio Apartment</option>
                <option value="tudio Apartment">Mall</option>

                <optgroup label="ALL COMMERCIAL"></optgroup>
                <option value="Commercial Office Space">Commercial Office Space</option>
                <option value="Office in IT Park/ SEZ">Office in IT Park/ SEZ</option>
                <option value="Commercial Shop">Commercial Shop</option>
                <option value="Commercial Showroom">Commercial Showroom</option>
                <option value="Commercial Land">Commercial Land</option>
                <option value="Warehouse/ Godown">Warehouse/ Godown</option>
                <option value="Industrial Land">Industrial Land</option>
                <option value="ndustrial Building">Industrial Building</option>
                <option value="Industrial Shed">Industrial Shed</option>
                <optgroup label="ALL AGRICULTURAL"></optgroup>
                <option value="Agricultural Land">Agricultural Land</option>
                <option value="Farm House">Farm House</option>
              </select>
              { !propertytype &&  <p>{checkproperty}</p>}

            </div>
            <br/>
            <label className="name1">You are posting as </label>
            <div className="radio1">
        
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Full House</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> On sharing basis
        
              </label>
        
            </div>
        
        
        
        
        
        
            <br/>
            <div className="heading-1"><b>Property Location </b></div>
        
            <div className="form-group first">
              <label className="name1">City </label>
              <input type="text" className="form-control" placeholder="Enter City" id="name1"
               value={city} 
               onChange={(e) => setCity(e.target.value)}   />

              {!city &&   <p>{checkcity}</p>}

            </div>
        
            <div className="form-group first">
              <label className="name1">Locality </label>
              <input type="text" className="form-control" placeholder="Locality" id="name2"
               value={location} 
               onChange={(e) => setLocation(e.target.value)}  />

               {!location &&  <p>{checklocation}</p>}

            </div>
            <div className="form-group first">
              <label className="name1">Name of Project/Society </label>
              <input type="text" className="form-control" placeholder="Name of Project/Society" id="name3"
              
              value={societyname} 
               onChange={(e) => setSocietyname(e.target.value)}  />

               {!societyname &&  <p>{checksocietyname}</p>}
              
            </div>
            <div className="form-group first">
              <label className="name1">Land Zone</label>
              <br/>
        
              <select className="drop name2"
              defaultValue={landzone}
              onChange={(e) => setLandzone(e.target.value)}
              
              >
                <option value="">Select Land Zone</option>
        
                <option value="Industrial">Industrial</option>
        
                <option value="Commercial">Commercial</option>
        
                <option value="Residential">Residential</option>
        
                <option value="Transport and Communication">Transport and Communication</option>
        
                <option value="Public Utilities">Public Utilities</option>
        
                <option value="Public and Semi Public Use">Public and Semi Public Use</option>
        
                <option value="Open Spaces">Open Spaces</option>
        
                <option value="36112">Agricultural Zone</option>
        
                <option value="Special Economic Zone">Special Economic Zone</option>
        
                <option value="Natural Conservation Zone">Natural Conservation Zone</option>
        
                <option value="Government Use">Government Use</option>
        
        
              </select>
              {!landzone &&  <p>{checklandzone}</p>}

            </div>
            <div className="form-group first">
              <label className="name1">Ideal For Businesses</label>
              <input type="text" className="form-control" placeholder="Ideal For Businesses" id="name2"/>
            </div>
            <br/>
            {/* <div className="heading-1"><b>Property Features </b></div> */}
            <div className="form">

     {(propertytype=="Flat/ Apartment" || propertytype=="Residential House" || propertytype=="Villa" || propertytype== "Builder Floor Apartment" || propertytype== "Penthouse") &&
           <PropertyFeaturesPost
           bedroom={bedroom}
           setBedroom={setBedroom}
           bathroom={bathroom}
           setBathroom={setBathroom}
           balcony={balcony}
           setBalcony={setBalcony}
           floor={floor}
           setFloor={setFloor}
           furnished={furnished}
           setFurnished={setFurnished}
           checkbedroom={checkbedroom}         />}

             
              <br/><br/>

              {propertytype=="Commercial Shop" &&

              <CommercialShopPost/>}

              <div className="form-group first">
                <label className="name1">Floors Allowed for construction</label>
                <br/>
        
                <select className="drop name2">
                  <option value="-1">Total Floors</option>
        
                  <option value="10008">Commercial Shop</option>
                  <option value="10009">Commercial Showroom</option>
                  <option value="10004">Farm House</option>
                </select>
              </div>
              <div className="form-group first">
                <label className="name1">No of open sides</label>
                <br/>
        
                <select className="drop name2">
                  <option value="-1">Select</option>
        
                  <option value="10008">Commercial Shop</option>
                  <option value="10009">Commercial Showroom</option>
                  <option value="10004">Farm House</option>
                </select>
        
              </div>
              <div className="form-group first">
                <label className="name1"> Width of road facing the plot </label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Width of road facing the plot" id="name2"/>
        
                  <div className="drop1">
                    <span className="name12">Meters</span>
                  </div>
                </div>
              </div>
              <div className="radio1 name2">
                <label>Any Construction done</label>
                <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> Yes </label>
                <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> No</label>
              </div>
              <div className="radio1 name2">
                <label>Boundary wall made</label>
                <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> Yes </label>
                <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> No</label>
              </div>
              <div className="radio1 name2">
                <label>Is in a gated colony</label>
                <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> Yes </label>
                <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> No</label>
              </div>
              <br/>
              <div className="name1"> <input type="checkbox"/>  </div>
              <div className="smallbox">
                <div className="header">
                  Specify bedroom sizes. - For example: 12 x 10 ft
                </div>
                <div className="boxcontent">
                  Length X Breadth
                </div>
                <div className="boxlast name2">
                  Bedroom 1
                  <div className="input-1">
                    <input type="text" placeholder="" id="name2"/>
        
                    <input type="text" placeholder="" id="name2"/>
                  </div>
        
                </div>
        
              </div>
            </div>
        
            <br/><br/>
        
        
        
            <br/>
        
            <div className="area">
        
              <div className="form-group first">
                <div className="heading-1"><b>Area </b></div>
        
                <label className="name1">Covered Area</label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Covered Area" id="name2"
                  value={coveredArea}
                  onChange={(e)=>setCoveredArea(e.target.value)}
                  
                  />
        
                  <select className="drop1"
                  //  onChange={(e)=>setCoveredArea(e.target.value)}

                  >
                    <option value="Sq-ft">Sq-ft</option>
                    {/* <option value="Sq-ft">Sq-ft</option>
                    <option value="Sq-yrd">Sq-yrd</option>
                    <option value="Sq-m">Sq-m</option>
                    <option value="Acre">Acre</option>
                    <option value="Bigha">Bigha</option>
                    <option value="Hectare">Hectare</option>
                    <option value="Marla">Marla</option>
                    <option value="Kanal">Kanal</option>
                    <option value="Biswa1">Biswa1</option>
                    <option value="Biswa2">Biswa2</option>
                    <option value="Ground">Ground</option>
                    <option value="Aankadam">Aankadam</option>
                    <option value="Rood">Rood</option>
                    <option value="Chatak">Chatak</option>
                    <option value="Kottah">Kottah</option>
                    <option value="Marla">Marla</option>
                    <option value="Cent">Cent</option>
                    <option value="Perch">Perch</option>
                    <option value="Guntha">Guntha</option>
                    <option value="Are">Are</option> */}
                  </select>
                  {!coveredArea &&  <p>{checkcoveredarea}</p>}

                </div>
              </div>
              <div className="form-group first">
                <label className="name1">Plot Area</label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Plot Area" id="name2"
                  value={plotArea}
                  onChange={(e)=>setPlotArea(e.target.value)}
                  />
        
                  <select className="drop1"
                  // onChange={(e)=>setPlotArea(e.target.value)}

                  >
                    <option value="-1">Sq-ft</option>
                    {/* <option value="-1">Sq-ft</option>
                    <option value="">Sq-ft</option>
                    <option value="">Sq-yrd</option>
                    <option value="">Sq-m</option>
                    <option value="">Acre</option>
                    <option value="">Bigha</option>
                    <option value="">Hectare</option>
                    <option value="">Marla</option>
                    <option value="">Kanal</option>
                    <option value="">Biswa1</option>
                    <option value="">Biswa2</option>
                    <option value="">Ground</option>
                    <option value="">Aankadam</option>
                    <option value="">Rood</option>
                    <option value="">Chatak</option>
                    <option value="">Kottah</option>
                    <option value="">Marla</option>
                    <option value="">Cent</option>
                    <option value="">Perch</option>
                    <option value="">Guntha</option>
                    <option value="">Are</option> */}
                  </select>
                </div>
              </div>
              <div className="form-group first">
                <label className="name1"> Plot Length </label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Plot Length" id="name2"
                  value={plotLength}
                  onChange={(e)=>setPlotLength(e.target.value)}
                  />
        
                  <div className="drop1">
                    <span className="name12">ft</span>
                  </div>
                </div>
              </div>
              <div className="form-group first">
                <label className="name1"> Plot Breadth </label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Plot Breadth" id="name2"
                  value={plotBreadth}
                  onChange={(e)=>setPlotBreadth(e.target.value)}
                  />
        
                  <div className="drop1">
                    <span className="name12">ft</span>
                  </div>
                </div>
              </div>
              <div className="name1"> <input type="checkbox"/> </div>
        
        
        
        
              <div className="form-group first">
                <label className="name1">Super Area </label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Super Area" id="name2"
                   value={superarea}
                   onChange={(e)=>setSuperarea(e.target.value)}
                  
                  />
        
                  <select className="drop1">
                    <option value="-1">Sq-ft</option>
                    {/* <option value="">Sq-ft</option>
                    <option value="">Sq-yrd</option>
                    <option value="">Sq-m</option>
                    <option value="">Acre</option>
                    <option value="">Bigha</option>
                    <option value="">Hectare</option>
                    <option value="">Marla</option>
                    <option value="">Kanal</option>
                    <option value="">Biswa1</option>
                    <option value="">Biswa2</option>
                    <option value="">Ground</option>
                    <option value="">Aankadam</option>
                    <option value="">Rood</option>
                    <option value="">Chatak</option>
                    <option value="">Kottah</option>
                    <option value="">Marla</option>
                    <option value="">Cent</option>
                    <option value="">Perch</option>
                    <option value="">Guntha</option>
                    <option value="">Are</option> */}
                  </select>
                </div>
              </div>
              <div className="form-group first">
                <label className="name1">Built-up Area </label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Super Area" id="name2"
                   value={builtuparea}
                   onChange={(e)=>setBuiltuparea(e.target.value)}
                  
                  />
        
                  <select className="drop1">
                    <option value="-1">Sq-ft</option>
                    {/* <option value="">Sq-ft</option>
                    <option value="">Sq-yrd</option>
                    <option value="">Sq-m</option>
                    <option value="">Acre</option>
                    <option value="">Bigha</option>
                    <option value="">Hectare</option>
                    <option value="">Marla</option>
                    <option value="">Kanal</option>
                    <option value="">Biswa1</option>
                    <option value="">Biswa2</option>
                    <option value="">Ground</option>
                    <option value="">Aankadam</option>
                    <option value="">Rood</option>
                    <option value="">Chatak</option>
                    <option value="">Kottah</option>
                    <option value="">Marla</option>
                    <option value="">Cent</option>
                    <option value="">Perch</option>
                    <option value="">Guntha</option>
                    <option value="">Are</option> */}
                  </select>
                </div>
              </div>
              <div className="form-group first">
                <label className="name1">Carpet Area </label>
                <br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Carpet area" id="name2"
                  
                  value={carpetarea}
                  onChange={(e)=>setCarpetarea(e.target.value)}
                  />
        
                  <select className="drop1">
                    <option value="-1">Sq-ft</option>
                    {/* <option value="">Sq-ft</option>
                    <option value="">Sq-yrd</option>
                    <option value="">Sq-m</option>
                    <option value="">Acre</option>
                    <option value="">Bigha</option>
                    <option value="">Hectare</option>
                    <option value="">Marla</option>
                    <option value="">Kanal</option>
                    <option value="">Biswa1</option>
                    <option value="">Biswa2</option>
                    <option value="">Ground</option>
                    <option value="">Aankadam</option>
                    <option value="">Rood</option>
                    <option value="">Chatak</option>
                    <option value="">Kottah</option>
                    <option value="">Marla</option>
                    <option value="">Cent</option>
                    <option value="">Perch</option>
                    <option value="">Guntha</option>
                    <option value="">Are</option> */}
                  </select>
                </div>
              </div>
              <div className="sub-area1">
                <label className="name1">Width Of Entrance</label><br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="E.X:- 4000" id="name2"/>
        
                  <select className="drop1">
                    <option value="-1">Meters</option>
                    <option value="2">Unit1</option>
                    <option value="3">Unit2</option>
                    <option value="3">Unit2</option>
        
                  </select>
                </div>
        
              </div>
            </div>
            <div className="name1"> <input type="checkbox"/> </div>
        
            <br/>
            <div className="heading-1"><b>Transaction Type, Property Availability </b></div>
        
            <div className="radio1 name2">
              <label>Transaction Type </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
              value="New Property"
               onChange={(e) => {
                console.log(e.currentTarget.value)
                setTransactiontype(e.currentTarget.value);
                 }}
              />
              <label for="name"> New Property </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
               value="Resale"
               onChange={(e) => {
                console.log(e.currentTarget.value)
                setTransactiontype(e.currentTarget.value);
                 }}
              />
              <label for="name"> Resale </label>
            </div>
            <div className="radio1 name2">
              <label>Possession Status</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                value="Under Construction"
                onChange={(e) => {
                 console.log(e.currentTarget.value)
                 setPossessionStatus(e.currentTarget.value);
                  }}
              
              />
              <label for="name"> Under Construction</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                value="Ready to Move"
                onChange={(e) => {
                 console.log(e.currentTarget.value)
                 setPossessionStatus (e.currentTarget.value);
                  }}


              />
              <label for="name"> Ready to Move </label>
        
            </div>
            <div className="radio1 name2">
              <label>Available From</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Select Date </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Immediately</label>
            </div>
            <div className="form-group first">
              <label className="name1">Available From </label>
              <br/>
              <div className="sub-area name2 ">
        
                <select className="drop1 d2">
                  <option value="-1">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select className="drop1 ">
                  <option value="-1">Year</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                </select>
              </div>
            </div>
            <div className="radio1 name2">
              <label>Currently Leased out</label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Yes </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> No</label>
            </div>
        
            <div className="form-group first">
              <label className="name1">Age of Construction </label>
              <br/>
        
              <select className="drop name2"
              defaultValue={constructionage}
              onChange={(e) => setConstructionage(e.target.value)}
              
              >
                <option value="Age of Construction">Age of Construction</option>
                <option value="New Construction">New Construction</option>
                <option value="Less than 5 years">Less than 5 years</option>
                <option value="5 to 10 years">5 to 10 years</option>
                <option value="11654">10 to 15 years</option>
                <option value="10 to 15 years">15 to 20 years</option>
                <option value="Above 20 years">Above 20 years</option>
              </select>
            </div>
            <br/>
            <div className="heading-1"><b>Rent/ Lease Details </b></div>
            <div className="form-group first">
              <label className="name1">Monthly Rent </label>
              <input type="text" className="form-control" placeholder="Monthly Rent" id="name1"/>
            </div>
            <div className="form-group first">
              <label className="name1">Other Charges </label>
              <input type="text" className="form-control" placeholder="Enter City" id="name1"/>
            </div>
            <div className="name1"> <input type="checkbox"/>  </div>
        
            <br/>
        
            <br/>
            <div className="heading-1"><b>Price Details </b></div>
        
            <div className="radio1 name2">
              <label>You wish to enter </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Complete Price Details </label>
              <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Total Price Only </label>
            </div>
        
            <div className="form-group first1">
              <div className="sub-area1">
                <label className="name1"> Basic Price(Per Sqft) </label>
                <input type="text" className="form-control" placeholder="Expected Price" id="name2"/>
              </div>
              <br/>
              <div className="sub-area1">
                <label className="name1">Floor PLC(Per Sqft) </label>
                <input type="text" className="form-control" placeholder="Price per Sq-ft:" id="name2"/>
        
        
              </div>
            </div>
            <div className="form-group first1">
              <div className="sub-area1">
                <label className="name1"> Facing PLC(Per Sqft) </label>
                <input type="text" className="form-control" placeholder="Expected Price" id="name2"/>
              </div>
              <br/>
              <div className="sub-area1">
                <label className="name1">Open Car Parking(For) </label><br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Super Area" id="name2"
                   value={opencarparking}
                   onChange={(e) => setsetOpencarparking(e.target.value)}
                  
                  />
        
                  <select className="drop1">
                    <option value="-1">Unit</option>
                    <option value="2">Unit1</option>
                    <option value="3">Unit2</option>
                  </select>
                </div>
        
              </div>
            </div>
        
            <div className="form-group first1">
              <div className="sub-area1">
                <label className="name1">Covered Car Parking </label><br/>
                <div className="sub-area">
                  <input type="text" className="form-control" placeholder="Parking" id="name2"
                  
                  value={coveredcarparking}
                  onChange={(e) => setCoveredcarparking(e.target.value)}
                 
                  
                  />
        
                  <select className="drop1">
                    <option value="-1">Unit</option>
                    <option value="2">Unit1</option>
                    <option value="3">Unit2</option>
                  </select>
                </div>
        
              </div>
              <br/>
              <div className="sub-area1">
                <label className="name1"> Select New Component </label>
                <select className="drop name2">
                  <option value="-1">Select Price Component</option>
        
                  <option value="10008">Commercial Shop</option>
                  <option value="10009">Commercial Showroom</option>
                  <option value="10004">Farm House</option>
                </select>
              </div>
        
            </div>
        
            <div className="form-group first1">
              <div className="sub-area1">
                <label className="name1"> Expected Price </label>
                <input type="text" className="form-control" placeholder="Expected Price" id="name2"
                onChange={(e)=>setFlatprice(e.target.value)}
                />
              </div>
              <br/>
              <div className="sub-area1">
                <label className="name1"> Price per Sq-ft: </label>
                <input type="text" className="form-control" placeholder="Price per Sq-ft:" id="name2"
                onChange={(e)=>setPersquarefit(e.target.value)}
                />
        
        
              </div>
            </div>
        
            <div className="radio1 name2">
              <label>Price Includes </label>
              <input className="radios" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> PLC</label>
              <input className="radios" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name"> Car Parking</label>
              <input className="radios" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label for="name">Club Membership </label>
        
            </div>
            <div className="form-group first">
              <label className="name1">Other Charges </label>
              <input type="text" className="form-control" placeholder="Enter City" id="name1"/>
            </div>
            <br/>
            <div className="name1"> <input type="checkbox"/>  </div>
        
            <div className="form-group first">
              <label className="name1">Booking/Token Amount </label>
              <input type="text" className="form-control" placeholder="Booking/Token Amount" id="name1"/>
            </div>
        
        
        
            <div className="form-group first1">
              <div className="sub-area1">
                <label className="name1">Maintenance Charges</label>
                <input type="text" className="form-control" placeholder="Maintenance Charges" id="name2"/>
              </div>
              <br/>
              <div className="sub-area1">
                <label className="name1">Per </label><br/>
                <select className="drop name2">
                  <option value="-1">Monthly</option>
                  <option value="10008">Commercial Shop</option>
                  <option value="10009">Commercial Showroom</option>
                  <option value="10004">Farm House</option>
                </select>
                <br/>
                <span className="name3">Three Thousand Three Hundred Thirty Four Only</span>
        
              </div>
            </div>
        
        
            <div className="form-group first">
              <label className="name1"> Brokerage(Brokers only)</label>
              <br/>
        
              <select className="drop name2">
                <option value="">Select Brokerage</option>
                <option value="1006440">No Brokerage</option>
                <option value="1006431">0.25%</option>
                <option value="1006432">0.5%</option>
                <option value="1006433">0.75%</option>
                <option value="1006434">1%</option>
                <option value="1006435">1.5%</option>
                <option value="1006436">2%</option>
                <option value="1006437">3%</option>
                <option value="1006438">4%</option>
                <option value="1006439">5%</option>
              </select>
            </div>
            <div className="form-group first">
              <label className="name1"> Response from brokers</label>
        
              <div className="radioss name2">
                <input className="radio" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label for="name"> I am not interested in getting response from brokers.</label>
              </div>
            </div>
            <br/>
            <div className="photo">
              <div className="heading-1"><b>Photos</b></div>
              <div className="form-group first">
                {/* <ul className="uploadtab">
                  <li><a href="">Exterior View</a></li>
                  <li><a href="">Living Room</a></li>
                  <li><a href="">Exterior View</a></li>
                  <li><a href="">Exterior View</a></li>
                  <li><a href="">Exterior View</a></li>
                  <li><a href="">Exterior View</a></li>
                  <li><a href="">Exterior View</a></li>
                  <li><a href="">Exterior View</a></li>
        
        
        
                </ul> */}
        
              </div>
            </div>

            <PropertiesImages
            images={images}
             setImages={setImages}
             />

             {!images &&  <p>{checkimage}</p>}
        
           
            <div className="imgMessages">
              <div className="uploadText">Accepted formats are <span>.jpg, .gif, .bmp &amp; .png</span>.
                Maximum
                size allowed is <span>20 MB</span>. Minimum dimension allowed <span className="acpFormat__dark">600*400
                  Pixel</span></div>
              <div style={{display:"none"}} >Accepted formats are .jpg, .gif, .bmp
                &amp;
                .png. Maximum size allowed is 20 MB. Minimum dimension allowed 600*400 Pixel</div>
              <div className="uploadText">You can also email them to us for uploading at <a href="">photos@propnex.com </a></div>
            </div>
            <div className="dummyImg">
              <div className="text">Image Guidelines</div>
              <div className="dummyImgCont">
                <ul>
                  <li>
                    <div className="guideImg1"></div>
                  </li>
        
                </ul>
              </div>
            </div>
        
            <br/>
            <div className="terms">
        
              <label>
                <input type="checkbox" checked="checked" name="remember"/> I am posting this property 'exclusively' on
                Propnex
              </label>
              <br/>
              <label>
                <input type="checkbox" checked="checked" name="remember"/> I agree to PropNex TC, Privacy Policy,  Cookie
                Policy
              </label>
              <br/>
              <label>
                <input type="checkbox" checked="checked" name="remember"/> I want to receive responses on Whatsapp
        
              </label>
            </div>
        
            <div className="p-SignUp2" onClick={post}>
              <input type="submit" value="Login  Post Property" className="btn btn-block btn-danger"/>
            </div>
        
            <div className="registereds">
              <b> Looking to Sell or Rent your Flat?</b><br/>
              <span className="terms-text">Do you want to Sell your flat or put your house on rent? Magicbricks has the right
                solution for you.Your advertisement will be viewed by millions of buyers and tenants in India.Magicbricks
                provides you the best classNameified for your requirement. Our website offers one free property ad that you can
                use for selling or renting . You will be able to sell or rent every real estate property from flat or house to
                land  even commercial property fast and immediately.</span>
            </div>
          </form>
          </div>
          <Footer/>

          </>
           )
           }
        


export default PostPropertyPage
