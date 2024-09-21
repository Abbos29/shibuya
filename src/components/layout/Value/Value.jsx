import React, { useState } from 'react';
import s from './Value.module.scss';

const Value = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(0);
    };

    return (
        <section className={s.value}>
            <div className="container">
                <div className={`${s.wrap} ${activeIndex !== null ? s[`hover${activeIndex}`] : ''}`}>
                    <div
                        className={s.card}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={s.box}>
                            <h2>investment</h2>
                            <p>アドバイスする</p>
                            <h3>I</h3>
                        </div>
                    </div>

                    <div
                        className={s.card}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={s.box}>
                            <h2>advicing</h2>
                            <p>アドバイスする</p>
                            <h3>A</h3>
                        </div>
                    </div>

                    <div
                        className={s.card}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={s.box}>
                            <h2>marketing support</h2>
                            <p>マーケティングサポート</p>
                            <h3>M</h3>
                        </div>
                    </div>

                    <div
                        className={s.card}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={s.box}>
                            <h2>community activation</h2>
                            <p>コミュニティの活性化</p>
                            <h3>C</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value;
