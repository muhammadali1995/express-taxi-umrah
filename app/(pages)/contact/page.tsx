import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <Navbar textColor='text-white' />
            <div className="relative isolate overflow-hidden  ">
                <Image
                    src="/images/contact-top.jpg"
                    alt="banner image"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="bg-[#00000080] px-7 py-32 lg:px-10 lg:min-h-[70vh] flex items-center">
                    <div className="mx-auto max-w-2xl text-center">
<<<<<<< HEAD
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Biz Bilan Bog&#39;laning</h2>
=======
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Biz Bilan Bog&lsquo;laning</h2>
>>>>>>> a7306a13fc156f0b9915970b2eebc26ef9f324ac
                        <p className="mt-6  lg:text-xl leading-8 text-white">
                            Express Taksi Xizmati | Umra va Haj uchun Eng Yaxshi Taxsi Xizmati
                        </p>
                    </div>
                </div>

            </div>
            <div className='px-4 md:px-10'>

                <div className="max-w-7xl mx-auto text-center px-5 md:p-10 my-10">
                    <h1 className="text-2xl lg:text-4xl mb-4 font-bold">Express Taxi Service</h1>
                    <p>
                        Greetings from the Umrah taxi service. We are committed to provide the most up-to-date information about umrah taxi services.Our goal is to offer creative and environmentally friendly transportation options that make it easier for Muslims to travel for religious, academic, and cultural purposes.
                        We are a company that values cooperation, respect, excellence, and services.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-2.5 md:px-6 lg:px-10 rounded-xl shadow-lg my-20 py-10 border-t">
                    <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                            <div className='text-center lg:text-start'>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                                <p className="mt-4 leading-7 text-gray-600">
                                    Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>
                                                <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                                                    collaborate@example.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="mt-1">
                                            <dt className="sr-only">Phone number</dt>
                                            <dd>+1 (555) 905-2345</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Press</h3>
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>
                                                <a className="font-semibold text-indigo-600" href="mailto:press@example.com">
                                                    press@example.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="mt-1">
                                            <dt className="sr-only">Phone number</dt>
                                            <dd>+1 (555) 905-3456</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>
                                                <a className="font-semibold text-indigo-600" href="mailto:careers@example.com">
                                                    careers@example.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="mt-1">
                                            <dt className="sr-only">Phone number</dt>
                                            <dd>+1 (555) 905-4567</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Say hello</h3>
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>
                                                <a className="font-semibold text-indigo-600" href="mailto:hello@example.com">
                                                    hello@example.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="mt-1">
                                            <dt className="sr-only">Phone number</dt>
                                            <dd>+1 (555) 905-5678</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                            <div className='text-center lg:text-start'>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
                                <p className="mt-4 leading-7 text-gray-600">
                                    Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Los Angeles</h3>
                                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                        <p>4556 Brendan Ferry</p>
                                        <p>Los Angeles, CA 90210</p>
                                    </address>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">New York</h3>
                                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                        <p>886 Walter Street</p>
                                        <p>New York, NY 12345</p>
                                    </address>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Toronto</h3>
                                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                        <p>7363 Cynthia Pass</p>
                                        <p>Toronto, ON N3Y 4H8</p>
                                    </address>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Chicago</h3>
                                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                                        <p>726 Mavis Island</p>
                                        <p>Chicago, IL 60601</p>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-2 5 md:px-6 lg::px-10 my-20 py-10 bg-gray-9000">
                    <form action="#" method="POST">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-yellow-500">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-yellow-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-yellow-500">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-yellow-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-yellow-500">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-yellow-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-yellow-500">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-yellow-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-yellow-500">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-yellow-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-500 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
