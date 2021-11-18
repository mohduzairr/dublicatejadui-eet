import axios from 'axios';
import properties from 'properties';
import React, { useEffect, useState } from 'react'
import CommercePropertyBox from './components/CommercePropertyBox';


 const CommerceProperty = ({title}) => {
  const [fetchProperties, setFetchProperties] = useState([]);


    useEffect(() => {
        const boxSlider = document.querySelector(".items-content");
       

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
        getData();

      }, []);
     

  //  useEffect(() => {
  //      getData();
        
  //     }, [])
  
   async function getData() {
       const commerceproperties = await axios.get(properties.properties_list_url);
       setFetchProperties(commerceproperties.data.data);
  }
    return (
        <>

      <div className="text20">
         <h2 >{title} </h2>
       <a href="#" ><span className="view1">View all</span></a>
        </div>

<div class="container4 desk">
      <div class="carouselExampleControlsNoTouching carousel slide" data-bs-touch="false" data-bs-interval="false" style={{width:"106%"}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
                          <div className="container1 items-content">
                           {
                              fetchProperties.map((slider,index)=>{
                                     return(
                                        
                                        <CommercePropertyBox
                                          id ={slider.id}
                                          images={slider.property_images}
                                          type={slider.type}
                                          city={slider.city}
                                          location={slider.location}
                                          flat_price={slider.flat_price}
                                        />
                                        
                                       
                                     )
                              })  
                            }
                             </div>
          </div>
                           
        </div>
        <button class="carousel-control-prev click1" type="button" data-bs-target=".carouselExampleControlsNoTouching"
          data-bs-slide="prev">
          <span class="bi bi-arrow-left-circle-fill" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next click2" type="button" data-bs-target=".carouselExampleControlsNoTouching"
          data-bs-slide="next">
          <span class="bi bi-arrow-right-circle-fill" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

        </>
    )
}
export default CommerceProperty