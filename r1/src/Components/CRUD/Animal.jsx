
function Animal({animal,deleteA, show,zoo}){

const handleDelete=(id)=>{
    deleteA(parseInt(id));
}

    return(
        <li>
            <div className="content">
                <span>

                {animal.type}
                </span>
                <i>
                    {animal.color}
                    </i>
                {
                    animal.isAlive? <div className="isalive"></div>: null
                }
            </div>
            <div className="buttons">
                <button className="edit" onClick={()=>show(animal.id)}>Edit</button>
                <button onClick={()=>handleDelete(animal.id)} className="delete">Delete</button>
            </div>
            
        </li>
    )
}
export default Animal