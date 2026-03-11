import React, { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar'
import Countrylist from './components/Countrylist'

function App() {
  const [search, setsearch]=useState([])
  const [countries, setcountry] = useState([])

  useEffect(()=>{
    if (search.length==0)
      return

    const fetchdata= async()=>{
      const lastsearch= search[search.length-1]
      const res=await fetch(`https://restcountries.com/v3.1/name/${lastsearch}`)
      const data= await res.json()
      
      setcountry((prev)=>[...prev,...data])
    } ; fetchdata()
  },[search])
  
  return (
    <div>
      <h1 className='text-center text-5xl m-10 uppercase font-bold'>country explorer</h1>
      <div>
        <Searchbar search={search} setsearch={setsearch} />
        <Countrylist countries={countries} />
      </div>
    </div>
  )
}

export default App