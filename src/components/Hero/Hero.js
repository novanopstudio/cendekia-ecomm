import React, { useState } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Autoplay } from 'swiper/core';

import Container from '../Base/Container';

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const Hero = ({ containerType }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="hero">
            <Container type={containerType}>
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        "delay": 6500,
                        "disableOnInteraction": false
                    }}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    <SwiperSlide>
                        <div className="hero-image"><img src="/assets/images/hero/hero1.jpg" alt="" /></div>
                        <h1 className="hero-title">5 Ingredients + <br />1 Protein</h1>
                        <p className="hero-desc">You choose various recipe</p>
                        <Button className="btn-hero">
                            <Link href="#">
                                <a>Order Now</a>
                            </Link>
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-image"><img src="/assets/images/hero/hero2.jpg" alt="" /></div>
                        <h1 className="hero-title">Free Home<br />Delivery in 24h</h1>
                        <p className="hero-desc">Order Today and Receive your package<br /> tomorrow by 2.00 PM</p>
                        <Button className="btn-hero">
                            <Link href="#">
                                <a>Discover Now</a>
                            </Link>
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-image"><img src="/assets/images/hero/hero3.jpg" alt="" /></div>
                        <h1 className="hero-title">BEST SELLER<br />Organic Honey</h1>
                        <p className="hero-desc">Best organic honey</p>
                        <Button className="btn-hero">
                            <Link href="#">
                                <a>Discover Now</a>
                            </Link>
                        </Button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-image"><img src="/assets/images/hero/hero4.jpg" alt="" /></div>
                        <h1 className="hero-title">NEW ITEM<br />Organic Rice</h1>
                        <p className="hero-desc">Red, Brown, White Rice</p>
                        <Button className="btn-hero">
                            <Link href="#">
                                <a>Discover Now</a>
                            </Link>
                        </Button>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesVisibility
                    watchSlidesProgress
                    className="swiper-thumbs"
                >
                    <SwiperSlide><img src="/assets/images/hero/thumb1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/assets/images/hero/thumb2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/assets/images/hero/thumb3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/assets/images/hero/thumb4.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Hero
