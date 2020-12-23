import React from 'react'
import Pic1 from '../images/1.jpg'
import Pic2 from '../images/2.jpg'
import Pic3 from '../images/3.jpg'

function Carosel() {
  return (
    <div>
      <div id='home' id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Pic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Pic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Pic3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden"></span>
        </a>
      </div>
    </div>
  );
}

export default Carosel;
