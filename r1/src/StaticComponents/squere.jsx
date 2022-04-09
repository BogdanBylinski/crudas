import { useEffect } from "react"

function Squere({sk}){
    useEffect(()=>{
        console.log('SK', sk+1);
        return ()=>{
            console.log('SK mire', sk+1);
        }
    },[sk])
    return(
        <>
        <div className="squere"  >{sk+1}</div>
        </>
    )
}
export default Squere