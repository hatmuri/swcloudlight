import './Header.css';
import menu from './menu.png';

const Header= () => {
    return (
    <div className='blind'>
        <div className='menu'>
            <p>색채, 빛을 일으키다.</p>
            <img src={menu} alt="menu" />
        </div>
    </div>
    );
}

export default Header;