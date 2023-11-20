import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AddCart } from "./AddCart";

import second from "../assets/second.jpg"

const imageList = {
  '../assets/adidas.jpg': second,
  '../assets/albertofermani.jpg': second,
  '../assets/caterpillar.jpg': second,
  '../assets/converse.jpg': second,
  '../assets/gucci.jpg': second,
  '../assets/jordan.jpg': second,
  '../assets/newbalance.jpg': second,
  '../assets/nike.jpg': second,
  '../assets/puma.jpg': second,
  '../assets/reebok.jpg': second,
  '../assets/skechers.jpg': second,
  '../assets/underarmor.jpg': second,
}

function additionalImages(imageMain, imageList) {
  if (imageList.hasOwnProperty(imageMain)) {
    return imageList[imageMain];
  }
}
function ProductAbout(props) {
  console.log(props.imagen)
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
              {additionalImages(props.imagen, imageList) && <img src= {additionalImages(props.imagen, imageList)} alt='producto' className='imageProductAbout'/>}
            </Slider>

            < AddCart key={props.id} id={props.id} />
          <div>
          </div>

      </div>
    </div>
  )
}

export { ProductAbout };