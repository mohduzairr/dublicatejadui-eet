import React from 'react'

export const Slider = (props) => {
    return (
        <div>
             <section className="slider">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                {/* {
                                                        
                      props.images.slice(0,-1).split(",").map((bigslider,index)=>{
                      return (
                                                        
                         <div class={"carousel-item" +  (index==0 ? " active":"")  } >
                                                                
                         <img src={"http://127.0.0.1:8000/storage/property/" + bigslider} class="d-block w-100" alt="..."/>

                            </div>
                                                        
                           )
                                 })
                 }  */}
    
                    
                    <div className="carousel-item active">
                    <img src="images/banner2.png" className="d-block w-100" alt="..." style={{height:'233px'}} /> 
                    </div> 
                    <div className="carousel-item">
                        <img src="images/banner3.png" className="d-block w-100" alt="..." style={{height:'233px'}}  />
                    </div>
                    <div className="carousel-item">
                        <img src="images/banner4.png" className="d-block w-100" alt="..." style={{height:'233px'}} />
                    </div>  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        </div>
    )
}
