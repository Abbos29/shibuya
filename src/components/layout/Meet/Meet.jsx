import s from './Meet.module.scss';

const Meet = () => {
    return (
        <>
            <section className={s.meet}>
                <div className="container">
                    <div className={s.wrap}>
                        <div className={s.content}>
                            <img src="/meet-1.png" alt="img" />
                            <p>Haru is a big anime fan. He works in an office during the day, but spends all his free time watching anime, reading manga, and some time hanging out with his friends! Want to be a Haru’s friend?</p>
                        </div>

                        <div className={s.box}>
                            <h2>meet haru</h2>
                            <p>Haru is one of the main characters of our brand, being the first concept of the collection we created in May 2023.</p>
                            {/* <img src="/meet-2.png" alt="img" /> */}
                            <img src="/meet-2.png" alt="img" />
                            <img src="/meet-china.svg" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Meet