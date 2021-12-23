import React from "react";
import { useHistory } from 'react-router-dom';


const CardList = (props) => {
     const  history=useHistory()
  const details =(id)=>{
    history.push({
      pathname: '/flatdetails',
      state: props.id
    });
  }
  console.log(details);
    
  return (
    <>
   
      <div class="container contentbody justify-content-center" >
       

        <div class="card-menu" onClick={details}>
          <div class="firstcard">
            <div class="card_container">
              <div class="imgsize">
                <img src={"http://127.0.0.1:8000/storage/property/" + props.images .split(',')[0]}  alt="property" class="card_imag"  />
              </div>
              <div class="rates">
                <span class="semi-bold">₹{props.flatprice}</span>
                <span class="semi-bold2">₹{props.per_square_fit}/sqr-fit</span>
              </div>
              <div class="contentt">
                <div class="pcard__heading">
                  <h2>
                    <span class="pcard__title">
                      <span class="pcard__title1">{props.type}</span> for Sale in {props.city} , {props.location}
                    </span>
                  </h2>
                </div>

                <div class="pcard__society">
                  <span>Commercial Complex: </span>

                  <a class="pcard__link" href="">
                    KW Blue Pearl{" "}
                  </a>
                </div>

                <div class="commercial">
                  <div class="truncate">
                    <div class="pcard__stitle">
                      Super Area: <b>{props.superarea_length}</b>
                    </div>
                    <div class="pcard__summary">{props.Possession_Status}</div>
                    <div class="pcard__summary">{props.furnish_status}</div>
                  </div>

                  <div class="truncate1">
                    <div class="pcard__summary1">
                      {" "}
                      24 Hours Water Availability...
                    </div>
                  </div>
                  <div class="pcard_line"></div>
                </div>
                <div class="readinfo">
                  In accordance with its name, KW Blue Pearl is really a Rare
                  Gem ..
                  <span>
                    <a href="">Read more</a>
                  </span>
                </div>

                <div class="merge">
                  <div class="buttones">
                    <button type="button" class="btn btn-outline-danger btnn">
                      Save
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Enquiry Now
                    </button>
                    <button type="button" class="btn btn-danger">
                      Contact Builder
                    </button>
                  </div>
                  <div class="builder">Builder KW Group</div>
                </div>
              </div>
            </div>
          </div>

          <div class="secondcard">
            <div class="card_container">
              <img src={"http://127.0.0.1:8000/storage/property/" + props.images .split(',')[0]} alt="Property" class="card_imag1" style={{'height':'50px'}}/>
              <div class="bnrCont">
                <div class="proName"> 4 Bhk Flat </div>
                <div class="buidName">{props.location}</div>
                <div class="proLov">2200 sqft</div>
                <div class="bhkInfo">Ready to Move</div>
                <div class="priceInfo">
                  <span class="rsIco"></span>{props.flatprice}$<span></span>
                </div>
                <div class="marketedBy">
                  Owner
                  <br />
                  Rahul Agarwal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default CardList;
