import React from 'react'
import { useHistory } from 'react-router';

export const FlatDetailsSliderBox= (props) => {
  const history=useHistory()
   console.log("kabhinahi ==> "+props);

   const push_details = ()=>{
    history.push({
        pathname: '/propertylist',
       state: props.id
      });
    }
    return (
       <>

                <div class="box1 box-detail">

                <div class="card12 cards121">
                    {/* <a > */}

                        <div class="card--graphic1" onClick={push_details}>
                        <img src={"http://admin.csakh.com/project/public/storage/property/" + props.images .split(',')[0]} width="296" height="184"/>
                            <span class="photoCount counter1">₹ {props.flatprice}₹ {props.per_square_fit} per sqft</span>
                        </div>

                        <div class="card--content1">
                            <div class="card--title1 titlecards">
                                Property in {props.city}</div>
                            <div class="card__text1 textcards">
                                in {props.location} East, 
                                </div>
                            <button type="button" class="btn btn-outline-danger">contact
                                Agent</button>

                        </div>

                    {/* </a> */}

                </div>
                </div>
                          

                            {/* <div class="container1">

                                <div class="box1 box-detail">

                                    <div class="card12 cards121">
                                        <a href="index.html">

                                            <div class="card--graphic1">
                                                <img src={"http://127.0.0.1:8000/storage/property/" + props.images .split(',')[0]} width="296" height="184"/>
                                                <span class="photoCount counter1">₹ {props.flat_rice} Lac ₹ {props. per_square_fit} per sqft</span>
                                            </div>

                                            <div class="card--content1">
                                                <div class="card--title1 titlecards">
                                                    3 BHK Builder Floor 900 sqft</div>
                                                <div class="card__text1 textcards">
                                                    in {props.locatioc}, {props.city}
                                                    New Property 2 Bath Freehold</div>
                                                <button type="button" class="btn btn-outline-danger">Contact
                                                    Agent</button>

                                            </div>

                                        </a>

                                    </div>
                                </div>
                                </div> */}
                               

       </>
    )
}
