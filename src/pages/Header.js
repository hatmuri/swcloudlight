import './Header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import brand from './brand.png';
import {CSSTransition} from 'react-transition-group';
//import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';



const Header= () => {
    const navigate = useNavigate();

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
        setIsMenuClicked(!isMenuClicked)
    }

    return (
    <div className='blind'>
        <nav>
            <div className='brand'>
                <img src={brand} alt="brand" onClick={() => { navigate("/Mainpage");}}/>
            </div>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
                <CSSTransition
                in={isMenuClicked}
                timeout={300}
                unmountOnExit
                classNames="menu"
                >
                <div className={`menu ${menu_class}`}>
                    <ul className="nav-links">
                    <li className='info_exhibition'>
                        <a onClick={() => { navigate("/Info"); updateMenu(); }}>전시 안내</a>
                    </li>
                    <li className='info_crew'>
                        <a onClick={() => { navigate("/Crew"); updateMenu(); }}>동아리 소개</a>
                    </li>
                    <li className='goods'>
                        <a onClick={() => { navigate("/GoodsPage"); updateMenu(); }}>굿즈 소개</a>
                    </li>
                    <li className='recommend'>
                        <a onClick={() => { navigate("/recommend"); updateMenu(); }}>시 추천</a>
                    </li>
                    <li className='guestbook'>
                        <a onClick={() => { navigate("/Guestbook-read"); updateMenu(); }}>방명록</a>
                    </li>
                    </ul>
                </div>
                </CSSTransition>
            
        </nav>
        
    </div>
    );
}

export default Header;