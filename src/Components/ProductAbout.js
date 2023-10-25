import React from "react";

import { AddCart } from "./AddCart";

function ProductAbout(props) {
  
  return(
    <div className="exitProduct">
      <div className="productAbout">
        
        <div className='etiquetaAbout'>
          <span>{props.marca}</span>
          <p>${props.precio}</p>
        </div>

        <img src={props.imagen} alt='producto' className='imageProductAbout'/>
        <AddCart/>
      </div>
    </div>
  )
}

export { ProductAbout };