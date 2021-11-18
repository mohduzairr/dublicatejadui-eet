import React from 'react'

export const OwnerDetailspost = ({email,setEmail,checkemail,name,setName,chectname,phone,setPhone,checkphone}) => {
    return (
        <>
          <div className="form-group first">
              <label className="name1">Name </label>
              <input type="text" className="form-control" placeholder="Enter Your Name" id="name"
              
              value={name}
              onChange={(e)=>setName(e.target.value)}  />

             { (!name || name.length<4) &&  <p>{chectname}</p>}

            </div>
        
            <label className="name1">Mobile </label>
            <div className="form-group last mb-3">
              <input type="text" name="country code" className="form-control1" value="+91" size="8" />
              <input type="text" name="phone" placeholder="Mobile Number" className="form-control1" size="37"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}   />

              {(!phone || phone.length <10) &&  <p>{checkphone}</p>}

            </div>
        
            <div className="form-group first">
              <label className="name1">Email </label>
              <input type="text" className="form-control" placeholder="Enter Your Email" id="name"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}   />

            { (!email ||  email.length <=10) && <p> {checkemail}</p> } 

            </div>
        </>
            
    )
}
