import { useCallback, useState } from 'react'
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

    return(
    <>
      
    </>)
}

export default App
