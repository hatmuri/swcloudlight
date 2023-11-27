import './Header.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import brand from './brand.png';
import {CSSTransition} from 'react-transition-group';
import Info from './Info';
import Place from './Place';
import Crew from './Crew';
import GoodsPage from '../Goodspage';
import Guestbook from '../Guestbook';


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
                <img src={brand} alt="brand" />
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
                        <a href="#">전시 안내</a>
                    </li>
                    <li className='info_club'>
                        <a href="#">동아리 안내</a>
                    </li>
                    <li className='goods'>
                        <a href="#">굿즈 소개</a>
                    </li>
                    <li className='recommend'>
                        <a href="#">작품 추천</a>
                    </li>
                    <li className='guest'>
                        <a href="#">방명록</a>
                    </li>
                    </ul>
                </div>
                </CSSTransition>
            
            </nav>
        
    </div>
    );
}

export default Header;