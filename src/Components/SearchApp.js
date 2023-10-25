import React from 'react';

function SearchApp({
  searchValue,
  setSearchValue,
  handleSubmit,
}) {
  
  return (
    <input 
      className='searchApp'
      placeholder="Buscar producto"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        handleSubmit(event.target.value);
      }}
    />
  )
}

export { SearchApp };