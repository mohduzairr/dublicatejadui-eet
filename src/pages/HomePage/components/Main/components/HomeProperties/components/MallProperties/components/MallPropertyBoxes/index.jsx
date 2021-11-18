import React from 'react'
import { useHistory } from 'react-router'

const MallPropertyBoxes = (props) => {
        const history=useHistory();
    const redirect =()=>{
       history.push({
           pathname:"/flatdetails",
           state:props.id
       })
    }

    return (
        <div>
            <div className="box1">

                <div className="card12">
                <div class="card--title2">{props.tupe }Mall in {props.city}</div>
             <img src={"http://127.0.0.1:8000/storage/property/" + props.image.split(',')[0]} width="296" height="184" alt=""  onClick={redirect}/>                <div className="card--title2">{props.type}</div>


                    <a href="">

                      

                        <div className="card--content1">
                            <div className="card__text2">
                                <span className="view2">View<i className="bi bi-arrow-right-short"></i></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default MallPropertyBoxes