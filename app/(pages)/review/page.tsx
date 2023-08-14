'use client'
import Navbar from '@/app/components/Navbar'
import ReviewSlider from '@/app/components/ReviewSlider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'


export default function Price() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='bg-white'>
            <Navbar textColor='text-white' />
            <div className="relative bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg
                            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div className="relative mx-auto lg:mx-0 px-6 py-20 sm:py-32 lg:px-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-6xl">
                                    Makkah-Madina transport xizmatlari
                                </h1>
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-6xl">
                                    Reviews
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-white lg:text-gray-600">
                                    Induvidual Umra safarlari <br /> Airaportdan kutib olish{" "}
                                    <br /> Saudiya ziyoratlari
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 blur-xs lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <Image
                        className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="/images/review-top.jpg"
                        sizes="(max-width: 100%)"
                        fill
                        alt="makka taxi express"
                    />
                </div>
            </div>
            <div className="max-w-7xl px-5 md:px-10 lg:px-0 mx-auto my-10 lg:my-20">
                <ReviewSlider />
            </div>
        </div>
    )
}
