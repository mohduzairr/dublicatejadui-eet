// import { AdvicesBox } from 'pages/HomePage/components/Main/components/HomeProperties/components/Advices/components/AdvicesBox'
import React from 'react'
import { AdvicesBox } from './components/AdvicesBox'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowRight } from "@fortawesome/free-solid-svg-icons";


// import { AdvicesBox } from '../AdvicesBox'

 const Advices = () => {
    return (
        <>
            <div className="text20"> <h2 >Tools & Advice
            </h2>
            {/* <a href="#" ><span className="view1">View all</span></a> */}
            </div>
            <div className="container">
            <div className="container1">

                <AdvicesBox
                    title3={<i class="fas fa-chart-line" style={{fontSize: '40px',color:'red'}} ></i> }
               
                    title="Rates & Trends"
                    title1="Know all about Property Rates & Trends in your city."
                    title2={<FontAwesomeIcon icon={faArrowRight} />}
                    title50="View now"

                />

                <AdvicesBox
                     title4={<i class='fas fa-hand-holding-usd' style={{fontSize: '40px',color:'red'}}></i>}
                    title="Investment Hotspot"
                    title1="Discover the top laocalities in your city for investment."
                    title2={<FontAwesomeIcon icon={faArrowRight} />}
                    title50="View now"

                />
                <AdvicesBox
                    title5={<i class='fas fa-wallet' style={{fontSize: '40px',color:'red'}}></i>}
                    title="Research insights"
                    title1="Get experts insights and research report on real state. "
                    title2={<FontAwesomeIcon icon={faArrowRight} />}
                    title50="View now"

                />
                <AdvicesBox
                    title6={<i class="fa fa-calculator" style={{fontSize: '40px',color:'red'}}></i>}
                    title="EMI Calculator"
                    title1="Know how much you'll have to pay every month on your loan."
                    title2={<FontAwesomeIcon icon={faArrowRight} />}
                    title50="View now"

                />
               
            </div>
            </div>
            </>
    )
}


export default Advices