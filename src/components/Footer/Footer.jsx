import './Footer.css';
import facebook from '../../images/Facebook.svg';
import vk from '../../images/VK Circled.svg';
import dota from '../../images/Dota 2.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__contacts'>
        <span className='footer__logo'>ФОТОКОМП</span>
        <span className='footer__phone'>+7 963 819-53-43</span>
        <span className='footer__email'>dushman888@mail.ru</span>
        <div className='footer__social-links'>
          <img className='footer__social-image button' src={facebook} alt='facebook logo' />
          <img className='footer__social-image button' src={vk} alt='vk logo' />
          <img className='footer__social-image button' src={dota} alt='dota 2 logo' />
        </div>
      </div>
      <div className='footer__map'>
        <h3 className='footer__map-title'>Мы на карте</h3>
      </div>
    </footer>
  );
}

export default Footer;
