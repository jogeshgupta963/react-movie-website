import React from 'react'

function SearchBar({searchVal,setSearchVal}){

    function inputChangeHandle(e){
      e.preventDefault()
        setSearchVal(e.target.value)
    }
  return (
    <div className='col col-sm-4'>
        <input 
        className='form-control' 
        value={searchVal}
        placeholder='Search...' 
        type="text" 
        onChange={inputChangeHandle}
        />
    </div>
  )

  }
export default SearchBar