import s from './Capital.module.scss';

const Capital = () => {
  return (
    <section className={s.capital}>

        <div className={s.cards}>
            <img src="/capital-img-1.jpg" alt="img" />
            <img src="/capital-img-2.jpg" alt="img" />
            <img src="/capital-img-3.jpg" alt="img" />
            <img src="/capital-img-4.jpg" alt="img" />
        </div>

        <div className="container">
            <div className={s.wrap}>
                <h1>SHIBUYA capital</h1>

                <div className={s.inner}>
                    <h3>Shibuya Capital is venture capital arm of the Station.</h3>
                    <h4>ステーションのベンチャーキャピタル部門。</h4>
                </div>
                
                <img className={s.poster} src="/capital-poster.jpg" alt="img" />

                <h5>We empower builders with brilliant ideas, and we are ready to take them from A to Z</h5>
            </div>
        </div>
    </section>
  )
}

export default Capital