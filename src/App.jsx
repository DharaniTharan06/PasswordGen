import { useState,useCallback,useEffect } from 'react'
import "./App.css"
function App() {

  const [length, setLength] = useState(8);
  const [usenum,setUsenum] = useState(false);
  const [usechar,setUsechar] = useState(false);
  const [pass,setPass] = useState("");

  const passgen = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(usenum) str += "0123456789"; 
    if(usechar) str+= "!@#$%^&*+-_=(){}[]~";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPass(pass);
  },[length,usenum,usechar,setPass]);

  useEffect(()=>{
    passgen();
  },[length,usenum,usechar,setPass]);

  return (
    <div className='w-full max-w-120 mx-auto shadow-md rounded-lg px-4 py-3 my-8' style={{backgroundColor:"grey"}}>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={pass} className='outline-none w-full px-3 py-1 bg-white' placeholder='Password' readOnly></input>
        <button className='outline-none px-3 py-0.5 shrink-0' style={{backgroundColor: "lightskyblue"}}>Copy</button>
      </div>
      <div className='flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/><label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' className='cursor-pointer' defaultChecked={usenum} onChange={(e)=>{setUsenum((prev)=>!prev)}}/><label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' className='cursor-pointer' defaultChecked={usechar} onChange={(e)=>{setUsechar((prev)=>!prev)}}/><label htmlFor='characterInput'>Special Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
