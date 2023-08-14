'use client'
import { useState } from 'react'
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import Link from 'next/link';

const navigation = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Review", href: "/review" },
]

export default function Navbar({ textColor }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    console.log(textColor)
    return (
        <header className='absolute inset-x-0 top-0 z-50'>
            <div className="mx-auto max-w-7xl">
                <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                    <nav
                        className="flex items-center justify-between lg:justify-start"
                        aria-label="Global"
                    >
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">MakkaExpress</span>
                            <Image
                                alt="MakkaExpress"
                                width={100}
                                height={100}
                                className="h-8 w-auto"
                                src="/images/logo.png"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm  cursor-pointer font-semibold leading-6 text-gray-900 hover:text-yellow-500 ${textColor}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">MakkaExpress</span>
                            <Image
                                className="h-8 w-auto"
                                width={100}
                                height={32}
                                src="/images/logo.png"
                                alt="makka express logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

    )
}