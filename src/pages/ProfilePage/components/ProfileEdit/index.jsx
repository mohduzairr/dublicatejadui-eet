import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const ProfileEdit = () => {
    const user = useSelector(state => state.user)
    const history=useHistory()
    const login_Details=()=>{
    history.push('/registereditpage')
    }
    return (
        <>
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
                      <div onClick={login_Details}> <a href="#" class="list-group-item list-group-item-action">Edit Login Details</a></div>
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
                                {/* <li>Registered As::</li> */}
                                <li>Country:</li>
                                <li>State:</li>
                                <li>Email:</li>
                                {/* <li>Alternate Email:</li> */}
                                <li>Mobile:</li>
                                <li>Password:</li>

                            </ul>
                        </div>
                        <div class="card-bodys">
                            <div class="card-header infotab91-2">
                                <ul>
                                    <li>{user?.data?.name}</li>
                                    {/* <li>Individual</li> */}
                                    <li>{user?.data?.country}</li>
                                    <li>{user?.data?.state}</li>
                                    <li>{user?.data?.email}</li>
                                  {/* <li>Alternate Email:</li> */}

                                    <li>{user?.data?.phone}<a href="#"></a></li>

                                    <li>Not shown due to security reasons<a href="#">Change Password</a></li>
                                    <li><a href="#">Deactivate account</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>








        </div>

        </>
    )
}
