import React from 'react'

export const CommercialShopPost = () => {
    return (
                <>
                      
                      <div className="div">
                          
                        <div className="name1">Bathrooms</div>
                        <div className="Rooms">
                
                          <ul>
                            <div className="radio-toolbar name2">
                
                
                              <input type="radio" id="radio1" name="radioFruit" value="apple"/>
                              <label for="radio1">1</label>
                
                              <input type="radio" id="radio2" name="radioFruit" value="banana"/>
                              <label for="radio2">2</label>
                
                              <input type="radio" id="radio3" name="radioFruit" value="orange"/>
                              <label for="radio3">3</label>
                
                              <input type="radio" id="radio4" name="radioFruit" value="orange"/>
                              <label for="radio4">4</label>
                
                              <select name="bedrooms" className="option-arrow">
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
                      <br/><br/>
                      <div className="radio1 name2">
                        <label>Corner Shop</label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> Yes </label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> No</label>
                      </div>
                
                      <div className="radio1 name2">
                        <label>Is Main Road Facing</label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> Yes </label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> No</label>
                      </div>
                      <div className="radio1 name2">
                        <label>Personal Washroom</label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> Yes </label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> No</label>
                      </div>
                      <div className="radio1 name2">
                        <label>Pantry/Cafeteria</label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> Dry </label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> Wet</label>
                        <input className="radios" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label for="name"> Not Available</label>
                      </div>
        
        
                </>
                    
            )
        
    
}
