// import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Create from './Components/CRUD/Create';
import Edit from './Components/CRUD/Edit';
import Read from './Components/CRUD/Read';
import './crud.scss';
import "./Components/CRUD/Table.scss";
import getNewId from './StaticComponents/id';
import randLetters from './StaticComponents/randLetters';

// import Tablet from './Components/CRUD/Table'

function App() {
  
    const [paspirtukai, setPaspirtukai] = useState([]);
    const [modal, setModal] = useState(0)
    const [sort, setSort]= useState([])


    useEffect(()=>{
      let data = localStorage.getItem('paspirtukai');
      if (data===null){
        localStorage.setItem('paspirtukai',JSON.stringify([]))
        setPaspirtukai([]);
      }else{
        setPaspirtukai(JSON.parse(data))
      }
    },[])
    useEffect(()=>{
      setSort(paspirtukai)
    })
    const create =(data)=>{
      

        const paspirtukas = {
          registrationCode: randLetters(),
          // color: data.color,
          bendrasKM: data.bendrasKM,
          lastUseTime:data.lastUseTime,
          isAlive: data.isAlive,
          id: getNewId(),
        }
        //local storage
        const newData = [...paspirtukai, paspirtukas];
        localStorage.setItem('paspirtukai',JSON.stringify(newData))
        //
        setPaspirtukai(paspirtukai=> [...paspirtukai, paspirtukas]);
      
      

    }
    const deleteA=(id)=>{
      //local storage
      const newData = paspirtukai.filter(a=>a.id!== id);
      localStorage.setItem('paspirtukai',JSON.stringify(newData))
      //
      setPaspirtukai(paspirtukai=> paspirtukai.filter(a=>a.id!== id));

    }
    const cancel =()=>{
      setModal(0)
    }
    const show =(id)=>{
      setModal(id)
    }
    const getPaspirtukas =()=>{
      return paspirtukai.filter(a=>a.id === modal)[0]
    }
    const edit =(data)=>{
   
        //local storage
        const zooCopy= [...paspirtukai]
        zooCopy.forEach((z, i)=>{
          if(z.id === modal){
              // zooCopy[i].registrationCode= data.registrationCode;
              zooCopy[i].bendrasKM=(data.bendrasKM + +data.km)
              zooCopy[i].lastUseTime=data.lastUseTime
              zooCopy[i].isAlive=data.isAlive

          }
        });
        localStorage.setItem('paspirtukai',JSON.stringify(zooCopy))
       
        //
        setPaspirtukai(z1=>{
          zooCopy.forEach((z, i)=>{
          if(z.id === modal){
              // z1[i].registrationCode= data.registrationCode;
              z1[i].bendrasKM=(data.bendrasKM + +data.km)
              z1[i].isAlive=data.isAlive
              z1[i].lastUseTime=data.lastUseTime


          }})
          return z1
        })
        cancel();
    }

    const sortinimas=()=>{
      console.log(sort);
      setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> b.bendrasKM - a.bendrasKM))
      console.log(paspirtukai);
    }
    const sortinimas1=()=>{
      console.log(sort);
      setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> b.lastUseTime.localeCompare(a.lastUseTime)))
      console.log(paspirtukai);
    }
    const sortinimas2=()=>{
      console.log(sort);
      setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> a.lastUseTime.localeCompare(b.lastUseTime)))
      console.log(paspirtukai);
    }



  return (
    <>
    <div className="app">
      <div className='top'>

      <h1>CRUD</h1>
      </div>
      <div className='main'>

      <div className='content'>
        <Create create={create}></Create>
        <Read show={show}paspirtukai={paspirtukai} deleteA={deleteA}></Read>

      {/* <Tablet zoo={zoo}></Tablet> */}
      </div>
      </div>
      {/* <button onClick={sortinimas}>pagal KM</button>
      <button onClick={sortinimas1}>pagal data</button>
    <button onClick={sortinimas2}>pagal data</button> */}
      {
        modal? <Edit edit={edit} paspirtukas={getPaspirtukas()} show={show}cancel={cancel}></Edit>: null
      }
    </div>
      <div className='bottom'></div>
      </>
    
  );
}

export default App;
