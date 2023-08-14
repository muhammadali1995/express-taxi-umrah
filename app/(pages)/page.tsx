"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiBoatPropeller, GiCarSeat } from "react-icons/gi";
import CarCarousel from "../components/CarCarousel";
import Footer from "../components/Footer";
import GetTaxiForm from "../components/GetTaxiForm";
import TrustBg from "/public/images/trusted-bg.jpg";
import trustCar from "/public/images/Camry-p.png";
import ReviewSlider from "../components/ReviewSlider";
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import ServicePriceForCar from "../data/servicePrice.js";
import ReviewBg from "/public/images/reviews.jpg";
import { TaxiLine } from "../components/TaxiLine";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar textColor={"#fff"} />
      </header>
      <main>
        {/* TOP BANNER */}
        <div className="relative min-h-screen bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl lg:min-h-screen">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative mx-auto lg:mx-0 px-6 py-10 lg:py-32 my-auto lg:px-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="text-white lg:text-black relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-yellow-900/10 hover:ring-yellow-900/20">
                      Makkah-Madina transport hizmatlari
                      <Link
                        href="#"
                        className="whitespace-nowrap font-semibold text-yellow-400 ml-1"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Buyurtma qilish <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                  <h1 className="text-white text-4xl font-bold tracking-tight lg:text-gray-900 sm:text-6xl">
                    Makkah-Madina transport xizmatlari
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white lg:text-gray-600">
                    Induvidual Umra safarlari <br /> Airaportdan kutib olish{" "}
                    <br /> Saudiya ziyoratlari
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
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src="/images/taxi-banner.jpg"
              sizes="(max-width: 100%)"
              fill
              alt="makka taxi express"
            />
            <GetTaxiForm></GetTaxiForm>
          </div>
        </div>
        <TaxiLine classNames="bottom-10" />
        {/* ADVERT */}
        <div className="bg-[rgba(0,0,0,0.9)] shadow-xl relative  lg:min-h-[768px]">
          <div className="absolute inset-0 -z-1 rounded-lg">
            <Image
              src={TrustBg}
              fill={true}
              alt="bg image for trusted car"
              className="bg-cover rounded-xl"
            />
          </div>

          <div className="bg-[rgba(0,0,0,0.8)] relative min-h-[768px] flex items-center">
            <div className="mx-auto max-w-7xl z-10  py-16 lg:grid lg:grid-cols-2 px-10">
              <div>
                <h1 className="text-3xl lg:text-[44px] leading-[1.1] text-white mb-6 font-bold">
                  Saudiya Arabistonidegi Eng{" "}
                  <span className="text-yellow-500">Ishonli Taxi</span>{" "}
                  Companiyasi
                </h1>
                <p className="text-gray-300 text-base mb-6">
                  <span className="font-semibold">Express Taxi xizmati </span>{" "}
                  Saudiya Arabistoni Qirolligi bo&#39;ylab juda arzon{" "}
                  <span className="font-semibold">taksi xizmatini</span> taqdim
                  etadi, ayniqsa biz{" "}
                  <span className="text-blue-700 font-semibold">Haj</span> va{" "}
                  <span className="text-blue-700 font-semibold">Umra</span>{" "}
                  ziyoratchilariga taksi xizmatini taqdim etamiz.
                </p>
                <button className="bg-yellow-500 text-black font-semibold px-5 py-3">
                  Taksi Buyurtma qiling
                </button>
              </div>
              <div className="mt-10 md:ml-5 lg:0">
                <Image
                  src={trustCar}
                  alt="trusted cur"
                  sizes="(max-width: 512px)"
                  style={{ position: "relative" }}
                  className=" mx-auto max-w-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mx-auto min-h-[768px] max-w-7xl py-8">
          <div className="mb-8 lg:mb-16 text-center">
            <h1 className="text-2xl lg:text-[44px] text-gray-600 font-semibold lg:mb-5">
              Car for Every Budget
            </h1>
            <h2 className="text-gray-400 lg:mt-4 text-md lg:text-2xl capitalize">
              Airport trip pickup will be charged in advance.
            </h2>
          </div>
          <div className="shadow-xl ">
            <Tabs>
              {ServicePriceForCar.map((item: any) => {
                return (
                  <Tab key={item.name} label={item.name}>
                    <div className="flex p-10 flex-col lg:flex-row">
                      <div className="w-full lg:w-1/2">
                        <h1 className="text-2xl font-bold capitalize mb-4">
                          {item.model}
                        </h1>
                        <ul className="pl-5">
                          {item.directions.map(
                            (direction: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="list-disc text-gray-600"
                                >
                                  <span className="font-bold">
                                    {direction.from}
                                  </span>
                                  <span className="mx-1">
                                    {direction.to !== "" && "to"}
                                  </span>
                                  <span className="font-bold">
                                    {direction.to} {direction.price}SR
                                  </span>
                                </li>
                              );
                            }
                          )}
                        </ul>
                        <ul className="mt-5">
                          <li className="list-disc font-semibold text-gray-600 text-lg leading-none">
                            {item.desc}
                          </li>
                        </ul>
                        <div className="flex w-1/2 mt-5 gap-x-5">
                          <div className="flex items-center">
                            <GiCarSeat className="w-6 h-5 text-yellow-400" />
                            <span className="text-xl ml-2 text-gray-700">
                              {item.numOfSeats} seats
                            </span>
                          </div>
                          {item.ac && (
                            <div className="flex items-center">
                              <GiBoatPropeller className="w-6 h-6 text-yellow-400" />
                              <span className="text-xl ml-2 text-gray-700">
                                AC
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 relative flex items-center my-10 lg:my-0">
                        <Image
                          src={item.imgSrc}
                          alt="car image"
                          width={512}
                          height={512}
                          className="mx-auto"
                        />
                      </div>
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
        {/* REVIEWS */}
        <div className="relative min-h-max lg:min-h-[768px]">
          <div className="absolute inset-0 -z-1 overflow-hidden">
            <Image
              src={ReviewBg}
              alt="bg image for reviews car"
              className="lg:w-full relative h-[500px] lg:h-auto lg:top-[-50%]"
            />
          </div>
          <div className="bg-[rgba(0,0,0,0.8)] relative py-7 sm:py-32 min-h-[500px] lg:min-h-[768px]">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl my-8">
                <h2 className="text-2xl font-bold text-center py-6 tracking-tight text-white sm:text-4xl uppercase">
                  Express Taksi xizmati haqida boshqalar nima deydi
                </h2>
              </div>
              <div className="mx-4 lg:mx-0">
                <ReviewSlider />
              </div>
            </div>
          </div>
        </div>
        {/* CARS */}

        <div className="mx-auto  min-h-[768px] max-w-7xl py-7 lg:py-32 px-10 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl lg:text-[44px] text-center mb-4 lg:mb-8 text-gray-600 font-semibold">
              Express Taksi Xizmati Transport Vositalari
            </h1>
            <p className="text-gray-600 mb-5">
              Saudiya Arabistonida eng yaxshi umra taksi xizmatini
              qidiryapsizmi? Express taksi xizmatidan boshqaga qaramang. Saudiya
              Arabistonida umra ziyoratiga boruvchi ziyoratchilarga ishonchli,
              professional va hamyonbop taksi xizmatlarini taklif etamiz.
              Bizning haydovchilarimiz tajribali va muqaddas joylar haqida
              ma&lsquo;lumotga ega, shuning uchun siz ishonchli qo&lsquo;llarda
              ekanligingizga amin bo&lsquo;lishingiz mumkin. Biz, shuningdek,
              tanlash uchun transport vositalarining keng assortimentini taklif
              etamiz, shuning uchun siz o&lsquo;zingizning ehtiyojlaringiz va
              byudjetingizga mos keladiganini topishingiz mumkin. Umra
              taksingizni bron qilish uchun bugun biz bilan bog&lsquo;laning!
            </p>
            <CarCarousel />
          </div>
        </div>
        <TaxiLine />
      </main>
    </div>
  );
}
