import React from 'react'
import { useHistory } from 'react-router'

 const CommercePropertyBox= (props) => {
     const history = useHistory();
   const details =()=>{
      history.push({
          pathname:'./flatdetails',
          state:props.id
      })
   }


    return (
        <>

            <div class="box1">

                <div class="card12">
                <a href="">

                <div class="card--graphic1" onClick={details}>
                <img src={"http://127.0.0.1:8000/storage/property/" + props.images .split(',')[0]} width="296" height="184" />
                </div>

                <div class="card--content1">
                <div class="card--title1">{props.city}</div>
                <div class="card__text1">{props.location}</div>
                </div>
                </a>
                </div>
            </div>

            
        </>
    )
}

export default CommercePropertyBox