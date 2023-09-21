import React from "react";

import { AddCart } from "./AddCart";

function ProductAbout(props) {
  
  return(
    <div className="exitProduct">
      <div className="productAbout">
        <img src={props.imagen} alt='producto' className='imageProductAbout'/>
        <AddCart/>
      </div>
    </div>
  )
}

export { ProductAbout };