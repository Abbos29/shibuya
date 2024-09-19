import s from './Plans.module.scss';

const Plans = () => {
    return (
        <section className={s.plans}>
            <div className="container">
                <h2 className={s.title}>Our plans are simple — Haru`s world domination.</h2>

                <div className={s.grid}>
                    <div className={`${s.item} ${s.item_1}`}>
                        <h3>$SHIBUYA</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>

                    <div className={`${s.item} ${s.item_2}`}>
                        <h3>Brand building</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>

                    <div className={`${s.item} ${s.item_3}`}>
                        <h3>INCUBATOR</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>

                    <div className={`${s.item} ${s.item_4}`}>
                        <h3>cAPITAL</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>

                    <div className={`${s.item} ${s.item_5}`}>
                        <h3>collection</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>

                <div className={s.inner}>
                    <h4>私たちの計画は単純です</h4>
                    <h4>ハルの世界征服。</h4>
                </div>
            </div>
        </section>
    )
}

export default Plans