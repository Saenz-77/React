import React, { useState, useEffect, useRef } from "react";

import { HeaderApp } from "./HeaderApp";
import { NavApp } from "./NavegationApp";
import { SectionApp } from "./SectionApp";
import { ProductApp } from "./ProductApp";
import { SearchApp } from "./SearchApp";
import { ProductAbout } from './ProductAbout';

import nike from "./public/nike (1).jpg"
import puma from "./public/puma (1).jpg"
import reebok from "./public/reebok (1).jpg"
import adidas from "./public/adidas (1).jpg"
import skechers from "./public/skechers (1).jpg"
import jordan from "./public/jordan (1).jpg"
import caterpillar from "./public/caterpillar (1).jpg"
import converse from "./public/converse (1).jpg"
import gucci from "./public/gucci (1).jpg"
import underarmor from "./public/underarmor (1).jpg"
import albertofermani from "./public/albertofermani (1).jpg"
import newbalance from "./public/newbalance (1).jpg"

const punto = ".";
const defaultProducts = [
  { marca: 'Nike', precio: `100${punto}000`, imagen: nike, id: 1000 },
  { marca: 'Puma', precio: `70${punto}000`, imagen: puma, id: 1001 },
  { marca: 'Reebok', precio: `80${punto}000`, imagen: reebok, id: 1002 },
  { marca: 'Adidas', precio: `110${punto}000`, imagen: adidas, id: 1003 },
  { marca: 'Skechers', precio: `90${punto}000`, imagen: skechers, id: 1004 },
  { marca: 'Jordan', precio: `130${punto}000`, imagen: jordan, id: 1005 },
  { marca: 'Caterpillar', precio: `120${punto}000`, imagen: caterpillar, id: 1006 },
  { marca: 'Converse', precio: `60${punto}000`, imagen: converse, id: 1007 },
  { marca: 'Gucci', precio: `200${punto}000`, imagen: gucci, id: 1008 },
  { marca: 'Under armor', precio: `100${punto}000`, imagen: underarmor, id: 1009 },
  { marca: 'Alberto F.', precio: `200${punto}000`, imagen: albertofermani, id: 1010 },
  { marca: 'New balance', precio: `90${punto}000`, imagen: newbalance, id: 1011 },
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const searchedProduct = defaultProducts.filter(
    (product) => {
      const marcaText = product.marca.toLocaleLowerCase();
      const busquedaText = searchValue.toLocaleLowerCase();
      return marcaText.includes(busquedaText);
    }
  );

  // --------------- Control para mostrar el producto ---------------
  const [showProduct, setShowProduct] = useState(false);
  const ref = useRef(null);

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

  const handleClick = () => {
    setShowProduct(true);
  };
  // ----------------------------------------------------------------


  return (
    <React.Fragment>
      {
        showProduct && ( <ProductAbout ref={ref}/> )
      }

      <SearchApp
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <NavApp/>
      <HeaderApp/>

      <SectionApp>
        {searchedProduct.map( product => (
          <ProductApp
            key={product.marca}
            marca={product.marca}
            precio={product.precio}
            imagen={product.imagen}
            id={product.id}
            handleClick={handleClick}
          />
        ) )}
      </SectionApp>

    </React.Fragment>
  )
}

export default App;