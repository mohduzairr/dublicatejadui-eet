import axios from 'axios'
import { DifferentPropertiesBoxes } from 'pages/HomePage/components/DifferentPropertiesBoxes'
import { Heading } from 'pages/HomePage/components/DifferentPropertiesBoxes/components/Heading'
import properties from 'properties'
import React, { useEffect, useState } from 'react'
import Advices from './components/Advices'
import CommerceProperty from './components/CommerceProperty'
import MallProperties from './components/MallProperties'
import { PostSection } from './components/PostSection'
import PublicProperties from './components/PublicProperties'
import { Slider } from './components/Slider'


    const HomeProperties = () => {
        
    return (

        <div className="container">
            <Heading/>
            <div className="diff-prop-box" >
            <DifferentPropertiesBoxes  title="Because you searched Chennai" />
            <DifferentPropertiesBoxes  title="Because you searched Chennai" />
            <DifferentPropertiesBoxes  title="Because you searched Chennai" />
            <DifferentPropertiesBoxes  title="Because you searched Chennai" />
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
