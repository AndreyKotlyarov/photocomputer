import './About.css';

function About() {
  return (
    <section className='about'>
      <article className='about__article'>
        <h3 className='about__tile'>О студии</h3>
        <p className='about__text'>
          Наши клиенты как правило не правы. В первую очередь они не правы в том, что обратились к нам. Но это их право и мы уважаем его. Именно
          поэтому мы даём им право уйти подальше и не возвращаться - так будет лучше для всех нас. Проблема этого текста в том, что его никто не
          читает. Бóльшая проблема - это если данный текст таки кто-то прочтёт. Но у нас так не принято. Спасибо, что выбрали ФотоКомп!
        </p>
        <button className='about__button button'>Оформить заказик</button>
      </article>
      <div className='about__logo-container'>
        <span className='about__logo'>ФОТОКОМП</span>
      </div>
    </section>
  );
}

export default About;
