import React from 'react'
import './style.css'
import logo from "../assets/logo.png"

export function NavBar() {
     return (
          <div className="container">
               <img src={logo} alt="Logo Los Borrachos" className='nav-logo'/>
               <div>
                    <ul>
                         <li className='item-menu'><a href=''>Sobre</a></li>
                         <li className='item-menu'><a href=''>Tintos</a></li>
                         <li className='item-menu'><a href=''>Brancos</a></li>
                         <li className='item-menu'><a href=''>Rosês</a></li>
                         <li className='item-menu'><a href=''>Espumantes</a></li>
                         <li className='item-menu btn-login'><a href=''>LOGIN</a></li>
                         
                    </ul>
               </div>
          </div>

     )
}

export default NavBar;