import React, { useState } from 'react';
import Heading from './component/Heading';
import AllCards from './component/AllCards';
import { data } from './utilis/data';

function App() {
  const [val, setVal] = useState("");
  const [filterData, setFilterData] = useState(data)
  function handleSearch(){
    let res=data.filter((item)=> item.title.toLowerCase().includes(val.toLowerCase()))
    setFilterData(res);
  }
  return (
    <>
    <div className='bg-gray-300 text-center'>
      <Heading />
      <div className='flex justify-center items-center'>
        <input className='p-3 rounded-l-2xl bg-white w-80' type="text" placeholder='Type anything' onChange={(e)=>{setVal(e.target.value) }} />
        <button className='bg-green-300 p-3 border-s-blue-400 rounded-r-2xl hover-cursor' onClick={handleSearch}>Search</button>
      </div>
      {filterData.length <=0 ? <h1 className='text-5xl mt-30'>No Items found</h1> : <AllCards data={filterData} />}
      
    </div>
    </>
  )
}

export default App
