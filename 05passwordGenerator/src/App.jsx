import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  //useref hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}[]`~"

    for (let i =1; i <= length; i++) {
      let char = Math.floor (Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  },[password])


  return (
    
    <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h3 className='text-white text-center my-7'>Password Generator</h3>
      
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
    type="text"
    value={password} 
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    ref={passwordRef}
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick= {copyPasswordToClipboard}>copy</button>
    {copied && <span className='text-gray-400 ml-2'>Copied!</span>}
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange = {(e) => {setLenght(e.target.value)}}
         />
         <lebel>Length:{length}</lebel>     
      </div>
      <div className='flex item-center gap-x-1'>
        <input type="checkbox"
        defaultChecked = {numberAllowed}
        id= "numberInput"
        onChange={() =>{
          setNumberAllowed ((prev) => !prev)
        }}
        
        />
        <lebel htmlFor="numberInput">Number</lebel>
      </div>
      <div>
        <div className='flex item-center gap-x-1'>
        <input type="checkbox"
        defaultChecked = {numberAllowed}
        id= "numberInput"
        onChange={() =>{
          setNumberAllowed ((prev) => !prev)
        }}
        
        />
        <lebel htmlFor="numberInput">Characters</lebel>
      </div>
      </div>
    </div>

  </div>
   
  )
}

export default App
