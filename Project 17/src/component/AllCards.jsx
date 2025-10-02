
function AllCards({data}) {
  return (
    
    <div>
        <div className="flex justify-center items-center flex-wrap gap-7 mt-5">
        {data.map((singleItem)=>(
            <div key={singleItem.id}  className="w-80 bg-red-400 p-4 rounded-2xl">
                <img src={singleItem.thumbnail} className="w-50 h-50" alt="card" />
                <div className="flex w-[100%] justify-between items-center">
                <h3 className="text-m text-left">{singleItem.title}</h3>
                <p className="text-4xl">${singleItem.price}</p>
                </div>
                
                <p className="text-sm">{singleItem.description}</p>
            </div>
        ))}
        </div>
        
        
    </div>
  )
}

export default AllCards