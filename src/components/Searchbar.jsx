import React from 'react'
import {useForm} from 'react-hook-form'


function Searchbar({search,setsearch}) {
    const {register, handleSubmit,reset} =useForm()
    const searches=(data)=>{
    setsearch([...search,data.countryname])
    reset()
}
  return (
    <div className='text-2xl text-center'>
       <form onSubmit={handleSubmit(searches)}>
         <input  className='border-blue-300 border-2 p-2 w-[80%]  m-5 capitalize' type="text" {...register('countryname')} name="countryname"  />
         <button type='submit' className='bg-blue-300 p-2 hover:bg-blue-500 hover:text-white'>submit</button>
       </form>
    </div>
  )
}

export default Searchbar