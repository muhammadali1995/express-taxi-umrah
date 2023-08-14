'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import posts from '../data/review';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { AiTwotoneStar } from 'react-icons/ai'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ReviewSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={true}
            pagination={{
                clickable: true
            }}
            className="mySwiper"
            breakpoints={{

                640: {
                    width: 640,
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                    spaceBetween: 30,

                },
                1280: {
                    width: 1280,
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            }}

        >
            {
                posts.map((post: any, i) => {
                    return (
                        <SwiperSlide key={post.id} className='px-2.5 py-5 border border-gray-300 rounded-lg shadow-sm bg-gray-900'>
                            <div className="h-60 flex flex-col items-center">
                                <div className="flex space-x-4 text-sm text-gray-500 justify-center">
                                    <Image src={post.imgAuthorUrl} alt={post.author} priority={false} width={100} height={100} className="h-[60px] w-[60px] rounded-full" />
                                    <div>
                                        <h3 className="font-medium text-yellow-500">{post.author}</h3>
                                        <p>
                                            <time dateTime={post.date}>{post.date}</time>
                                        </p>

                                        <div className="mt-4 flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => {
                                                return <AiTwotoneStar
                                                    key={rating}
                                                    className={classNames(
                                                        post.rating > rating ? 'text-yellow-500 bg-gray-900' : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            })}
                                        </div>
                                        <p className="sr-only">{post.rating} out of 5 stars</p>


                                    </div>

                                </div>
                                <div
                                    className="prose prose-sm mt-4 max-w-none text-gray-500 px-2.5"
                                    dangerouslySetInnerHTML={{ __html: post.content.length > 150 ? post.content.slice(0, 150) + '...' : post.content }}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper >
    )
}

