import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Contact from "./pages/undefinedPages/Contact"
import { RegisterPage } from './pages/RegisterPage';
import { PageOnWorking } from 'pages/undefinedPages/PageOnWorking';
import { DashBoard } from 'pages/undefinedPages/DashBoard';
import { HelpCenter } from 'pages/undefinedPages/HelpCenter';
import PostPropertyPage from 'pages/PostPropertyPage';
import Header from 'comman/components/Header';
import HomePage from 'pages/HomePage';
import { FlatDetails } from 'pages/FlatDetailsPage';
import PropertyListPage from 'pages/PropertyListPage';
import { ProfilePage } from 'pages/ProfilePage';
import Login from 'pages/LoginPage';
import { RegisterEditPage } from 'pages/RegisterEditPage';
import Contact from 'pages/undefinedPages/Contact';


const Routes=()=> {
    const [city, setCity] = useState("Delhi");
     const[name,setName]=useState("");
     const[location,setLocation]=useState([]);
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/header" exact>
                        <Header city={city} setCity={setCity} name={name}  setName={setName}   />
                    </Route>
                     
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                   
                    <Route path="/contact" exact>
                        <Contact/>
                    </Route>
                    
                    <Route path="/propertylist"   exact>
                        <PropertyListPage city={city} setCity={setCity} location={location} setLocation={setLocation}/>
                    </Route>
                    
                    
                    <Route path="/"   exact>
                        <HomePage city={city} setCity={setCity}  name={name}  setName={setName}   />
                    </Route>
                    <Route path="/register"   exact>
                        <RegisterPage/>
                    </Route>

                    <Route path="/propertypost"   exact>
                        <PostPropertyPage/>
                    </Route>

                
                   
                    <Route path="/flatdetails"   exact>
                        <FlatDetails/>
                    </Route>

                    <Route path="/pageonworking"   exact>
                        <PageOnWorking/>
                    </Route>

                    <Route path="/dashboard"   exact>
                        <DashBoard/>
                    </Route>

                    <Route path="/helpcenter"   exact>
                        <HelpCenter/>
                        
                    </Route>

                    <Route path="/profilepage"   exact>
                        <ProfilePage/>
                        
                    </Route>

                    <Route path="/registereditpage"   exact>
                        <RegisterEditPage/>
                        
                    </Route>
                   
                   

                    
                    



                   
                    
                    
                    
                </Switch>
               
            </Router>
            
        </div>
    )
}

export default Routes
