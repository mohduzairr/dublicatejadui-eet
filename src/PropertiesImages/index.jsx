



import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'

export const PropertiesImages = ({images,setImages})=> {
    const [preview, setPreview] = useState([])



    const inputRef = useRef()

    const upload = (e) => {
        e.preventDefault();
        const data = new FormData() 
        data.append('images', images)

        axios.post("http://localhost:8000/api/upload", data)
        .then((response) => {
            alert(JSON.stringify(response.data))
            if (response.status === 200) {
            this.setState({
                responseMsg: {
                status: response.data.status,
                message: response.data.message,
                },
            });
            setTimeout(() => {
                this.setState({
                image: "",
                responseMsg: "",
                });
            }, 2000);

            document.querySelector("#imageForm").reset();
            // getting uploaded images
            this.refs.child.getImages();
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
          <>

           <div className="img-div" >
                { images.length > 0 &&
                    images.map((image)=>{
                        const preview =  URL.createObjectURL(image)
                        return(
                            <img src={preview}   className="img-preview"/>

                         )
                    })
                 }


           </div>

                                
           <div className="uploadbox">
              <div className="item-wrapper one">
                <div className="item">
                  <form data-validation="true" action="#" method="post" enctype="multipart/form-data">
                    <div className="item-inner">
                      <div className="item-content">
                        <div className="image-upload"> <label style={{cursor: 'pointer'}}for="file_upload"> <img src="" alt=""
                              className="uploaded-image"/>
                            <div className="h-100">                       
                              <div className="dplay-tbl">
                                <div className="dplay-tbl-cell"> <i className="fa fa-cloud-upload"></i>

                                
        
                                  <div className="Photobox">
                                    <div className="upload font-type-3"><b>Photos sell/rent your property fast!</b></div>
                                    <div className="upload2"><span className="font-type-4">90% Home seekers</span> contact on
                                      properties with photos.</div>
                                  </div>
                                  <div className="uploadBtn font-type-4">
                                    <a href="" className="btn__add-photo">
                                      <input type="file" className="custom-file-input"
                                       onChange={() => setImages([...inputRef.current.files])}
                                       ref={inputRef}
                                       multiple="multiple"/>
                                      Add Photos</a>
                                  </div>
                                 

                                  <button type="submit" onClick={upload} style={{display:"none"}}>upoad</button>
        
                                </div>
                              </div>
                            </div>
        
                          </label> </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        
        
          </>

            )
            }
