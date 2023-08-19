'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ServicePriceForCar from '@/app/lib/data/servicePrice'
import { GiCarSeat, GiBoatPropeller } from 'react-icons/gi'
import Navbar from '@/app/components/Navbar'

export default function Pricing() {
    return (
        <div className='bg-white'>
            <Navbar textColor={'#fff'} />
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg
                            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div className="relative mx-auto lg:mx-0 px-6 py-20 sm:py-32 lg:px-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">

                                <h1 className="text-white uppercase text-4xl font-bold tracking-tight lg:text-gray-900 sm:text-6xl">
                                    Narxlar
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-white lg:text-gray-600">
                                    Express Taksi Xizmati | Eng Yaxshi Haj/Umra Taksi Xizmati {'>'} NARXLAR
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href="#"
                                        className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                                    >
                                        Buyurma qilish
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-sm font-semibold leading-6 text-white lg:text-gray-900"
                                    >
                                        Mashinalar <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 blur-xs lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <Image
                        className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="/images/prising-top.jpg"
                        sizes="(max-width: 100%)"
                        fill
                        alt="makka taxi express"
                    />
                </div>
            </div>

            <div className="mx-w-7xl mx-auto my-10">
                <h1 className="text-3xl lg:text-[44px] text-center mb-2">Narxlarni Xisoblang</h1>
                <p className="bg-gray-900 text-yellow-500 text-center lg:text-2xl py-2 max-w-7xl mx-auto w-full">
                    Aeroportda olib ketish oldindan to&lsquo;lanadi.
                </p>
            </div>

            <div className="max-w-7xl mx-auto my-10">
                {ServicePriceForCar.map((item: any, index: number) => {
                    return <div key={index}>
                        <div className='flex py-5'>
                            <div className="w-full lg:flex-1">
                                <h1 className="text-3xl lg:text-[44px] mb-5">{item.model}</h1>
                                <ul className="pl-10">
                                    {item.directions.map((direction: any, index: number) => {
                                        return <li key={index} className="list-disc text-gray-600">
                                            <span className="font-bold">{direction.from}</span>
                                            <span className="mx-1">{direction.to !== '' && 'to'}</span>
                                            <span className="font-bold">{direction.to} </span>
                                            <span>{direction.price}SR</span>
                                        </li>
                                    })}
                                </ul>
                                <div className="flex w-1/2 mt-5 gap-x-5">
                                    <div className="flex items-center">
                                        <GiCarSeat className='w-6 h-5 text-gray-700' />
                                        <span className="text-xl ml-2 text-gray-700">{item.numOfSeats} seats</span>
                                    </div>
                                    {
                                        item.ac && <div className="flex items-center">
                                            <GiBoatPropeller className='w-6 h-6 text-gray-700' />
                                            <span className="text-xl ml-2 text-gray-700">AC</span>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="w-full lg:flex-1 relative flex items-center my-10 lg:my-0">
                                <Image src={item.imgSrc} alt="car image" width={512} height={512} className="mx-auto" />
                            </div>
                        </div>
                        <hr className='border-y border-gray-900' />
                    </div>

                })}
            </div>
        </div>
    )
}
