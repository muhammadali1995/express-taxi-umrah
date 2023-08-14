"use client"
import Navbar from '@/app/components/Navbar'
import Tab from '@/app/components/Tab'
import Tabs from '@/app/components/Tabs'
import Image from 'next/image'
import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { IoLogoUsd } from 'react-icons/io'

const people = [
    {
        name: 'Leonard Krasner',
        role: 'CEO & Founder',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Tim Cook',
        role: 'Head Of Services',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Kristin Watson',
        role: 'VP, Human Resource',
        imageUrl:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
]
const stats = [
    { name: 'Successfull Rides', value: '10000+' },
    { name: 'Global Customers', value: '5000+' },
    { name: 'Vehicles', value: '100+' },
    { name: 'Employees', value: '200+' },
]

export default function Page() {
    return (
        <div className='bg-white'>
            <Navbar textColor='text-white hover:text-yellow-500' />
            <div className="relative isolate overflow-hidden  ">
                <Image
                    src="/images/about.jpg"
                    alt="banner image"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="bg-[#00000080] px-7 py-32 lg:px-10 lg:min-h-[70vh] flex items-center">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Biz Haqimizda</h2>
                        <p className="mt-6  lg:text-xl leading-8 text-white">
                            Express Taksi Xizmati | Umra va Haj uchun Eng Yaxshi Taxsi Xizmati
                        </p>
                    </div>
                </div>

            </div>

            <div className="px-10">
                <div className="max-w-7xl mx-auto rounded-xl shadow-lg p-10 my-10 lg:my-20">
                    <p className='lg:text-xl mb-10 text-gray-800'>
                        At <span className='font-bold'>Express Taxi Service</span>, we are committed to providing <span className='font-bold'>safe, comfortable, and reliable transportation services</span> for pilgrims and visitors in Saudi Arabia. With over 10 years of experience in the industry, we have established ourselves as a trusted provider of<span className='font-bold'> taxi, van, and bus services for Umrah and Hajj pilgrimages</span>, airport transfers, city tours, and other transportation needs.
                    </p>
                    <p className="lg:text-xl mb-10 text-gray-800">
                        Our fleet of vehicles includes a <span className='font-bold'>variety of models and sizes </span>to accommodate different group sizes, preferences, and budgets. Whether you need a luxury car for a VIP client, a spacious van for a family or a group of friends, or a large bus for a group or a company, we have the right vehicle for you. All our vehicles are <span className='font-bold'> well-maintained, air-conditioned, and equipped with safety features</span> to ensure a smooth and secure ride.
                    </p>
                    <p className="lg:text-xl mb-10 text-gray-800">
                        Our <span className='font-bold'>drivers are experienced, licensed, and professional,</span> and they speak Arabic, Urdu and English fluently. They are familiar with the local roads, traffic, and customs, and they can provide you with helpful tips and recommendations on places to visit, restaurants to try, and activities to do in Saudi Arabia. They are also respectful, courteous, and punctual, and they will do their best to <span className='font-bold'>make your trip as pleasant and stress-free as possible.</span>
                    </p>
                    <p className="lg:text-xl mb-10 text-gray-800">
                        At Express Taxi Service, we value our customers’ satisfaction and feedback, and we strive to exceed their expectations in every aspect of our service. We offer competitive prices, flexible booking options, and 24/7 customer support to ensure that you get the best value for your money and the highest level of convenience and peace of mind. We are also committed to sustainable and ethical practices, and we aim to minimize our environmental impact and contribute to the local community through various initiatives and partnerships.
                    </p>
                    <p className="lg:text-xl mb-10 text-gray-800">
                        Thank you for considering Express Taxi Service for your transportation needs in Saudi Arabia. We look forward to serving you and making your trip a memorable one.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto rounded-xl my-10 lg:my-20 grid lg:grid-cols-2">
                    <div className="w-full">
                        <h1 className="text-2xl lg:text-5xl mb-10 font-semibold">
                            Saudi Arabian Best <span className='text-yellow-500'>Express Taxi</span> Service
                        </h1>
                        <Tabs border="border border-yellow-500">
                            <Tab label='SERVICES'>
                                <div className='py-6 px-5 gap-5'>
                                    <p className='text-gray-500 mb-6'>
                                        We provide taxi service to individuals and groups
                                    </p>
                                    <div className="flex flex-col lg:flex-row">
                                        <div className='flex-1 flex gap-2'>
                                            <div className="w-20">
                                                <AiFillCar className='w-full h-10 text-yellow-300 ' />
                                            </div>
                                            <div>
                                                <h2 className="text-xl lg:text-2xl font-bold">Best Collection</h2>
                                                <p>
                                                    We have many varieties of vehicles Like GMS, Camry, H1 Hyundai, Hiace, Coaster
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex-1 flex'>
                                            <div className="w-20 gap-2.5">
                                                <IoLogoUsd className='w-full h-10 text-yellow-300' />
                                            </div>
                                            <div>
                                                <h2 className="text-xl lg:text-2xl font-bold">Best Pricing</h2>
                                                <p>
                                                    We Provides Best rates to our clients.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab label='OUR MISSION'>
                                <p>Our mission is to provide very cheap and best Taxi service to our clients so that their journey becomes comfortable and safe.</p>
                            </Tab>
                            <Tab label='OUR GOAL'>
                                <p>Our goal is to make more and more easy Umrah and other Journey of our clients</p>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='w-full relative px-10'>
                        <Image src='/images/Camry-p.png' alt='camry' width={100} height={100} sizes='(max-width:576px) 100vw' className='max-w-xl w-full max-h-[500px] ml-auto' />
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 bg-gray-900 my-10 py-10 rounded-2xl">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl">Meet our team</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-400">
                            We’re a dynamic group of individuals who are passionate about what we do.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                    >
                        {people.map((person) => (
                            <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                                <Image className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="person image" width={192} height={192} />
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-yellow-500">{person.name}</h3>
                                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                                    <li>
                                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-yellow-500">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mx-auto max-w-7xl my-10">
                    <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                                <p className="text-sm font-medium leading-6 text-yellow-500">{stat.name}</p>
                                <p className="mt-2 flex items-baseline gap-x-2">
                                    <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
