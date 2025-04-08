import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(()=>{

        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) str+= "0123456789";
        if (charAllowed) str+="()*&^%$#@!_-{}~[]"
        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random()*str.length+1);
            pass += str.charAt(index);
        }
        setPassword(pass);

    }, [length,numAllowed,charAllowed,setPassword])

    useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

    return(
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-300 bg-gray-700 py-0.5 pb-1">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
                type="text"
                value={password} 
                className='outline-none w-full py-1 px-3 bg-amber-50 text-blue-700'
                placeholder='Password'
                readOnly
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input 
                    type="range"
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked = {numAllowed}
                    id='numInput'
                    onChange={()=>{
                        setNumAllowed ((prev)=> !prev);
                    }}
                />
                <label htmlFor="numInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    defaultChecked = {charAllowed}
                    id='charInput'
                    onChange={()=>{
                        setCharAllowed ((prev)=> !prev);
                    }}
                />
                <label htmlFor="charInput">Characters</label>
            </div>
        </div>
      </div>
    </>)
}

export default App
