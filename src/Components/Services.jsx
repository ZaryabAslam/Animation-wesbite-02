import React from 'react'
import '../App.css';
import Android from '../images/android.png'
import Ios from '../images/ios.png'
import Hybrid from '../images/hybrid.png'
import Php from '../images/php.png'
import Python from '../images/python.png'
import Node from '../images/nodejs.png'
import Java from '../images/java.png'
import useWebAnimations, { fadeIn, fadeInLeft, fadeInRight } from '@wellyshen/use-web-animations';



function Services() {
  const {ref: mobile} = useWebAnimations({...fadeInLeft})
  const {ref: web} = useWebAnimations({...fadeInRight})
  const {ref: heading} = useWebAnimations({...fadeIn})
  return (
    <div>
      
        <div id='Services' className='py-4'>
           <h1 className='head'>OUR SERVICES</h1> 
        </div>

        <div className="mobkadiv">
        <h1 ref={heading} className='head'>MOBILE APP DEVELOPMENT </h1> 
        <div ref={mobile} className="mobkadiv2">
          <div className="androiddiv">
            <div>
              <img src={Android} alt="" />
            </div>
            <div>
              <br />
              <h2>ANDROID</h2>
            </div>
          </div>
          <div className="iosdiv">
            <div>
              <img src={Ios} alt="" />
            </div>
            <div>
              <br />
              <h2>IOS</h2>
            </div>
          </div>
          <div className="hybriddiv">
            <div>
              <img src={Hybrid} alt="" />
            </div>
            <div>
              <br />
              <h2>HYBRID</h2>
            </div>
          </div>
        </div>
        <div className="webkadiv">
        <h1 ref={heading} className='head py-4'>WEB DEVELOPMENT</h1> 
          <div ref={web} className="webkadiv2">
            <div className="phpdiv">
              <div>
                <img src={Php} alt="" />
              </div>
              <div>
                <br />
                <h2>PHP</h2>
              </div>
            </div>
            <div className="pythondiv">
              <div>
                <img src={Python} alt="" />
              </div>
              <div>
                <br />
                <h2>PYTHON</h2>
              </div>
            </div>
            <div className="nodejsdiv">
              <div>
                <img src={Node} alt="" />
              </div>
              <div>
                <br />
                <h2>NODEJS</h2>
              </div>
            </div>
            <div className="javadiv">
              <div>
                <img src={Java} alt="" />
              </div>
              <div>
                <br />
                <h2>JAVA</h2>
              </div>
            </div>
          </div>
        </div></div>

    </div>
  );
}

export default Services;
