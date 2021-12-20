import React from 'react'

export const PropertyFeaturesPost = ({bedroom,setBedroom,bathroom,setBathroom,balcony,setBalcony,floor,setFloor,furnished,setFurnished,checkbedroom}) => {
    return (
        <>

              <div className="heading-1"><b>Property Features </b></div>

            <div className="features">
          
                <div className="div">
                  <div className="name1">Bedrooms </div>
                  <div className="Rooms">
        
                    <ul>
                      <div className="radio-toolbar">
                        <input type="radio" id="radio_bd_1" name="radioFruit" value="1bedroom"
                         defaultValue={bedroom}
                        onChange={(e) => setBedroom(e.target.value)}  />
                        <label for="radio_bd_1">1</label>
        
                        <input type="radio" id="radio_bd_2" name="radioFruit" value="2bedroom"
                         defaultValue={bedroom}
                         onChange={(e) => setBedroom(e.target.value)}
                        />
                        <label for="radio_bd_2">2</label>
        
                        <input type="radio" id="radio_bd_3" name="radioFruit" value="3bedroom"
                        defaultValue={bedroom}
                        onChange={(e) => setBedroom(e.target.value)}

                        />
                        <label for="radio_bd_3">3</label>
        
                        <input type="radio" id="radio_bd_4" name="radioFruit" value="4bedroom"
                        defaultValue={bedroom}
                        onChange={(e) => setBedroom(e.target.value)}
                        />
                        <label for="radio_bd_4">4</label>
        
                        <select name="bedroom" className="option-arrow"
                        defaultValue={bedroom}
                        onChange={(e) => setBedroom(e.target.value)} >
                          <option value="5bedroom">5</option>
                          <option value="6bedroom">6</option>
                          <option value="7bedroom">7</option>
                          <option value="8bedroom">8</option>
                          <option value="9bedroom">9</option>
                          <option value="10bedroom">10</option>
                          <option value="+10">&gt; 10</option>
                        </select>
                      </div>
                      
                    </ul>
                    <p>{checkbedroom}</p>
                  </div>
                </div>
                <div className="div">
                  <div className="name1">Bathroom</div>
                  <div className="Rooms">
        
                    <ul>
                      <div className="radio-toolbar">
                        <input type="radio" id="radio1" name="radioFruit1" value="1bathroom"
                        defaultValue={bathroom}
                       onChange={(e) => setBathroom(e.target.value)}
                        
                        />
                        <label for="radio1">1</label>
        
                        <input type="radio" id="radio2" name="radioFruit1" value="2bathroom"
                         defaultValue={bathroom}
                         onChange={(e) => setBathroom(e.target.value)}
                        
                        />
                        <label for="radio2">2</label>
        
                        <input type="radio" id="radio3" name="radioFruit1" value="3bathroom"
                         defaultValue={bathroom}
                         onChange={(e) => setBathroom(e.target.value)}
                        />
                        <label for="radio3">3</label>
        
                        <input type="radio" id="radio4" name="radioFruit1" value="4bathroom"
                         defaultValue={bathroom}
                         onChange={(e) => setBathroom(e.target.value)}
                        />
                        <label for="radio4">4</label>
        
                        <select name="bathroom" className="option-arrow"
                         defaultValue={bathroom}
                         onChange={(e) => setBathroom(e.target.value)}
                        
                        >
                          <option value="5bathroom">5</option>
                          <option value="6bathroom">6</option>
                          <option value="7bathroom">7</option>
                          <option value="8bathroom">8</option>
                          <option value="9bathroom">9</option>
                          <option value="10bathroom">10</option>
                          <option value="+10">&gt; 10</option>
                        </select>
                      </div>
        
                    </ul>
                  </div>
                </div>

                <div className="div">
                  <div className="name1">Balcony</div>
                  <div className="Rooms">
        
                    <ul>
                      <div className="radio-toolbar">
                        <input type="radio" id="radiobl_1" name="radioFruit_1" value="1balcony"
                        defaultValue={balcony}
                       onChange={(e) => setBalcony(e.target.value)}
                        
                        />
                        <label for="radiobl_1">1</label>
        
                        <input type="radio" id="radiobl_2" name="radioFruit_1" value="2balcony"
                         defaultValue={balcony}
                         onChange={(e) => setBalcony(e.target.value)}
                        
                        />
                        <label for="radiobl_2">2</label>
        
                        <input type="radio" id="radiobl_3" name="radioFruit_1" value="3balcony"
                         defaultValue={balcony}
                         onChange={(e) => setBalcony(e.target.value)}
                        />
                        <label for="radiobl_3">3</label>
        
                        <input type="radio" id="radiobl_4" name="radioFruit_1" value="4balcony"
                         defaultValue={bathroom}
                         onChange={(e) => setBalcony(e.target.value)}
                        />
                        <label for="radiobl_4">4</label>
        
                        <select name="bedrooms" className="option-arrow"
                         defaultValue={balcony}
                         onChange={(e) => setBalcony(e.target.value)}
                        
                        >
                          <option value="5balcony">5</option>
                          <option value="6balcony">6</option>
                          <option value="7balcony">7</option>
                          <option value="8balcony">8</option>
                          <option value="9balcony">9</option>
                          <option value="10balcony">10</option>
                          <option value="+10">&gt; 10</option>
                        </select>
                      </div>
        
                    </ul>
                  </div>
                </div>

                
        
              </div>
        
              <div className="div">
                <div className="name1">Floor No. </div>
                <div className="Rooms">
        
                  <ul>
                    <div className="radio-toolbar name2">
                      <input type="radio" id="radiofl_1" name="radioFruit2" value="Lower Basement"
                      onChange={(e)=>setFloor(e.target.value)}
                      
                      />
                      <label for="radiofl_1">Lower Basement</label>
        
                      <input type="radio" id="radiofl_2" name="radioFruit2" value="Upper Basment"

                       onChange={(e)=>setFloor(e.target.value)}
                      />
                      <label for="radiofl_2">Upper Basement</label>
        
                      <input type="radio" id="radiofl_3" name="radioFruit2" value="Groung"
                      onChange={(e)=>setFloor(e.target.value)}

                      />
                      <label for="radiofl_3">Ground</label>
        
                      <input type="radio" id="radiofl_4" name="radioFruit2" value="1"
                      onChange={(e)=>setFloor(e.target.value)}
            
                      />
                      <label for="radiofl_4">1</label>
        
                      <input type="radio" id="radiofl_5" name="radioFruit2" value="2"
                       onChange={(e)=>setFloor(e.target.value)}

                      />
                      <label for="radiofl_5">2</label>
        
                      <input type="radio" id="radiofl_6" name="radioFruit2" value="3"
                       onChange={(e)=>setFloor(e.target.value)}
                   
                      />
                      <label for="radiofl_6">3</label>
        
                      <input type="radio" id="radiofl_7" name="radioFruit2" value="4"
                        onChange={(e)=>setFloor(e.target.value)}

                      />
                      <label for="radiofl_7">4</label>
        
                      <select name="bedrooms" className="option-arrow">
                        <option value="5">select</option>
        
                        <option className="mini">Lower Basement</option>
                        <option className="mini">Upper Basement</option>
                        <option className="mini">Ground</option>
        
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="+10">&gt; 10</option>
                      </select>
                    </div>
        
                  </ul>
                </div>
              </div>
              <br/>
              <br/>
        
              <div className="div">
                <div className="name1">Total Floors </div>
                <div className="Rooms">
        
                  <ul>
                    <div className="radio-toolbar name2">
                      <input type="radio" id="radio4" name="radioFruit3" value="apple"/>
                      <label for="radio1">1</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="banana"/>
                      <label for="radio2">2</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="orange"/>
                      <label for="radio3">3</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="apple"/>
                      <label for="radio1">4</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="banana"/>
                      <label for="radio2">5</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="orange"/>
                      <label for="radio3">6</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="orange"/>
                      <label for="radio4">7</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="apple"/>
                      <label for="radio1">8</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="banana"/>
                      <label for="radio2">9</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="orange"/>
                      <label for="radio3">10</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="apple"/>
                      <label for="radio1">11</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="banana"/>
                      <label for="radio2">12</label>
        
                      <input type="radio" id="radio4" name="radioFruit3" value="orange"/>
                      <label for="radio3">13</label>
                    
        
                      <select name="bedrooms" className="option-arrow">
                        <option value="5">14</option>
                        <option value="6">15</option>
                        <option value="7">16</option>
                        <option value="8">17</option>
                        <option value="9">18</option>
                        <option value="10">19</option>
                        <option value="+10">&gt; 20</option>
                      </select>
                    </div>
        
                  </ul>
                </div>
              </div>
              <br/>
              <br/>
              <div className="div">
                <div className="name1">Furnished Status </div>
                <div className="Rooms">
        
                  <ul>
                    <div className="radio-toolbar name2">
                      <input type="radio" id="radiofr_1" name="radioFruit" value="Furnished"
                      onChange={(e)=>setFurnished(e.target.value)}
                      
                      />
                      <label for="radiofr_1">Furnished</label>
        
                      <input type="radio" id="radiofr_2" name="radioFruit" value="Unfurnished"
                      onChange={(e)=>setFurnished(e.target.value)}
                      />
                      <label for="radiofr_2">Unfurnished</label>
        
                      <input type="radio" id="radiofr_3" name="radioFruit" value="Semi-Furnishede"
                      onChange={(e)=>setFurnished(e.target.value)}
                      />
                      <label for="radiofr_3">Semi-Furnished</label>
        
                      <select name="bedrooms1" className="option-arrow"
                      onChange={(e)=>setFurnished(e.target.value)}
                      >
                        <option value="Furnished">Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Semi-Unfurnished">Semi-Unfurnished</option>
        
                      </select>
                    </div>
        
                  </ul>
                </div>
              </div>

        </>
            
    )
}
