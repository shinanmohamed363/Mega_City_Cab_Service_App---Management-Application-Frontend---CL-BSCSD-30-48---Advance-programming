manfectre registration 

'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function RegisterForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Register Manufacture</h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">Please fill in the details to register your manufacture.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 shadow-lg rounded-lg p-8 bg-white dark:bg-gray-800">
        {/* Added shadow-lg and rounded-lg to the form */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Address
            </label>
            <div className="mt-2.5">
              <input
                id="address"
                name="address"
                type="text"
                required
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Mobile
            </label>
            <div className="mt-2.5">
              <input
                id="mobile"
                name="mobile"
                type="text"
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="organization-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Organization Name
            </label>
            <div className="mt-2.5">
              <input
                id="organization-name"
                name="organization-name"
                type="text"
                required
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="userid" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              User ID
            </label>
            <div className="mt-2.5">
              <input
                id="userid"
                name="userid"
                type="text"
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="profile" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              Profile (Optional)
            </label>
            <div className="mt-2.5">
              <input
                id="profile"
                name="profile"
                type="file"
                multiple
                accept="image/*,video/*,audio/*,application/*"
                className="block w-full rounded-md bg-white dark:bg-gray-700 dark:text-white px-3.5 py-2 text-base text-gray-900 dark:outline-gray-600 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 dark:bg-gray-600 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600 dark:text-gray-400">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
