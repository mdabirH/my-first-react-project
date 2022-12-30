import React from 'react'
import style from './country.module.css'

const Country = (props) => {
   
    const{name,flags,capital, population,area}=props.country;

    const handleRemoveCuntry=(name)=>{
     props.onRemoveCountry(name);

    }
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common}/>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3 className={style.var}>Area: {area}</h3>
            <buttton className={style.btn} onClick={()=>{
              handleRemoveCuntry(name.common)
            }}>
              Remove

            </buttton>
            
        </div>
        
    </article>
  )
}

export default Country