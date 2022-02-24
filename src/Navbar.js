import React,{useState} from 'react'
import { FaBars } from "react-icons/fa"
const Navbar = () => {
    const [show, setShow] = useState(false)
  return (
    <nav className='sticky'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1>sunnyside</h1>
                    <button className='nav-toggle' onClick={()=>setShow(!show)}>
                        <FaBars/>
                    </button>
                </div>
                    <div className={show ? 'list-container show-container' : 'list-container'}>
                    <ul className='list'>
                         <li>about</li>
                         <li>project</li>
                         <li>contact</li>
                         <li>services</li>
                    </ul>
                </div>
                
            </div>
        </nav>
  )
}

export default Navbar