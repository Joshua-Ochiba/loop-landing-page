import React from 'react'
import logo from '../Images/logo.svg'
import iconClose from '../Images/icon-close.svg' 
import iconHamburger from '../Images/icon-hamburger.svg'

const Header = () => {
  const showNav = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navBar = document.querySelector('nav');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
      navBar.classList.toggle('open');
      menuBtn.classList.toggle('rotate');
      body.classList.toggle('menu-open');
    })
  }

  return (
    <>
       <header className='header'>
          <div className='logo'>
            <img src={logo} alt='LoopStudios Logo'/>
          </div>

          <div className='nav-wrapper'>
             <nav>
            <div className='nav-logo'><img src={logo} alt='LoopStudios Logo'/></div>
            <ul>
                
                <li><button> About </button></li>
                <li><button> Careers </button></li>
                <li><button> Events </button></li>
                <li><button> Products </button></li>
                <li><button> Support </button></li>
            </ul>
          </nav>
          </div>



                      

          <div className='menu-btn' onClick={() => showNav()}>
            {/*<img src={iconHamburger} alt='LoopStudios Logo'/>*/}
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
          </div>
       </header>
    </>
  )
}

export default Header