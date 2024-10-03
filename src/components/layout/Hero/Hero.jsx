import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
        <div className="container">
            <div className={s.wrap}>
                <h1>SHIBUYA</h1>
                <p>Shibuya Station is the pixel art collection, inspired by Japanese and anime culture.  Inscribed on Bitcoin FOREVER.</p>
                <img src="/hero-img.png" alt="img" />
                <div className={s.bottom}>
                  <h3>渋谷駅</h3>
                  <h3>のドット絵コレクション</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero