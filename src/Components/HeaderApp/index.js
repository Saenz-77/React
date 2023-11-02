/* import React from 'react';
import './HeaderApp.css'

function HeaderApp() {
  return (
    <div className='headerApp'>
      <h1>Nombre del Negocio</h1>
    </div>
  )
}

export { HeaderApp }; */

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeaderApp.css';

import slider_img_1 from "./assets/tu_logo_0.jpg"
import slider_img_2 from "./assets/negocio_0.jpg"
import slider_img_3 from "./assets/producto_estrella_0.jpg"

function HeaderApp({ visible }) {
  const settings = {
    dots: true, // Mostrar los puntos de navegación
    infinite: true, // Desplazamiento infinito
    speed: 500, // Velocidad de desplazamiento
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Desplazarse una imagen a la vez
    autoplay: true, // Reproducir automáticamente el slider
    autoplaySpeed: 2000, // Velocidad de reproducción automática
  };

  return (
    <div className='headerApp' style={{ display: visible ? 'flex' : 'none' }}>
      <Slider {...settings}>
        
          <img className='slider_imgs' src= {slider_img_1} alt='Imagen 1'/>
        
        
          <img className='slider_imgs' src= {slider_img_2} alt='Imagen 2'/>
        
        
          <img className='slider_imgs' src= {slider_img_3} alt='Imagen 3'/>
        
      </Slider>
    </div>
  );
}

export { HeaderApp };