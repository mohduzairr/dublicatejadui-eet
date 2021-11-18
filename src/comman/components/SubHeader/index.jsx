import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { FlatsInCity } from './components/FlatInCity'
import { BuyBudgetFlat } from './components/BuyBudgetFlat'
import { RentFlatCity } from './components/RentFlatCity'
import { RentBudgetFlat } from './components/RentBudgetFlat'


export const SubHeader = () => {
    const history=useHistory()



    const calculator=()=>{
        history.push('./dashboard')
    }
    const balance=()=>{
        history.push('./dashboard')
    }
    const redirect=()=>{
        history.push('./dashboard')
    }

    const help=()=>{
        history.push('./helpcenter')
    }
     
   

   

   



    return (
       <>
             <div id="navigation">
            <section className="navbar navbar-expand-md container " id="navbar">
                <div className="container justify-content-evenly">
                    <div className="navbar-nav">


                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">Buy</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        {/* <div className="drop-heading">Popular Choices</div> */}
                                        <div className="drop-links">

                                            <li>
                                                {/* <a href="">Luxury Homes</a> */}
                                            </li>

                                        </div>
                                    </div>
                                    <div className="drop-call">
               <div className="drop-heading">Property Types</div>
          
               <FlatsInCity/>
           
              
          </div>
                                   {/* <DelhiFlats/> */}
                                    <div className="drop-call">
                                        <div className="drop-heading" >Budget</div>
                                        <BuyBudgetFlat />
                                       
                                       
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav">


                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">Rent</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        <div className="drop-heading">Property Type</div>

                                        <RentFlatCity />
                                       
                                        
                                     
                
                                    </div>
                                    <div className="drop-call">
                                        <div className="drop-heading">Budget</div>
                                        <RentBudgetFlat />
                                       
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-nav">


                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">Sell</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        <div className="drop-heading">For Owner</div>
                                        <div className="drop-links">

                                            <li>
                                                <a href="">Post Propety</a>
                                            </li>
                                            <li>
                                                <a href="" onClick={redirect}>My DashBoard</a>
                                            </li>

                                        </div>
                                    </div>
                                    <div className="drop-call">
                                        <div className="drop-heading">For Agent & Builder</div>
                                        <div className="drop-links">
                                            <li><a href="" onClick={redirect}>My DashBoard</a></li>
                                            {/* <li><a href="">House/Villa in New-Delhi</a></li> */}



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav">


                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">HomeLoans</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        <div className="drop-heading">Apply Now</div>
                                        <div className="drop-links">

                                            <li>
                                                <div className="drop-links-bdg" onClick={balance}>Balance Transfer</div>
                                            </li>

                                        </div>
                                    </div>
                                    <div className="drop-call">
                                        <div className="drop-heading">EMI Calculators</div>
                                        <div className="drop-links">
                                            <li><div className="drop-links-bdg" onClick={calculator}>EMI Calculators</div></li>
                                            {/* <li><a href="">House/Villa in New-Delhi</a></li> */}



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav">


                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">Help</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        {/* <div className="drop-heading">Popular Choices</div> */}
                                        <div className="drop-links">

                                            <li>
                                                <div className="drop-links-bdg" onClick={help}>Help Center</div>
                                            </li>

                                        </div>
                                    </div>
                                    {/* <div className="drop-call">
                                        <div className="drop-heading">Property Types</div>
                                        <div className="drop-links">
                                            <li><a href="">Flats in New-Delhi</a></li>
                                            <li><a href="">House/Villa in New-Delhi</a></li>



                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-nav">


                        {/* <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">Resources</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        <div className="drop-heading">Popular Choices</div>
                                        <div className="drop-links">

                                            <li>
                                                <a href="">Luxury Homes</a>
                                            </li>

                                        </div>
                                    </div>
                                    <div className="drop-call">
                                        <div className="drop-heading">Property Types</div>
                                        <div className="drop-links">
                                            <li><a href="">Flats in New-Delhi</a></li>
                                            <li><a href="">House/Villa in New-Delhi</a></li>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="navbar-nav">


                        {/* <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="text5">Help</span></a>
                            <div className="dropdown-menu">
                                <div className="menu3">
                                    <div className="drop-call">
                                        <div className="drop-heading">Popular Choices</div>
                                        <div className="drop-links">

                                            <li>
                                                <a href="">Luxury Homes</a>
                                            </li>

                                        </div>
                                    </div>
                                    <div className="drop-call">
                                        <div className="drop-heading">Property Types</div>
                                        <div className="drop-links">
                                            <li><a href="">Flats in New-Delhi</a></li>
                                            <li><a href="">House/Villa in New-Delhi</a></li>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>

            </section>
        </div>


       </>
    )
}
