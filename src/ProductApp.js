import React from 'react';

import { AddCart } from './AddCart';

function ProductApp(props) {
  return (
    <div className='productApp'>
      
      <div className='etiqueta'>
        <span>{props.marca}</span>
        <p>${props.precio}</p>
      </div>

      <img src={props.imagen} alt='producto' className='imageProduct'/>
      <AddCart 
        key={props.imagen}
        id={props.id}
      />
    </div>
  )
}

export { ProductApp };