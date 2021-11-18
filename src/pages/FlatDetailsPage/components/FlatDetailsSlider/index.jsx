import axios from 'axios'
// import { FlatDetailsSliderBox } from 'pages/FlatDetailSliderBox'
import properties from 'properties'
import React, { useEffect, useState } from 'react'
import { FlatDetailsSliderBox } from './components/FlatDetailsSliderBox'

export const FlatDetailsSlider = () => {

    const [detailslider,setDetailslider]=useState([])

     
    async function flatslider() {
        const flatdetailslider = await axios.get(properties.properties_list_url);
        console.log("ooo===> "+flatdetailslider.data.data);
        setDetailslider(flatdetailslider.data.data);
       }


    useEffect(() => {

      
     
//      useEffect(()=>{
       
      
    flatslider();

  const boxSlider = document.querySelector(".slider-click");
  
        document.querySelector(".click2").onclick = () => {
            //boxSlider.innerHTML=''
           boxSlider.scroll({
            left: boxSlider.scrollLeft + 315,
            behavior: 'smooth'
          });
        }
    
        document.querySelector(".click1").onclick = () => {
          boxSlider.scroll({
            left: boxSlider.scrollLeft - 320,
            behavior: 'smooth'
          });
        }

        // getData();

      }, []);
//      },[])
    
    return (
        <>


{/* <div class="infotab6"> */}
           
            <div class="container4 desk">
                <div class="carouselExampleControlsNoTouching carousel slide22" data-bs-touch="false"
                    data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class=" divslide1 carousel-item active">

                            <div class="container1 slider-click">

                      {
                        detailslider && detailslider.map((slider,index)=>{
                            return (
                        

                            <FlatDetailsSliderBox
                            id={slider.id}
                            city={slider.city}
                            flatprice={slider.flat_price}
                            location={slider.location}
                            per_square_fit={slider.per_square_fit}
                            images={slider.property_images}
                            reason={slider.reason}
                            bedroom={slider.bedroom}
                            bathroom={slider.bathroom}
                            balcony={slider.balcony}
                            type={slider.type}
                            />
                            

                       )})
                      }
                                {/* <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> */}
                                {/* <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> */}
                                {/* <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> */}
                                {/* <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> */}
                                {/* <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> */}

                            </div>
                        </div>


                    </div>
                    <button class="carousel-control-prev click1" type="button"
                        data-bs-target=".carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class=" bi bi-arrow-left-circle-fill" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next click2" type="button"
                        data-bs-target=".carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="bi bi-arrow-right-circle-fill" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div class="container1 desk1">

                <div class="box1 box-detail">

                    <div class="card12 cards121">
                        <a href="index.html">

                            <div class="card--graphic1">
                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                            </div>

                            <div class="card--content1">
                                <div class="card--title1 titlecards">
                                    3 BHK Builder Floor 900 sqft</div>
                                <div class="card__text1 textcards">
                                    in Uttam Nagar East, Uttam Nagar
                                    New Property 2 Bath Freehold</div>
                                <button type="button" class="btn btn-outline-danger">Contact
                                    Agent</button>

                            </div>

                        </a>

                    </div>
                </div>
                <div class="box1 box-detail">

                    <div class="card12 cards121">
                        <a href="index.html">

                            <div class="card--graphic1">
                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                            </div>

                            <div class="card--content1">
                                <div class="card--title1 titlecards">
                                    3 BHK Builder Floor 900 sqft</div>
                                <div class="card__text1 textcards">
                                    in Uttam Nagar East, Uttam Nagar
                                    New Property 2 Bath Freehold</div>
                                <button type="button" class="btn btn-outline-danger">Contact
                                    Agent</button>

                            </div>

                        </a>

                    </div>
                </div>
                <div class="box1 box-detail">

                    <div class="card12 cards121">
                        <a href="index.html">

                            <div class="card--graphic1">
                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                            </div>

                            <div class="card--content1">
                                <div class="card--title1 titlecards">
                                    3 BHK Builder Floor 900 sqft</div>
                                <div class="card__text1 textcards">
                                    in Uttam Nagar East, Uttam Nagar
                                    New Property 2 Bath Freehold</div>
                                <button type="button" class="btn btn-outline-danger">Contact
                                    Agent</button>

                            </div>

                        </a>

                    </div>
                </div>
                <div class="box1 box-detail">

                    <div class="card12 cards121">
                        <a href="index.html">

                            <div class="card--graphic1">
                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                            </div>

                            <div class="card--content1">
                                <div class="card--title1 titlecards">
                                    3 BHK Builder Floor 900 sqft</div>
                                <div class="card__text1 textcards">
                                    in Uttam Nagar East, Uttam Nagar
                                    New Property 2 Bath Freehold</div>
                                <button type="button" class="btn btn-outline-danger">Contact
                                    Agent</button>

                            </div>

                        </a>

                    </div>
                </div>
            </div> */}
        {/* </div> */}

        

{/* <div class="infotab6">
            
            <div class="container4 desk">
                <div class="carouselExampleControlsNoTouching carousel slide" data-bs-touch="false" data-bs-interval="false">
                   {
                       detailslider && detailslider.map((slider,index)=>{
                           return (
                        <div class="carousel-inner">
                        <div class={"carousel-item" +  (index==0 ? "active":"")  }>

                        <FlatDetailsSliderBox
                         city={slider.city}
                         flatprice={slider.flat_price}
                         location={slider.location}
                         per_square_fit={slider.per_square_fit}
                         images={slider.property_images}
                         reason={slider.reason}
                         bedroom={slider.bedroom}
                         bathroom={slider.bathroom}
                         balcony={slider.balcony}
                         type={slider.type}
                        />
                        </div>
                        </div>

                       )})
                   }
                          
                          
                        
                  
                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> 
                                 <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> 
                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div> 
                            </div>
                        </div>  
                         <div class="carousel-item">
                            <div class="container1">

                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div>
                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div>
                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div>
                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src="images/bg_1.jpeg" width="296" height="184"/>
                                                <span class="photoCount counter1">₹ 45 Lac ₹ 50000 per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in Uttam Nagar East, Uttam Nagar
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                     </div> *
                    <button class="carousel-control-prev" type="button" data-bs-target=".carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="bi bi-arrow-left-circle-fill" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target=".carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="bi bi-arrow-right-circle-fill" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
        </div> */}
        </>
            
    
    )
}
