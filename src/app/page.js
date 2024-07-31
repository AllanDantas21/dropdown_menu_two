'use client';
import './style.css'
import { useState } from 'react';

export default function Home() {
  const [ isActive, setIsActive ] = useState(true);
 
  console.log(isActive)

  return (
    <div>
      <div className="menu">
        <button onClick={() => setIsActive(!isActive)} className='menu-button'>
          <span>Menu</span>
          <img
            src="../../public/hamburg.png"
            alt='menu'/>
        </button>

      { isActive && ( <nav>
          <ul>
            <li>allan</li>
            <li>lana</li>
            <li>lunaa</li>
          </ul>
        </nav>)}
      </div>
    </div>
  );
}
