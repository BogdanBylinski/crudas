import { useState } from "react"
import randLetters from "../../StaticComponents/randLetters";

function Create({create}){

    
    const [registrationCode, setRegistrationCode]=useState(randLetters());
    const [bendrasKM, setBendrasKM]=useState(0);
    const [isAlive, setIsAlive]=useState(0);
    const [lastUseTime, setLastUseTime]=useState('brand new')
    const [km, setKM]=useState(0)

    
    const handleCreate=()=>{
        const data = {
            registrationCode: registrationCode,
            bendrasKM:bendrasKM,
            isAlive: isAlive,
            lastUseTime:lastUseTime,
            km:km
        }
        create(data)
        setRegistrationCode();
        setBendrasKM(0)
        setIsAlive(0);
        setLastUseTime('brand new')
        setKM(0)
    }
    // const handleInput=(e,d)=>{
    //     switch(d){
    //         // case 'type':
    //         //     setType(e.target.value);
    //         //     break;
    //         // case 'color':
    //         //     setColor(e.target.value);
    //         //     break;
    //         case 'isAlive':
    //             setIsAlive(i => i === 0 ? 1 : 0);

    //             break;
    //         default:
    //     }

    // }



    return (
        <div className="create">
            <div className="form">
            {/* <div className="input">
                <label htmlFor="">Type: </label> */}
                {/* <input  onChange={(e)=>handleInput(e,'type')} value={type} type="text" /> */}
                
            {/* </div>
            <div className="input">
                <label htmlFor="">Color:</label>
                <select defaultValue={color}onChange={(e)=>handleInput(e,'color')} name="" id="">
                    <option value="selected" >Select color</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
            <div className="input">
                <label htmlFor="">Is alive?</label>
                <input type="checkbox"  defaultChecked={isAlive}  onChange={(e)=>handleInput(e,'isAlive')} />
            </div> */}
            <div className="input btn">
                <button onClick={handleCreate}>Create</button>
            </div>



            </div>
        </div>
    )
}
export default Create