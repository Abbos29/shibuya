import s from './Album.module.scss';

// import albumData from './AlbumData';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper/modules';

const Album = () => {
    return (
        <section className={s.album}>
            <div className={s.wrap}>
                <Swiper
                    slidesPerView={0.65}
                    spaceBetween={5}
                    centeredSlides={true}
                    modules={[FreeMode, Autoplay]}
                    className={s.album_swiper}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={25000}
                    loop={true}
                    allowTouchMove={false}

                // breakpoints={{
                //     1024: {
                //         slidesPerView: 5.5,
                //         spaceBetween: 10

                //     },
                //     768: {
                //         slidesPerView: 4.5,
                //     },
                //     480: {
                //         slidesPerView: 3.8,
                //     },
                // }}

                >
                    {/* {albumData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className={s.album_img} src={item.imageUrl} alt={item.title} />
                        </SwiperSlide>
                    ))} */}

                    <SwiperSlide>
                        <img className={s.album_img} src="/carousel-1.png" alt="carousel" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={s.album_img} src="/carousel-1.png" alt="carousel" />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={0.7}
                    spaceBetween={5}
                    modules={[FreeMode, Autoplay]}
                    className={s.album_swiper}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}

                    speed={25000}
                    loop={true}
                    allowTouchMove={false}

                // breakpoints={{
                //     1024: {
                //         slidesPerView: 5.5,
                //         spaceBetween: 10
                //     },
                //     768: {
                //         slidesPerView: 4.5,
                //     },
                //     480: {
                //         slidesPerView: 3.8,
                //     },
                // }}
                >
                    {/* {albumData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className={s.album_img} src={item.imageUrl} alt={item.title} />
                        </SwiperSlide>
                    ))} */}


                    <SwiperSlide>
                        <img className={s.album_img} src="/carousel-2.png" alt="carousel" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={s.album_img} src="/carousel-2.png" alt="carousel" />
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
}

export default Album;
