import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Background from "../../images/bg_1.jpeg";
import { useDispatch } from 'react-redux';


import AuthService from "api/AuthService";
import Header from "comman/components/Header";
import { SubHeader } from "comman/components/SubHeader";

function Login() {
  const [email, setEmail] = useState();
  const [checkemail, setCheckmail] = useState();
  const [checkpassword, setCheckpassword] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const [isloading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch()
  const redirect = () => {
    history.push("/register");
  };

  const loginValidation = () => {
    if (!email || email.length <= 10) {
      setCheckmail("please enter the  email");
      return false;
    } else if (!password || password.length < 8) {
      setCheckpassword("please enter the password");
      return false;
    }
    return true;
  };

  async function submit(e) {
    
    e.preventDefault();

    if (loginValidation()) {
      // Prevent Refresh

      // make data for login
      const data = { email: email, password: password };

      setLoading(true);

      // API call for login
      const response = await AuthService.login(data);

      console.log(response);

      if (response.success == false) {
        setMessage(response.error);
        setLoading(false);
        // alert("wrong email or password");
      } else {
        setEmail("");
        setPassword("");

        // if sucessfully response from login API then move to next Screen

        dispatch({
          type:"ADD_USER",
          payload:{
                id:response.id,
              name:response.name,
              token:response.token,
              email:response.email,
              phone:response.phone,
              country:response.country,
              state:response.state,
              user_name:response.user_name,
              role_id:response.role_id,
              password:response.password,
          }
      });



        history.push({
          pathname: "/",
          state: { token: response.token },
        });

       

        setLoading(false);
      }
    }
  }

  return (
    <div class="d-md-flex p-half">
     
      <div
        class="p-bg"
        style={{ backgroundImage: "url(" + Background + ")" }}
      ></div>
      <div class="p-contents">
        <div class="p-containers">
          <div class="row align-items-center justify-content-center">
            
            <div class="col-md-12">
              
              <div class="form-block mx-auto">
                
                <div class="p-mb-12 ">Login</div>

                <form onSubmit={submit}>
                  <div class="p-field">
                    <div class="p-form-group first">
                      <input
                        type="text"
                        class="p-form-control"
                        placeholder="Enter Email ID or Mobile No."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {!email && <p className="validation">{checkemail}</p>}
                    </div>

                    <div class="p-form-group first">
                      <input
                        type="password"
                        class="p-form-control"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {!password && (
                        <p className="validation">{checkpassword}</p>
                      )}
                    </div>

                    <div class="p-form-group last mb-3">
                      <input
                        type="submit"
                        value="login"
                        class="btn btn-block btn-danger"
                      />
                    </div>
                    <div>
                      {isloading && <h2 className="loading">Loading....</h2>}
                    </div>
                    <p className="validation">{message}</p>

                    <div class="p-help">
                      <a href="#">Need Help?</a>
                    </div>
                  </div>

                  <div class="p-login">
                    <div class="p-logintext">Or login using</div>
                  </div>

                  <div class="login-with-social">
                    <div class="text-center p-py-3 p-connections">
                      {" "}
                      <a
                        href="https://wwww.facebook.com"
                        target="_blank"
                        class="px-2"
                      >
                        {" "}
                        <img
                          src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
                          alt=""
                        />
                        Facebook{" "}
                      </a>{" "}
                      |{" "}
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        class="px-2"
                      >
                        {" "}
                        <img
                          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                          alt=""
                        />
                        Google{" "}
                      </a>
                    </div>
                  </div>
                  <div class="p-back">
                    <div class="p-signup">
                      New to Magicbricks?{" "}
                      <a class="p-loginbtn1" href="#" onClick={redirect}>
                        Sign Up
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
