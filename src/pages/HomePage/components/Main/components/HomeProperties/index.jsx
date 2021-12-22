import axios from 'axios'
import { DifferentPropertiesBoxes } from 'pages/HomePage/components/Main/components/HomeProperties/components/DifferentPropertiesBoxes'
import { Heading } from 'pages/HomePage/components/Main/components/HomeProperties/components/DifferentPropertiesBoxes/components/Heading'
import properties from 'properties'
import React, { useEffect, useState } from 'react'
import Advices from './components/Advices'
import CommerceProperty from './components/CommerceProperty'
import MallProperties from './components/MallProperties'
import { PostSection } from './components/PostSection'
import PublicProperties from './components/PublicProperties'
import { Slider } from './components/Slider'


    const HomeProperties = () => {
        const title="13 k"
        const titl ="Continue last search"
        const title1=" Properties listed for you"
        const title2="Get personalised property"
        const title3="recommendations from us"
        const title4="Top Handpicked Projects "
        const title5="for you"
        const title6="Top Exclusive Owner Properties"
        // const title7="Properties"
        const title8="See all"
    return (

        <div className="container">
            <Heading/>
            <div className="diff-prop-box" >
            <DifferentPropertiesBoxes  title={title} title1={title1} titl={titl}/>
            <DifferentPropertiesBoxes  title2={title2} title3={title3} title8={title8}/>
            <DifferentPropertiesBoxes  title4={title4} title5={title5}  title8={title8}/>
            <DifferentPropertiesBoxes  title6={title6}  title8={title8} />
            </div>
            <PublicProperties title="We've got properties for everyone" />
            <CommerceProperty title="we've got Commercial properties" /> 
            <MallProperties title="We've got  Malls properties " />
            <Advices/>
            <PostSection title=" Post your Property for Free List it on Propnex and get genuine leads" />

        
            <Slider/>
        </div>
    )
}

export default HomeProperties
