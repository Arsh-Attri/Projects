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
    <div>
      <Heading />
      <div>
        <input type="text" placeholder='Search' onChange={(e)=>{setVal(e.target.value) }} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <AllCards data={filterData} />
    </div>
    </>
  )
}

export default App
