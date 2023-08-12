import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import posts from '../data/review';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const carImages = [
    { src: '/images/car-carousel-1.jpeg' },
    { src: '/images/car-carousel-2.jpeg' },
    { src: '/images/car-carousel-3.jpeg' },
    { src: '/images/car-carousel-4.jpeg' },
    { src: '/images/car-carousel-5.jpeg' },
    { src: '/images/car-carousel-6.jpeg' },
    { src: '/images/car-carousel-7.jpeg' },
    { src: '/images/car-carousel-8.jpeg' },
    { src: '/images/car-carousel-9.jpeg' },
    { src: '/images/car-carousel-10.jpeg' },
]

export default function CarCarousel() {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={40}
            loop={true}
            navigation={false}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
                0: {
                    width: 0,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                    navigation: true,
                    pagination: false
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                },
                1280: {
                    width: 1280,
                    slidesPerView: 4,
                }
            }}
        >
            {carImages.map((obj: any, i) => {
                return (
                    <SwiperSlide key={i} className='w-full h-80'>
                        <Image src={obj.src} alt='car image' width={280} height={320} className='h-80 lg:h-96 w-full' />
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}
