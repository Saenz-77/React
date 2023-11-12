import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AddCart } from "./AddCart";

function ProductAbout(props) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className="exitProduct">
      <div className="productAbout">

          <div className='etiquetaAbout'>
            <span>{props.marca}</span>
            <p>${props.precio}</p>
          </div>
            <Slider {...settings}>
              <img src={props.imagen} alt='producto' className='imageProductAbout'/>
              <img src={props.imagen} alt='producto' className='imageProductAbout'/>
            </Slider>

            < AddCart key={props.id} id={props.id} />
          <div>
          </div>

      </div>
    </div>
  )
}

export { ProductAbout };