
import React, { useState } from 'react';
import './Mainpage.css';
import menu from './menu.png';
import main from './main.png';

const Mainpage = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else{
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
  }

  return (
    <div className='blind'>
      
        {/* <p>색체, 빛을 일으키다.</p> */}
        {/* <img src={menu} alt="menu" /> */}
        <div>
          <nav>
            <div className='burger-menu'>
              <div className={burger_class} onClick={updateMenu}></div>
              <div className={burger_class} onClick={updateMenu}></div>
              <div className={burger_class} onClick={updateMenu}></div>
            </div>
          </nav>
          <div className={menu_class}></div>
        </div>    
      
      <div className='blind2'>
        <p>제 2회 운빛 전시</p>
        <h1>색체,</h1> 
        <h1>빛을</h1>
        <h1>일으키다.</h1> 
        <div className='main'>
          <img src={main} alt="main" />
        </div>
      </div>
      
      
    </div>

  );
}

export default Mainpage;
