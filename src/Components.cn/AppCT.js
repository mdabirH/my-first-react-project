import React, { useState ,useEffect} from 'react'
import Countries from './Countries';
import style from './country.module.css';
import Search from './Search';





const url= "https://restcountries.com/v3.1/all";

const AppCT = () => {
   const [isLoading,setIsLoading]=useState(true);
   const [countries,setCountries]=useState([]);
   const [error,setError]=useState(null);
   const [filteredCountries,setfilteredCountries]=useState(countries);
    const fetchData = async (url)=>{
       
    
        try{
            const res = await fetch(url);
            const data = await res.json();
            setCountries(data);
            setIsLoading(false);
            setfilteredCountries(data);
            setError(error);
     
         
        }catch(error){
            setIsLoading(false);
            setError(error);
          

        }

    };
    useEffect(() => {
        fetchData(url)
    
 
    }, [])
    const handleRemoveCuntry=(name)=>{
       const filter = filteredCountries.filter((country)=>
       country.name.common !== name);
       setfilteredCountries(filter);

    };
    const handleSearch =(searchValue)=>{
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter((country)=>{
            const countryName= country.name.common.toLowerCase();
            return  countryName.startsWith(value);
        });

        setfilteredCountries(newCountries);

    }
    
  return (
    <>
        <h1 className={style.text}>Country App</h1>
        <Search onSearch={handleSearch}/>
    
        {isLoading && <h2>Loading..........</h2>}
        {error && <h2>{error.message}</h2>}
        {countries && <Countries countries={filteredCountries}
        onRemoveCountry={handleRemoveCuntry}/>}

    </>
  )
}

export default AppCT