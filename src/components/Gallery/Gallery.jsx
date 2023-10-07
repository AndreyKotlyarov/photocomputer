import './Gallery.css';
import image1 from '../../images/1.jpeg';
import image2 from '../../images/2.jpeg';
import image3 from '../../images/3.jpeg';
import image4 from '../../images/4.jpeg';
import image5 from '../../images/5.jpeg';
import image6 from '../../images/6.jpeg';

function Gallery() {
  return (
    <section className='gallery'>
      <ul className='gallery__list'>
        <li className='gallery__card'>
          <img className='gallery__image' src={image1} alt='' />
          <span className='gallery__counter'>01</span>
          <div className='gallery__text-container'>
            <span className='gallery__image-title'>тут парень работал</span>
            <span className='gallery__image-subtitle'>пройти в очередь</span>
          </div>
        </li>
        <li className='gallery__card'>
          <img className='gallery__image' src={image2} alt='' />
          <span className='gallery__counter'>02</span>
          <div className='gallery__text-container'>
            <span className='gallery__image-title'>тут парень работал</span>
            <span className='gallery__image-subtitle'>пройти в очередь</span>
          </div>
        </li>
        <li className='gallery__card'>
          <img className='gallery__image' src={image3} alt='' />
          <span className='gallery__counter'>03</span>
          <div className='gallery__text-container'>
            <span className='gallery__image-title'>тут парень работал</span>
            <span className='gallery__image-subtitle'>пройти в очередь</span>
          </div>
        </li>
        <li className='gallery__card'>
          <img className='gallery__image' src={image4} alt='' />
          <span className='gallery__counter'>04</span>
          <div className='gallery__text-container'>
            <span className='gallery__image-title'>тут девушка работала</span>
            <span className='gallery__image-subtitle'>я позже зайду</span>
          </div>
        </li>
        <li className='gallery__card'>
          <img className='gallery__image' src={image5} alt='' />
          <span className='gallery__counter'>05</span>
          <div className='gallery__text-container'>
            <span className='gallery__image-title'>тут никто не работал</span>
            <span className='gallery__image-subtitle'>я позже зайду</span>
          </div>
        </li>
        <li className='gallery__card'>
          <img className='gallery__image' src={image6} alt='' />
          <span className='gallery__counter'>06</span>
          <div className='gallery__text-container'>
            <span className='gallery__image-title'>тут кто-то работал</span>
            <span className='gallery__image-subtitle'>пройти в очередь</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Gallery;
