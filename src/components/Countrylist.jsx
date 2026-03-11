import React from 'react'

function Countrylist({countries}) {
  return (
    <div className='m-5'>
        <div className='grid sm:grid-col:2 lg:grid-cols-4 sm:grid-cols-2'>
            {
                countries.map((county)=>
                <div className='border-gray-300 border-2 bg-gray-100 p-2 m-2'>
                   <div className='m-auto p-2'> <img src={county.flags.png} alt="flag" /></div>

                   <div className='text-center p-2'>
                    <h3 className='text-2xl font-bold'>{county.name.common}</h3>
                   <h3>Capital : {county.capital}</h3>
                   <h3>
                    currency ({county.currencies?Object.values(county.currencies)[0]?.symbol:'n/a'}): {county.currencies?Object.keys(county.currencies)[0]:'n/a'} 
                    -{county.currencies?Object.values(county.currencies)[0]?.name:'n/a'}
                   </h3>
                    </div> 

                </div>
            )
            }
        </div>
    </div>
  )
}

export default Countrylist