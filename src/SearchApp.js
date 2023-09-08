import React from 'react';

function SearchApp({
  searchValue,
  setSearchValue,
}) {
  
  return (
    <input className='searchApp'
      placeholder="Buscar producto"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}

export { SearchApp };