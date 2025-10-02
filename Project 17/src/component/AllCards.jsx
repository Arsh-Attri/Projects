
function AllCards({data}) {
  return (
    
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        <div  style={{display: 'flex', flexWrap: 'wrap', gap: '10px', overflowY: 'auto', maxHeight: '90vh'}}>
        {data.map((singleItem)=>(
            <div key={singleItem.id} style={{backgroundColor: 'red', width: '400px', borderRadius: '10px', padding: '10px'}}>
                <img src={singleItem.thumbnail} height={100} width={100} alt="card" />
                <h3>{singleItem.title}</h3>
                <p>{singleItem.price}</p>
                <p>{singleItem.description}</p>
            </div>
        ))}
        </div>
        
        
    </div>
  )
}

export default AllCards