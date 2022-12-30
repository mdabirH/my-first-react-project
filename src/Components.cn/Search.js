import React, { useState , useEffect } from 'react'
import style from  './country.module.css'

const Search = (props) => {
    const [searchText,setSearchText]=useState('');
    const handleChange=(e)=>{
     
     setSearchText(e.target.value);
  

    }
    useEffect(() => {
        props.onSearch(searchText);
    
    }, [searchText]);
    

  return (
    <div className={style.center}>
        <input
        type='text'
         placeholder='Search Now....'
         value={searchText}
         onChange={handleChange}
        
        
        />
    </div>
  )
}

export default Search