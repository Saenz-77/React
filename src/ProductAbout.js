import React from "react";

function ProductAbout(props) {
  
  return(
    <div className="exitProduct">
      <div className="productAbout">
        <img src={props.imagen} alt='producto' className='imageProductAbout'/>
      </div>
    </div>
  )
}

export { ProductAbout };