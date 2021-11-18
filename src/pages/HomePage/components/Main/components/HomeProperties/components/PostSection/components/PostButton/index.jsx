import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router'

export const PostButton = () => {
 const history=  useHistory();
 const user = useSelector(state => state.user)

 const post = ()=>{
     if(user?.data?.token){
        history.push('/propertypost');

     }else{
        alert("please first login than you can post the property")
        history.push('/login');
     }
    
 }
    return (
        <div>
            <div className="grid-item" onClick={post}>
                <button className="btn btn-light " id="postp" type="button"> Post Property FREE</button>
            </div>
        </div>
    )
}
