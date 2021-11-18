import React from 'react'
import { useHistory } from 'react-router'

export const AdvicesBox = ({title,title1,title2,title3,title4,title5,title6}) => {
    const history=useHistory()
    const redirect = ()=>{
        history.push({
            pathname:'/pageonworking'
        })
    }
    return (
        <>
             <div className="box1" onClick={redirect}>
                <div className="card card-1">
                     {title3}
                    { title4}
                    {title5}
                    {title6}
                    <h4>{title}</h4>
                    <p>{title1}</p>
                    <p className="view">{title2}</p>


                </div>
            </div>
            </>
    )
}
