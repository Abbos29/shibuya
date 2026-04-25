
import s from './Team.module.scss';

const Team = () => {
    return (
        <section data-reveal className={s.team}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.box}>
                        <h2>Core team:</h2>
                        
                        <img className={s.pretitle_img} src="/team-icon-2.svg" alt="icon" loading="lazy" decoding="async" />


                        <div className={s.grid}>
                            <div className={`${s.item} ${s.item_1}`} data-reveal>
                                <h3>Alex (founder)</h3>
                            </div>
                            <div className={`${s.item} ${s.item_2}`} data-reveal>
                                <h3>Nady PDRG (Artist)</h3>
                            </div>
                            <div className={`${s.item} ${s.item_3}`} data-reveal>
                                <h3>Mani (Community Lead)</h3>
                            </div>
                            <div className={`${s.item} ${s.item_4}`} data-reveal>
                                <h3>Kisa Miyamura (Creative Director)</h3>
                            </div>
                        </div>
                    </div>

                    <div className={s.icon}>
                        <img src="/team-icon.svg" alt="icon" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team