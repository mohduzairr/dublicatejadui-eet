

import React, { useEffect } from 'react'
import Background from '../../images/bg_1.jpeg';
import { useState } from 'react';
import properties from '../../properties'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'comman/components/Header';
import { SubHeader } from 'comman/components/SubHeader';
import { ProfileHeader } from 'pages/ProfilePage/components/ProfileHeader';




export   const ProfileEditpage = () => {
   const user = useSelector(state => state.user)
  const dispatch = useDispatch();
    const [passwordShown, setPasswordShown] = useState(false);

    const [email, setEmail] = useState(user?.data?.email);
    const [emailcheck,setEmailcheck]=useState();
    const [password, setPassword] = useState(user?.data?.password);
    const [checkpassword,setCheckpassword] = useState();
    const [name, setName] = useState(user?.data?.name);
    const [checkname,setCheckname]=useState();
    const [phone, setPhone] = useState(user?.data?.phone);
    const [checkphone ,setcheckphone]=useState();
    const [userName, setUsername] = useState(user?.data?.user_name)
    const [checkusername,setCheckUsername]= useState();
    const [allentry, setAllentry] = useState([]);
    const [radio, setRadio] = useState(user?.data?.role_id);
    const [checkradio,setCheckRadio] = useState();
    const [message, setMessage] = useState("");
    
    
    const  history=useHistory();

    const redirect=()=>{
        history.push('/login');
    }



    const update = (e) => {
        e.preventDefault();

        dispatch({
            type:"ADD_USER",
            payload:{
                name:{name},
                email:{email},
                phone:{phone},
                userName:{userName},
                radio:{radio},
                password:{password}
            }
        });
  


        const newEntry = { email: email, password: password, name: name, userName: userName, phone: phone, role: radio};
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

        }
        return true;
    }
   
    async function signup(newEntry) {
        if(/*validateInputs*/ true){
            const config = {
                headers: { Authorization: `Bearer ${user?.data?.token}`}
              };

           
   
            const rest = await axios.post(properties.update_url,newEntry,config );
            setMessage(rest.data);
            setEmail('');
            setPassword('');
            setName('');
            setPhone('');
            alert("profife updated succecfuly")
            history.push('./login')
        }
 }
        
 const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


    return (
        <>
        <Header/>
        <SubHeader/>
        <ProfileHeader/>
             <div class="infotab9">
            <div class="cards infotab9-1 text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills infotab9-1-1">
                        <li class="nav-item">
                            <a class="nav-link info-item9" href="#">Account Summary</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link info-item9" href="#">Contact/Responses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link info-item9">Properties</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link info-item9">Properties Alerts</a>
                        </li>
                        <li class="nav-item item9-active">
                            <a class="nav-link info-item9 ">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link info-item9">Subscription</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="infotab9-2">
                <div class="infotab9-2-1">
                    <div class="list-group">
                        <a href="profile_edit.html" class="list-group-item list-group-item-action infoabs active"
                            aria-current="true">
                            Profile Details </a>
                      <div> <a href="#" class="list-group-item list-group-item-action">Edit Login Details</a></div>
                        <a href="change_password.html" class="list-group-item list-group-item-action">Change
                            Password</a>
                        <a href="send_message.html" class="list-group-item list-group-item-action">Saved Messages</a>
                    </div>
                </div>

                <div class="infotab9-2-2">
                    <div class="infotab922"> Profile Details</div>

                    <div class="cards infotab91">
                        <div class="card-header infotab91-1">
                            <ul>
                                <li>Name:</li>
                                <li>Email:</li>
                                <li>User name:</li>
                                <li>Mobile:</li>
                                <li>Password:</li>

                            </ul>
                        </div>
                        <div class="card-bodys">
                            <div class="card-header infotab91-2">
                                <ul>
                                    <li>
                                <input style={{borderStyle:"none"}} type="text" class="p-form-control" placeholder="Name" id="name"
                                     name={name}
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}

                                  />
                                  </li>
                                    <li>
                                    <input style={{borderStyle:"none"}} type="text" class="p-form-control" placeholder="Email" id="email"
                                     value={email}
                                      onChange={(e) => setEmail(e.target.value)}/>
                                     </li>
                                    <li>
                                    <input style={{borderStyle:"none"}} type="text" class="p-form-control" placeholder="Username" id="username"
                                       value={userName}
                                       onChange={(e) => setUsername(e.target.value)} />
                                    </li>


                                    <li>
                                    <span className="mbl" style={{fontSize: 15}}>+91</span>
                                     <input style={{borderStyle:"none"}} type="text" name="phone" placeholder="Mobile Number" class="p-form-control1" size="37"
                                       value={phone}
                                         onChange={(e) => setPhone(e.target.value)}
                                           />
                                  </li>
                                  <li>
                                  <input style={{borderStyle:"none"}} type={passwordShown ? "text" : "password"} class="p-form-control" placeholder="Password" id="password"
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                     />
                                      <i class="far fa-eye" id="togglePassword"  onClick={togglePassword}  style={{ fontSize: 15}} ></i>
                                  </li>

                                 

                                  {/* <button onClick={togglePassword}>Show Password</button> */}


                                   

                                </ul>
                            </div>
                           
                        </div>
                       
                    </div>

                </div>

            </div>
            <button class="btn-update" onClick={update} >Update</button>
        </div>
        </>
    )
   }