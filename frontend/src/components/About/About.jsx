import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';
const About = () => {
  return <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            
            {/* {«««««« about img »»»»»»} */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />    
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[9%]">
                <img src={aboutCardImg} alt="" />
            </div>
            </div>   

            {/* {«««««« about content »»»»»»} */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">Proud to be one of the nations Best!</h2>
                <p className="text__para">For 30 years in a row, U.S. News & World Report has recognised us as one of the best public hospital in the Nation and #1 in Texas. Carrying the legacy as we dive into Future of Technology Health Checkups.</p>
            
                <p className="text__para mt-[30px]">This hospital exemplifies excellence in patient care, offering compassionate, timely, and professional medical services. Their dedicated staff ensures every patient receives personalized attention, advanced treatment, and emotional support, creating a healing environment that prioritizes health, comfort, and well-being at every step.</p>
            
                <Link to='/'>
                    <button className="btn">Learn More</button>    
                </Link> 
            </div>
        </div>
    </div>
  </section>
}

export default About
