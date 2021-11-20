import React from 'react'
import { useState } from 'react';

 const PropertyFeatures = ({bedroom,setBedroom,bathroom,setBathroom,balcony,setBalcony}) => {
    return (
        <div>
             <h1>Property Features</h1>
            <select
              defaultValue={bedroom}
              onChange={(e) => setBedroom(e.target.value)}>
              <option selected value="1">BedRoom</option>
              <option value="1 Bed Room">1 Bed Room</option>
              <option value="2 Bed Room">2 Bed Room</option>
              <option value="3 Bed Room">3 Bed Room</option>
              <option value="4 Bed Room">4 Bed Room</option>
            </select>

            <select
              defaultValue={balcony}
              onChange={(e) => setBalcony(e.target.value)}>
              <option selected value="1">Balcony</option>
              <option value="1 Balcony">1 Balcony</option>
              <option value="2 Balcony">2 Balcony</option>
              <option value="3 Balcony">3 Balcony</option>
              <option value="4 Balcony">4 Balcony</option>
            </select>

            <select
              defaultValue={bathroom}
              onChange={(e) => setBathroom(e.target.value)}>
              <option selected value="1">Bathroom</option>
              <option value="1 Bathroom">1 Bathroom</option>
              <option value="2 Bathroom">2 Bathroom</option>
              <option value="3 Bathroom">3 Bathroom</option>
              <option value="4 Bathroom">4 Bathroom</option>
            </select>
        </div>
    )
}

export default PropertyFeatures