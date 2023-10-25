import React from "react";

import { HeaderApp } from "./Components/HeaderApp";
import { NavApp } from "./Components/NavegationApp";
import { SectionApp } from "./Components/SectionApp";
import { ProductApp } from "./Components/ProductApp";
import { SearchApp } from "./Components/SearchApp";

import nike from "./assets/nike.jpg"
import puma from "./assets/puma.jpg"
import reebok from "./assets/reebok.jpg"
import adidas from "./assets/adidas.jpg"
import skechers from "./assets/skechers.jpg"
import jordan from "./assets/jordan.jpg"
import caterpillar from "./assets/caterpillar.jpg"
import converse from "./assets/converse.jpg"
import gucci from "./assets/gucci.jpg"
import underarmor from "./assets/underarmor.jpg"
import albertofermani from "./assets/albertofermani.jpg"
import newbalance from "./assets/newbalance.jpg"

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


  const [visible, setVisible] = React.useState(true);
  const handleSubmit = ( valueSearch ) => {
    if (valueSearch === '') {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  return (
    <React.Fragment>

      <div className="divNav">.</div>
      <SearchApp
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      <NavApp/>

      <HeaderApp visible={visible} />
      
      <SectionApp>
        {searchedProduct.map( product => (
          <ProductApp
            key={product.marca}
            marca={product.marca}
            precio={product.precio}
            imagen={product.imagen}
            id={product.id}
            /* handleClick={handleClick} */
          />
        ))}
      </SectionApp>

    </React.Fragment>
  )
}

export default App;