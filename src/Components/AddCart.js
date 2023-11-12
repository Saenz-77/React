import React from 'react';

function AddCart(props) {
  return (
    <React.Fragment>
      <a href= {` https://wa.me/573116855734/?text=Deseo%20información%20y%20hacer%20el%20pedido%20del%20producto%20ID:%20${props.id} `}>
        <button className='buttonPedir'>
          <div className='iconWhatsapp'></div>
          Pedir
        </button>
      </a>
    </React.Fragment>
    
  )
}

export { AddCart };