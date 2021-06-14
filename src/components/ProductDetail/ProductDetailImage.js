import React, { useState } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';

import Container from '../Base/Container';

SwiperCore.use([Thumbs]);

const ProductDetailImage = ({ containerType, imageData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product-image">
            <Container type={containerType}>
                <Swiper
                    centeredSlides={true}
                    thumbs={{ swiper: thumbsSwiper }}
                >
                    {imageData.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={process.env.PUBLIC_URL + img}
                                alt="Product image"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesVisibility
                    watchSlidesProgress
                    className="swiper-prods"
                >
                    {imageData.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={process.env.PUBLIC_URL + img}
                                alt="Product image"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    )
}

export default ProductDetailImage
