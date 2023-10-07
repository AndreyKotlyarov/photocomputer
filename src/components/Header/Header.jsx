import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <span className='header__logo'>Фотокомп</span>
      <nav className='header__navigation'>
        <ul className='header__links-list'>
          <li className='header__link-element'>
            <Link className='header__link link'>О нас</Link>
          </li>
          <li className='header__link-element'>
            <Link className='header__link link'>Контакты</Link>
          </li>
          <li className='header__link-element'>
            <Link className='header__link link'>Услуги</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
