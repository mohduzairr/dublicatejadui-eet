import React from 'react'
import { useHistory } from 'react-router'

function PropertyBox(props) {
    const  history=useHistory()
    const redirect =(id)=>{
      history.push({
        pathname: '/propertylist',
        state: props.id
      });
    }
    console.log(redirect);

    return (
        
        <div className="box1">

        <div className="card12">
            <a href="">

                <div className="card--graphic" onClick={redirect}>
                    <img src={"http://127.0.0.1:8000/storage/property/" + props.image.split(',')[0]} width="296" height="184" alt="" />
                </div>

                <div className="card--content">
                    <div className="card__title">

                        <span className="card__title--count"></span>
                        {props.type}
                    </div>
                    <span className="card--anchor">{props.location}</span>
                </div>
            </a>
        </div>
    </div>
    )
}

export default PropertyBox
