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
    const [paspirtukaiCopy, setPaspirtukaiCopy] = useState([]);
    const [modal, setModal] = useState(0)
    const [sort, setSort]= useState([])
    const [filter, setFilter] = useState('')
    const [toggle, setToggle]= useState('default')
    const [toggle2, setToggle2]= useState('default')
    


    useEffect(()=>{
      let data = localStorage.getItem('paspirtukai');
      if (data===null){
        localStorage.setItem('paspirtukai',JSON.stringify([]))
        setPaspirtukai([]);
        localStorage.setItem('paspirtukaiCopy',JSON.stringify([]))
        setPaspirtukaiCopy([]);
      }else{
        setPaspirtukai(JSON.parse(data))
        setPaspirtukaiCopy(JSON.parse(data))
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
        localStorage.setItem('paspirtukaiCopy',JSON.stringify(newData))
        //
        setPaspirtukai(paspirtukai=> [...paspirtukai, paspirtukas]);
        setPaspirtukaiCopy(paspirtukai=> [...paspirtukai, paspirtukas]);
      
      

    }
    const deleteA=(id)=>{
      //local storage
      const newData = paspirtukai.filter(a=>a.id!== id);
      localStorage.setItem('paspirtukai',JSON.stringify(newData))
      localStorage.setItem('paspirtukaiCopy',JSON.stringify(newData))
      //
      setPaspirtukai(paspirtukai=> paspirtukai.filter(a=>a.id!== id));
      setPaspirtukaiCopy(paspirtukai=> paspirtukai.filter(a=>a.id!== id));
      
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
        localStorage.setItem('paspirtukaiCopy',JSON.stringify(zooCopy))
       
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
        setPaspirtukaiCopy(z1=>{
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
    const handleToggle=()=>{
      let copy = [...paspirtukaiCopy]

      if(toggle==='default'){
        setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> b.lastUseTime.localeCompare(a.lastUseTime)))
        setToggle('ASD')
      }
      else if( toggle==='ASD'){
        setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> a.lastUseTime.localeCompare(b.lastUseTime)))

        setToggle('DSC')
        
      }
      else if( toggle==='DSC'){
        setPaspirtukai(copy)

        setToggle('default')
        
      }
    
      }
    const handleToggle2=()=>{
      let copy = [...paspirtukaiCopy]
      if(toggle2==='default'){
        setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> b.bendrasKM - a.bendrasKM))
        setToggle2('ASD')
      }
      else if( toggle2==='ASD'){
        setPaspirtukai(paspirtukai=>[...paspirtukai].sort((a,b)=> a.bendrasKM - b.bendrasKM))

        setToggle2('DSC')
        
      }
      else if( toggle2==='DSC'){
        setPaspirtukai(copy)

        setToggle2('default')
        
      }
      


      
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

      <h1>KOLT</h1>
      
      </div>
      <div className='main'>

      <div className='content'>
        <div className='main-top' >

        <Create create={create}></Create>
        
       
        <input id="filter"
          name="filter"
          placeholder='Search'
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
          />
      
          </div>
        <Read filter={filter} handleToggle={handleToggle}handleToggle2={handleToggle2} setFilter={setFilter} show={show}paspirtukai={paspirtukai} deleteA={deleteA}></Read>

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
