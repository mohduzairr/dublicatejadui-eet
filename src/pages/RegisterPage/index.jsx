

import React from 'react'
import Background from '../../images/bg_1.jpeg';
import { useState } from 'react';
import properties from '../../properties'

import axios from 'axios';
import { useHistory } from 'react-router';
import Header from 'comman/components/Header';
import { SubHeader } from 'comman/components/SubHeader';




export   const RegisterPage = () => {

    const [checkebox, setCheckeBox] = useState(true);
    const [checkeboxmessage, setCheckeBoxMessage] = useState(true);

    const [email, setEmail] = useState();
    const [emailcheck,setEmailcheck]=useState();
    const [password, setPassword] = useState();
    const [checkpassword,setCheckpassword] = useState();
    const [name, setName] = useState();
    const[checkname,setCheckname]=useState();
    const [phone, setPhone] = useState();
    const [checkphone ,setcheckphone]=useState();
    const [userName, setUsername] = useState()
    const [checkusername,setCheckUsername]= useState();
    const [allentry, setAllentry] = useState([]);
    const [radio, setRadio] = useState()
    const [checkradio,setCheckRadio] = useState();
    const [message, setMessage] = useState("");
    const  history=useHistory();

    const redirect=()=>{
        history.push('/login');
    }


    const submit = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password, name: name, userName: userName, phone: phone, role: radio };
        setAllentry([...allentry, newEntry]);
        signup(newEntry);

    }

    const validateInputs=()=>{
        if (!radio) {
            setCheckRadio('please select personal details')
            return false;
        } else  if (!name || name.lenghth<=3){
            setCheckname("name should be 3 alpahabets");
            return false;
        }else if( !email ||  email.length <=10){
            setEmailcheck("invalid email");
            return false;
            
        }else if(!userName || userName.length <=3){
            setCheckUsername('username should be 3 alpahabets')
            return false;

        }else if (!password || password.length<8){
                setCheckpassword("password should be 8 chracters");
                return false;

        }else if(!phone || phone.length<10){
          setcheckphone("number should be 10 digits")
          return false;

        }else if(checkebox==false){
            setCheckeBoxMessage("please fill the checkbox")
            return false;
  
          }
        return true;
    }

    
    async function signup(newEntry) {
        if(validateInputs()){

            const rest = await axios.post(properties.sign_up_url, newEntry);
            setMessage(rest.data);
            setEmail('');
            setPassword('');
            setName('');
            setPhone('');
            history.push('./login')
        }
 }
        
    return (
        <div className="body">
            <Header/>
            <SubHeader/>
        <div class="d-md-flex p-half">
            <div class="p-bg" style={{ backgroundImage: "url(" + Background + ")" }}></div>
            <div class="p-contents">


                <div class="p-containers">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12">
                            <div class="form-block1 mx-auto">
                                <div class="p-head" >
                                    Sign Up
                                </div>

                                <form onSubmit={submit}>
                                    <label class="p-name"><b>I am</b></label>
                                 {  !radio && <p className="validation">{checkradio}</p>}

                                    <div class="p-radio">
                                        <input type="radio" name="flexRadioDefault"
                                            value="1"
                                            onChange={(e) => {
                                                console.log(e.currentTarget.value);
                                                setRadio(e.currentTarget.value)
                                            }}

                                        />
                                        <label class="p-radios" for="name">Buyer/Owner </label>
                                        <input type="radio" name="flexRadioDefault"
                                            value="2"
                                            onChange={(e) => {
                                                console.log(e.currentTarget.value);
                                                setRadio(e.currentTarget.value)
                                            }}


                                        />
                                        <label class="p-radios" for="name"> Agent</label>
                                        <input type="radio" name="flexRadioDefault"

                                            value="3"
                                            onChange={(e) => {
                                                console.log(e.currentTarget.value);
                                                setRadio(e.currentTarget.value)
                                            }}


                                        />
                                        <label class="p-radios" for="name">Builder </label>

                                    </div>

                                    <div class="p-field">

                                        <div class="p-form-group first">
                                            <input type="text" class="p-form-control" placeholder="Name" id="name"
                                                name={name}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}

                                            />
                                       { ( !name ||  name.length <3) &&   <p className="validation">{checkname}</p>}
                                        </div>
                                        <div class="p-form-group first">
                                            <input type="text" class="p-form-control" placeholder="Email" id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}


                                            />
                                       { ( !email ||  email.length <=10) &&   <p className="validation">{emailcheck}</p>}
                                        </div>
                                        <div class="p-form-group first">
                                            <input type="text" class="p-form-control" placeholder="Username" id="username"

                                                value={userName}
                                                onChange={(e) => setUsername(e.target.value)}

                                            />
                                      { (!userName || userName.length <=3) &&     <p className="validation">{checkusername}</p>}
                                        </div>
                                        <div class="p-form-group last mb-3">
                                            <input type="password" class="p-form-control" placeholder="Password" id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}

                                            />
                                         { (!password || password.length<8) &&  <p className="validation"> {checkpassword}</p>}
                                        </div>
                                        <div class="p-form-group last mb-3">
                                            {/* <input type="text" name="country code" class="p-form-control1" value="+91" size="8" /> */}
                                            <span className="mbl">+91</span>
                                            <input type="text" name="phone" placeholder="Mobile Number" class="p-form-control1" size="37"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}


                                            />
                                        {  (!phone || phone.length<10) &&  <p className="validation">{checkphone}</p>}
                                        </div>
                                    </div>

                                    <div class="d-flex p-mb-5 align-items-center" style={{ fontSize: "x-small" }}>

                                        <label>
                                            <input type="checkbox" defaultChecked={checkebox} onChange={() => setCheckeBox(!checkebox)} /> I agree to PropNex T&C, Privacy Policy, & Cookie Policy
                                            { checkebox==false && <p className="validation" >{checkeboxmessage}</p>}

                                        </label><br/><br/>

                                    </div>


                                    <div class="p-SignUp1">
                                        <input type="submit" value="Sign Up" class="btn btn-block btn-danger"  style={{backgroundColor:'rgb(216, 35, 42)'}}  />
                                    </div>

                                    <div class="p-registered">
                                        Already registered? <a class="p-loginbtn1" href="#" onClick={redirect} >Login Now</a>

                                    </div>

                                </form>




                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
        </div>
    )
   }