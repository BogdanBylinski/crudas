import Animal from "./Animal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import "./Table.scss";
import { useEffect, useState } from "react";
export default function Read({paspirtukai, deleteA,show,handleToggle,handleToggle2, filter, setFilter}){
    const [suma, setSuma]=useState(0)
const handleDelete=(id)=>{
    deleteA(parseInt(id));
}
useEffect(()=>{

        let sums =0
        if(paspirtukai.length!==0){

            paspirtukai.forEach(e=>{
                sums = e.bendrasKM + sums
                setSuma(suma=>sums)
            })
        }else{setSuma(0)}
    
})


    return (
        <div className="list" >
            {/* <h2>List</h2> */}
            {/* <ul> */}
                {/* {
                    zoo.map(e  => <Animal zoo={zoo} show={show} deleteA={deleteA}animal={e}key={e.id} ></Animal>)
                } */}
                <table  >
                        <thead>
                               <tr>
                               {/* {paspirtukai.length>0? Object.keys(paspirtukai[0]).map((e,i) => <th key={i}>{e}</th>):<th></th>} */}
                               {/* { paspirtukai.length > 0 ? <><th>Reg. NR</th><th>Bendras KM</th><th>Data</th><th>Uzimtumas</th><th>Veiksmai</th></>:<th></th>} */}
                               <th>Reg. NR</th><th>Bendras KM <FontAwesomeIcon onClick={handleToggle2} icon={faSort} /></th><th>Data <FontAwesomeIcon onClick={handleToggle} icon={faSort} /></th><th>Uzimtumas</th><th>Veiksmai</th>
                               </tr>
                            </thead>
                            <tbody >

                               {paspirtukai.filter(e => e.registrationCode.includes(filter.toUpperCase()) || filter === '').map((e,i) => <tr key={i}>
                                   <td className="trBody">{e.registrationCode}</td>
                                   <td className="trBody">{(e.bendrasKM)+' km'}</td>
                                   <td className="trBody">{e.lastUseTime}</td>
                                   <td className="trBody">{e.isAlive===1? <div className="unavailable">Uzimtas</div>:<div className="available">Laisvas</div>}</td>
                                   <td className="trBody fl">
                                       <p className="buttonai">
                                           <span className="edit" onClick={()=>show(e.id)}><FontAwesomeIcon  icon={faPenToSquare} /></span><span onClick={()=>handleDelete(e.id)} className="delete"><FontAwesomeIcon  icon={faTrashCan} /></span></p></td>
                                         
                                    </tr>  )}
                                    <tr id="lastRow">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td id="pasp">
                                           
                                            Paspirtuku skaicius: {paspirtukai.length} 
                                        </td>
                                        <td id='bendr'>

                                             Bendras nuvaziuotu km skaicius: {Math.round(suma * 100) / 100}
                                        </td>
                                    </tr>
                                        </tbody>
                                    </table>
            {/* </ul> */}
        </div>
    )
} 