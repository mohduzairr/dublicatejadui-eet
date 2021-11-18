import React from 'react'
import Main from './components/Main'

function HomePage({city, setCity,name,setName}) {
    return (
        <div>
            
            <Main city={city} setCity={setCity}   name={name} setName={setName}/>
        </div>
    )
}

export default HomePage
