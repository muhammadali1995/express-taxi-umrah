import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function GetTaxiForm() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="bg-white lg:bg-transparent p-5 lg:p-0 lg:absolute right-0 w-full h-full flex flex-col items-center justify-center">
      <form
        action="#"
        method="POST"
        className="w-full lg:w-auto md:max-w-2xl mx-auto xl:mr-auto xl:ml-[23%] shadow-xl bg-white p-2 lg:p-4 z-10"
      >
        <h1 className="text-3xl text-center font-semibold lg:mb-10 text-gray-600">
          Get Quote
        </h1>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 capitalize">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Country name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="country-name"
                id="country-name"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone with Country Code
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="pickup-address"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Pick up Adress
            </label>
            <div className="mt-2.5">
              <input
                type="pickup-address"
                name="pickup-address"
                id="pickup-address"
                autoComplete="pickup-address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="destination"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Destination
            </label>
            <div className="mt-2.5">
              <input
                type="destination"
                name="destination"
                id="destination"
                autoComplete="destination"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="vehicle"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              vehicle
            </label>
            <select
              id="vehicle"
              name="vehicle"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block uppercase w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-200 shadow- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            request for taxi
          </button>
        </div>
      </form>
    </div>
  );
}
