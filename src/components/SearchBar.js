import React from 'react'

function SearchBar({searchVal,setSearchVal}){

    console.log(searchVal)
    function inputChangeHandle(e){
        setSearchVal(e.target.value)
    }
  return (
    <div className='col col-sm-4'>
        <input className='form-control' placeholder='Search...' type="text" 
        onChange={inputChangeHandle}
        />
    </div>
  )

  }
export default SearchBar