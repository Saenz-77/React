import React, { useState, useEffect } from 'react';
import { AddCart } from './AddCart';
import { ProductAbout } from './ProductAbout';



function ProductApp(props) {
  // --------------- Control para mostrar el producto ---------------
  const [showProduct, setShowProduct] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if(event.target.classList.contains('exitProduct') ) {
        setShowProduct(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // ----------------------------------------------------------------
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imagen) => {
     setShowProduct(true); // control para mostrar el producto
     setSelectedImage(imagen);
  };

  return (
    <div className='productApp'>
      <div className='etiqueta'>
        <span>{props.marca}</span>
        <p>${props.precio}</p>
      </div>

      <img src={props.imagen} alt='producto' className='imageProduct' onClick={() => handleClick(props.imagen)} />
      <AddCart
        key={props.imagen}
        id={props.id}
      />

      { showProduct && selectedImage && <ProductAbout imagen={selectedImage} marca={props.marca} precio={props.precio}/>}
    </div>
  );
}

export { ProductApp };