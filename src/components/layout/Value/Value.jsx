import React, { useEffect, useState } from 'react';
import s from './Value.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay, Navigation, Pagination } from 'swiper/modules';

import valueData from './ValueData';
import Button from '../../ui/Button/Button';

const Value = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (index) => {
        if (isMobile) {
            setActiveIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (isMobile) {
            setActiveIndex(0);
        }
    };

    return (
        <section className={s.value}>
            <div className="container">
                <div className={`${s.wrap} ${activeIndex !== null ? s[`hover${activeIndex}`] : ''}`}>
                    {valueData.map((item) => (
                        <div
                            key={item.id}
                            className={s.card}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={s.box}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <h3>{item.letter}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={s.content}>
                    <h3>Our value:</h3>

                    <div className={s.content_box}>
                        <Button text="Submit your project" variant="solid" />
                        <h4>私たちの価値観</h4>
                    </div>
                </div>
            </div>


            <div className={s.slider}>
                <Swiper
                    className={s.value_swiper}
                    slidesPerView={1.4}
                    spaceBetween={5}
                    centeredSlides={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    // speed={5000}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: `.${s.swiperButtonNext}`,
                        prevEl: `.${s.swiperButtonPrev}`,
                    }}
                >
                    {valueData.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className={s.card}
                                style={{ backgroundImage: `url(/value-${index + 1}.jpg)` }}
                            >
                                <div className={s.box}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className={s.swiper_btns}>
                        <div className={s.swiperButtonPrev}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.56741 11.999H24.2859V15.4276H9.56741L15.2124 21.0725L12.788 23.4969L3.00439 13.7133L12.788 3.92969L15.2124 6.35405L9.56741 11.999Z" fill="#AEAEAE" />
                            </svg>
                        </div>

                        <div className={s.swiperButtonNext}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.9748 15.4915H3.62769V11.9326H17.9748L12.4722 6.07314L14.8354 3.55664L24.3722 13.7121L14.8354 23.8675L12.4722 21.351L17.9748 15.4915V15.4915Z" fill="#AEAEAE" />
                            </svg>
                        </div>
                    </div>
                </Swiper>

            </div>

        </section>
    );
};

export default Value;
