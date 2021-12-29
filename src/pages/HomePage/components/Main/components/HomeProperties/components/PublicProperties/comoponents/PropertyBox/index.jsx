import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

function PropertyBox(props) {
    const property = useSelector(state => state.property)
    const  history=useHistory()
    const redirect =(id)=>{
      history.push({
        pathname: '/propertylist',
        city:property?.selectedCity?.city,
        // type:props.type,
        // state: props.id
      });
    }
    console.log(props.id+"id milegi");

    return (
        
        <div className="box1">

        <div className="card12">
            {/* <a> */}

                <div className="card--graphic" onClick={redirect}>
                    <img src={"http://admin.csakh.com/project/public/storage/property/" + props.image.split(',')[0]} width="296" height="184" alt="" />
                </div>

                <div className="card--content">
                    <div className="card__title">

                        <span className="card__title--count"></span>
                        {props.type}
                    </div>
                    <span className="card--anchor">{props.location}</span>
                </div>
            {/* </a> */}
        </div>
    </div>
    )
}

export default PropertyBox
