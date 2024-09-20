import s from './Incubator.module.scss';

import IncubatorData from './IncubatorData';

const Incubator = () => {
  return (
    <section className={s.incubator}>
        <div className="container">
            <h1 className={s.title}>Incubator</h1>
            <p className={s.text}>If you have a great idea, working with Shibuya Station can help you take it to the next level. We will help you bridge the gap between your idea and its successful implementation.</p>

            <div className={s.wrap}>
                <div className={s.imgs}>
                    <img src="/incubator-main.png" alt="img" />
                </div>

                <div className={s.list}>
                    {IncubatorData.map((item) => (
                        <div className={s.card} key={item.id}>
                            <div className={s.box}>
                                <h3>{item.name}</h3>
                                <h4>{item.japanese}</h4>
                                <p>{item.description}</p>
                            </div>

                            <img src={item.image} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Incubator