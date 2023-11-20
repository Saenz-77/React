import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AddCart } from "./AddCart";

import second from "../assets/second.jpg"

const imageList = {
  '/static/media/adidas.8fc6b257.jpg': second,
  '/static/media/albertofermani.325dd87a.jpg': second,
  '/static/media/caterpillar.2d608a99.jpg': second,
  '/static/media/converse.340b6771.jpg': second,
  '/static/media/gucci.c186502c.jpg': second,
  '/static/media/jordan.c2197811.jpg': second,
  '/static/media/newbalance.3fbd2222.jpg': second,
  '/static/media/nike.c56217ad.jpg': second,
  '/static/media/puma.11f0e77c.jpg': second,
  '/static/media/reebok.0b75e334.jpg': second,
  '/static/media/skechers.7bc200a4.jpg': second,
  '/static/media/underarmor.3f9838f0.jpg': second,
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