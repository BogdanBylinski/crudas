import { useEffect } from "react";
import { useState } from "react";

function Edit({edit, paspirtukas, cancel, }){

    
    const [type, setType]=useState('');
    const [km, setKM]=useState('');
    const [bendrasKM, setBendrasKM]=useState('')
    const [isAlive, setIsAlive]=useState(1);
    const [lastUseTime, setLastUseTime]=useState('brand new')
    const [date, setDate]=useState('')
    const [memo, setMemo]=useState(0)


    useEffect(()=>{
        setType(paspirtukas.type);
        setBendrasKM(paspirtukas.bendrasKM);
        setIsAlive(paspirtukas.isAlive);
        setLastUseTime(paspirtukas.lastUseTime);

    },[paspirtukas])
   

    const handleEdit=()=>{
        const data = {
            type: type,
            isAlive: isAlive,
            lastUseTime:lastUseTime,
            bendrasKM:bendrasKM,
            km:km
            
        }
        
        edit(data)
        setType('');
        setIsAlive(1);
        // setLastUseTime('brand new');
        setBendrasKM(bendrasKM=>(bendrasKM+km));
        setLastUseTime(date)


    }
    
    const handleInput=(e,d)=>{
        switch(d){
            case 'KM':
                
                       setKM(e.target.value)
                break;
                case 'Last use time?':
                    setDate(e.target.value);
                    setLastUseTime(e.target.value);
                    console.log(date);
                    break;
                    case 'isAlive':
                        setIsAlive(i => i === 0 ? 1 : 0);

                break;
            default:
        }

    }
    const handleCancel=()=>{
        cancel()
    }



    return (
        <div className="modal">

        <div className="editas">
            <h2>Create</h2>
            <div className="form">
            <div className="input">
                <label htmlFor="">KM: </label>
                <input  onChange={(e)=>Number(e.target.value)? handleInput(e,'KM'):''} value={km} type="text"  placeholder="0.00" />
                
            </div>
            <div className="input">
                <label htmlFor="">Last use time:</label>
                <input  onChange={(e)=>handleInput(e,'Last use time?')} type="date" name="" id="" value={date} />
                {/* <select defaultValue={color}onChange={(e)=>handleInput(e,'color')} name="" id="">
                    <option value="selected" >Select color</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select> */}
            </div>
            <div className="input freeOrNot">
                <label  htmlFor="">Uzimtumas: {isAlive===1? 'Uzimtas':'Laisvas'}</label>
                <input className="toggle" type="checkbox"  checked={isAlive} onChange={(e)=>handleInput(e,'isAlive')} />
            </div>
            <div className="input btn">
                <button className="yes" onClick={handleEdit}>Edit</button>
                <button  className='no'onClick={handleCancel}>Cancel</button>
            </div>



            </div>
        </div>
        </div>
    )
}
export default Edit