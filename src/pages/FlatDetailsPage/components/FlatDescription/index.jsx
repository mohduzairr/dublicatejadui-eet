import React from 'react'
import { PropertySimilarProject } from '../PropertySimilarProject'

export const FlatDescription = (props) => {
    return (
        <>
        <div class="infotab5">

<div class="infotab5-1">
    <ul>
        <li class="infodesctitle"> Description</li>
        <li class="infodesc"> Pay 10 for booking rest on possession
            Furnished two bedroom set with dinning hall
            Upto 90 Home Loan available

            Lift facility with power backup
            PM Avaas Yojana Benefits Upto 2,67,000
            Modular kitchen with chimney
            Fancy lights in all rooms, latest fall ceiling
            Electricity connection are available
            Delhi Jal board &amp; Submersible both water are available
            Walking distance from Metro Station
            Markets, schools, hospitals all are within 1 km
            01 balcony Bathroom with modern facilities
            Branded Fans with 2yr warranty in all rooms
            Wardrobe &amp; TV Panel 01 Iron Gate
            Wallpaper &amp; Ro</li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Price Breakup
                </div>
                <div class="spec-2">₹ 25.5 Lac | ₹ 2,84,300 Stamp Duty, Registration Charges | ₹ 100 Monthly
                </div>
                <div class="spec-3"><i class="bi bi-info-circle"></i>See Other Charges
                </div>
            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Booking Amount </div>
                <div class="spec-2">₹ {props.booking_amount}

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1 facility">
                    Facilities </div>
                <div class="spec-2">Power Back Up, Lift, Rain Water Harvesting, Gymnasium, Park, Reserved
                    Parking, Water Storage, Private Terrace/Garden,
                    Vaastu Compliant, Air Conditioned, Visitor Parking, Intercom Facility, Waste Disposal,
                    Internet/Wi-Fi Connectivity, DTH
                    Television Facility, RO Water System


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Address </div>
                <div class="spec-2">{props.address}


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Landmarks</div>
                <div class="spec-2">near {props.landmark}.


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Facing </div>
                <div class="spec-2">{props.property_facing}<br/>
                    <i class="bi bi-compass">
                        </i> 
                        {/* Talk to our best Vastu Consultants to get instant
                    solution. View Consultants */}

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    REPAID </div>
                <div class="spec-2">{props.repaid_status}

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Overlooking </div>
                <div class="spec-2">{props.property_overlooking}


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Flooring </div>
                <div class="spec-2">{props.flooring}

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Water Availability </div>
                <div class="spec-2">{props.water_availability_status}


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Status of Electricity </div>
                <div class="spec-2"> {props.electricity_status}  


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Lift </div>
                <div class="spec-2">{props.lift_status}

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Age of Construction </div>
                <div class="spec-2">{props.construction_age}


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Units Available </div>
                <div class="spec-2">2

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Furnishing </div>
                <div class="spec-2">{props.furnish_status}


                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Type of Ownership </div>
                <div class="spec-2"> {props.ownership_status}

                </div>

            </div>
        </li>
        <li>
            <div class="infospec">
                <div class="spec-1">
                    Brokerage Response </div>
                <div class="spec-2">   {props.brokerage_status}


                </div>

            </div>
        </li>

        <li>
            <div class="infospec">
                <div class="spec-1">
                    Amenities </div>
                <div class="spec-2">

                    <div class="amp">
                        <div class="am1"> Visitor Parking</div>
                        <div class="am1"> Waste Disposal</div>
                        <div class="am1"> Rain Water Harvesting</div><br/>


                    </div>
                    <div class="amp">

                        <div class="am1"> Water Storage</div>
                        <div class="am1"> Security</div>
                        <div class="am1"> Gymnasium</div>

                    </div>
                    <div class="amp">

                        <div class="am1"><a href=""> View all Amenities</a></div>


                    </div>

                </div>

            </div>
        </li>
        <li class="lastspec">
            <div class="infospec">
                <div class="spec-1">
                    <button type="button" class="btn btn-danger" style={{backgroundColor:'rgb(216, 35, 42)'}}>Contact Agent</button>
                </div>
                <div class="spec-2">
                </div>
                <div class="spec-3">
                </div>

            </div>
        </li>
    </ul>

</div>


<div class="infotab5-2">

    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Email"/>
    <input type="text" placeholder="Mobile Number"/>
    <span>I Agree to MagicBricks' Terms of Use</span>
    <button type="button" class="btn btn-outline-danger">Get Contact Details</button>


</div>

</div>
 </>
            
        
    )
}
