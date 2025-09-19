'use client'

import { useState } from 'react'

export default function Hamenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

return (
    <nav className="font-comfort">
    
    <div className ="mt-8 md:flex flex-row justify-evenly justify-center items-center">
        
        <img src="/minicomi.png" alt="minicomi logo" className ="w-40 place-self-center"/>
    
        {/* <ul className={'transition-all duration-500 ease-in-out hidden md:flex flex row justify-between text-3xl gap-8 opacity-100  translate-y-0'}> */}
        <ul className="hidden md:flex flex row justify-between text-2xl gap-8">
                    <li>
                        <a href="" className ="p-2">Home</a>
                    </li>

                    <li>
                        <a href="" className ="p-2">About</a>
                    </li>

                    <li>
                        <a href="" className ="p-2">Media</a>
                    </li>

                    <li>
                        <a href="" className ="p-2">Artist Showcase</a>
                    </li>

                    <li>
                        <a href="" className ="p-2">Artwork</a>
                    </li>

                    <li>
                        <a href="" className ="p-2">Blog</a>
                    </li>

                    <li>
                        <a href="" className ="p-2">Contact</a>
                    </li>
        </ul>
    </div>
        
    <button
        onClick={handleToggle}
        className={` 
          md:hidden p-2 rounded-md transition-colors duration-200 p-3 fixed right-4 bottom-4 z-50
          ${isOpen 
            ? 'bg-midblue-500 text-white' 
            : 'bg-midblue-500 text-white'
          }
        `}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          {/* Top line */}
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 6h18"
            className={`transition-transform duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[5px] -translate-x-1' : ''
            }`}
          />
          {/* Middle line */}
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 12h18"
            className={`transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Bottom line */}
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 18h18"
            className={`transition-transform duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[4px] -translate-x-1' : ''
            }`}
          />
        </svg>
    </button>  
    
        <div className={`
            md:hidden fixed top-0 w-screen h-full bg-iceblue-500 text-darkblue-500 place-content-center transition-all duration-500 ease-in-out
            ${isOpen 
            ? 'opacity-100  translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
            }
        `}> 
                <img src="/minicomi.png" alt="minicomi logo" className ="w-24 place-self-center"/>
                <ul className="text-2xl flex flex-col items-center translate-y-2 gap-2 ">
                    <li className ="p-4">
                        <a href="">Home</a>
                    </li>

                    <li className ="p-4">
                        <a href="">About</a>
                    </li>

                    <li className ="p-4">
                        <a href="">Media</a>
                    </li>

                    <li className ="p-4">
                        <a href="">Artist Showcase</a>
                    </li>

                    <li className ="p-4">
                        <a href="">Artwork</a>
                    </li>

                    <li className ="p-4">
                        <a href="">Blog</a>
                    </li>

                    <li className ="p-4">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
    </nav>
    )
}

