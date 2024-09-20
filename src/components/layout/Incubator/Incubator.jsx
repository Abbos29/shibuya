import s from './Incubator.module.scss';


const Incubator = () => {
  return (
    <section className={s.incubator}>
        <div className="container">
            <h1 className={s.title}>Incubator</h1>
            <p className={s.text}>If you have a great idea, working with Shibuya Station can help you take it to the next level. We will help you bridge the gap between your idea and its successful implementation.</p>
        </div>
    </section>
  )
}

export default Incubator