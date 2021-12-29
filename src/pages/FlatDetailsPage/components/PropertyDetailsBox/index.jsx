import React from 'react'

export const PropertyDeatailsBox = (props) => {

    return (
    <>
            <div class="infotab">
                <div class="infotab-1">
                    <span>  ₹{props.flatprice}</span>
                    <br/><a href=""> <i class="bi bi-info-circle"></i>See Other Charges</a>

                </div>
                <div class="infotab-2">
                    <span>2 BHK {props. per_square_fit}Sq-ft Flat</span>
                    For {props. reason} <a href="">{props.location}, {props.city}</a>
                </div>
                <div class="infotab-3">
                    <div class="agent">
                        <div class="view-p">
                            <div class="champ">
                                <div class="CDetail">
                                    <label>Agent Name:</label>
                                    <div class="CName">
                                        Manish garg
                                    </div>
                                    <span class="bi bi-info-circle"></span>
                                </div>
                                <div class="Batch"><i class="bi bi-patch-check-fill"></i>Certified Agent</div>
                                <div class="LocalityBatch">
                                    <i class="bi bi-patch-check-fill"></i>Locality Superstar
                                    <div class="LocalityName">Maximum options in
                                        {props.location}</div>
                                </div>
                            </div>
                            <div class="viewPh">
                                <a href="" class="viewPhoneNumber">Contact Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="infotab2">

                <div class="TabSec">
                    <div class="TabNav">
                        <ul>
                            <li class="active"><a href="#">Property Details</a></li>
                            <li><a href="#">Locality Details</a> </li>

                            <li><a href="">Price Trends</a></li>

                            <li> <a href="">Agent Details</a> </li>
                            <li class="forumDiscussion" style={{'display': 'none'}}></li>

                        </ul>

                        <span class="animationLine transition"></span>
                    </div>
                </div>

            </div>

            <div class="infotab3">

                    <div class="infotab3-1">
                        <div class="imageBlock">
                            <div class="bigimage">

                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <img class="lazy" src={"http://admin.csakh.com/project/public/storage/property/" + props.images.split(',')[0]} />
                                    <span class="photoCount">
                                        8 photos
                                    </span> </button>

                                {/* <!-- Modal --> */}
                                <div class="modal fade bg-transparent" id="staticBackdrop" data-bs-backdrop="static"
                                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <ul class="modal-title title-bar">
                                                    <li>
                                                        <a> Bathrooms</a>
                                                    </li>
                                                    <li>
                                                        <a> Others</a>
                                                    </li>
                                                    <li>
                                                        <a > Kitchen</a>
                                                    </li>
                                                    <li>
                                                        <a> Bedrooms</a>
                                                    </li>
                                                </ul>

                                                <button type="button" class="btn btn-danger imgbtn">Contact Now</button>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close">
                                                </button>
                                            </div>
                                            <div class="modal-body  bg-dark">



                                                <section class="slider">




                                                    <div class="carouselExampleControls carousel slide" data-bs-ride="carousel">
                                                        <div class="carousel-indicators indi">
                                                            {/* //uzairkhan, --slice(0,-1) -->airk */}
                                                        {      //"1.jpg,2.jpg,3.jpg" ==> ["1.jpg", "2.jpg", "3.jpg"] ==>[0]="1.jpg", [1]="2.jpg"
                                                                props.images.slice(0, -1).split(",").map((slider, index)=>{
                                                                
                                                                    return (
                                                                    <button type="button" data-bs-target=".carouselExampleControls"
                                                                    data-bs-slide-to={index} class="active" aria-current={index==0}
                                                                    aria-label={"Slide "+index+1}>
                                                                    <img src={"http://admin.csakh.com/project/public/storage/property/" + slider} class="d-block w-100" alt="..."/>
                                                                </button>)
                                                                })
                                                            }
                                                        
                                                        </div> 
                                                        <div class="carousel-inner done">
                                                        { 
                                                        
                                                                props.images.slice(0,-1).split(",").map((bigslider,index)=>{
                                                                return (
                                                                
                                                                    <div class={"carousel-item" +  (index==0 ? " active":"")  } >
                                                                        
                                                                    <img src={"http://admin.csakh.com/project/public/storage/property/" + bigslider} class="d-block w-100" alt="..."/>

                                                                    </div>
                                                                
                                                                )
                                                                })
                                                            }
                                                            
                                                        </div> 
                                                        <button class="carousel-control-prev done1" type="button"
                                                            data-bs-target=".carouselExampleControls" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next done1" type="button"
                                                            data-bs-target=".carouselExampleControls" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                    </div>

                                                </section>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            
                            </div>
                        </div>
                    </div>

                    <div class="infotab3-2">
                        <div class="subinfotab3">
                            <div class="subrow">
                                <div class="subcol">
                                    <div class="col-title">{props.bedroom}</div>
                                    <div class="col-value">2 See Dimensions</div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">{props.bathroom}</div>
                                    {/* <div class="col-value value1">2 </div> */}
                                </div>
                                <div class="subcol">
                                    <div class="col-title">{props.balcony}</div>
                                    {/* <div class="col-value value1">1</div> */}
                                </div>

                            </div>
                            <div class="subrow rowsec">
                                <div class="subcol">
                                    <div class="col-title">Super area</div>
                                    <div class="col-value value1"><span>
                                            <select name="area">
                                                <option value="1">sqft</option>
                                                {/* <option value="1">sqyrd</option>
                                                <option value="1">sqm</option>
                                                <option value="1">acre</option>
                                                <option value="1">sqft</option> */}

                                            </select>
                                        </span><br/>₹ {props.superarea_length}sqft</div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">Carpet area</div>
                                    <div class="col-value value1"><span>
                                            <select name="area">
                                                <option value="1">sqft</option>
                                                {/* <option value="1">sqyrd</option>
                                                <option value="1">sqm</option>
                                                <option value="1">acre</option>
                                                <option value="1">sqft</option> */}

                                            </select>
                                        </span><br/>{props.carpet_area}sqft</div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">Loading<i class="bi bi-info-circle"></i></div>
                                    <div class="col-value value1">9%</div>
                                </div>

                            </div>
                            <div class="subrow">
                                <div class="subcol">
                                    <div class="col-title">Developer</div>
                                    <div class="col-value">Planner N Maker</div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">Project</div>
                                    <div class="col-value">{props.project_society_name}</div>
                                </div>


                            </div>
                            <div class="subrow rowsec">
                                <div class="subcol">
                                    <div class="col-title">Status</div>
                                    <div class="col-value value1">{props.Possession_Status}</div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">Transaction type</div>
                                    <div class="col-value value1">{props.transaction_type} <br/><span class="value-link"> Get Documents
                                            Verified</span>
                                    </div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">Floor</div>
                                    <div class="col-value value1">{props.floor}</div>
                                </div>
                                <div class="subcol">
                                    <div class="col-title">Car parking</div>
                                    <div class="col-value value1">{props.covered_carparking}</div>
                                </div>

                            </div>

                        </div>

                        <div class="sub-btton">
                            <span><span class="usp"> USP</span>&nbsp;
                                Newly Constructed Property</span><br/>
                            <button type="button" class="btn btn-danger" style={{backgroundColor:'#d8232a'}}>Contact Agent</button>
                            <button type="button" class="btn btn-outline-danger">Save for Later</button>
                            <i class="bi bi-heart"></i>
                        </div>

                        <div class="sub-btton1">
                            <button type="button" class="btn btn-outline-secondary"><i class="bi bi-file-earmark-arrow-down"></i>Download Brochure</button>
                            <br/>
                            Share Property Feedback

                        </div>

                    </div>

                </div>

   </>
        
    )

    




}

