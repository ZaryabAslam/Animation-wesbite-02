import useWebAnimations, { rubberBand, fadeInLeft, fadeIn } from '@wellyshen/use-web-animations';
import React from 'react'
import '../App.css'

function Select() {
  const { ref: paragraph } = useWebAnimations({ ...fadeInLeft })
  const { keyframes: Headingframe, timing: headingtime } = rubberBand;
  const { ref: Heading } = useWebAnimations({
    keyframes: Headingframe,
    timing: {
      ...headingtime,
      iterations: 1,
      delay: "500",
      easing: "ease",
    },
  })
  const { keyframes: boxess, timing: boxestime } = fadeIn;
  const { ref: threeboxes } = useWebAnimations({
    keyframes: boxess,
    timing: {
      ...boxestime,
      iterations: 1,
      delay: "1000",
      easing: "ease",
    },
  })
  return (
    <div>

      <div id='Select' className="punchline" ref={paragraph}>
        <p>
          We are a team of professionaly trained Computer Engineers, dedicated to provide you latest innovative ideas and services by young proffesionals which helps you to grow
          in digita world, improve your skills and develop new life style with latest technologies.
          </p>
      </div>
      <div>
        <div ref={Heading}>
          <h1 className="choose">WHY <span>SELECT</span> US?</h1>
        </div>
      </div>

      <div ref={threeboxes} className="container-fluid py-4 px-4">
        <div class="row justify-content-between">
          <div class="col-md-4 boxchoose">
            <div className='py-4 innerdiv'>
              <div>
                <i class='fas fa-seedling'></i>
              </div>
              <div>
                <h2>RELIABLE</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 boxchoose">
            <div className='py-4 innerdiv'>
              <div>
                <i class='fas fa-radiation'></i>
              </div>
              <div>
                <h2>UNIQUENESS</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 boxchoose">
            <div className='py-4 innerdiv'>
              <div>
                <i class='fas fa-drafting-compass'></i>
              </div>
              <div>
                <h2>INNOVATION</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Select;
