
import { useState, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import Stats from './Stats'
import Team from './Team'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import LandingFooter from './LandingFooter'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Company', href: '#' },
]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <>
        <header className="bg-white w-full">
      <nav className="mx-auto flex w-full border-b-2 items-center justify-between p-6 lg:px-8 md:mb-[2rem] fixed bg-white z-20" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="./imgs/full-logo.png" alt="" />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
              <a className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 cursor-pointer">Product</a>
              <a className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 cursor-pointer" >Team</a>
              <a className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 cursor-pointer" >Testimonials</a>
              <a className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 cursor-pointer">Company</a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          <Link to={'/login'}><p className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500">
            Log in <span aria-hidden="true">&rarr;</span>
          </p></Link>
        </div>
      </nav>

      {/* MOBILE VIEW */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="./imgs/full-logo.png"
                alt=""
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link to={'/login'}><p className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </p></Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    <Hero />
    <Stats />
    <Team />
    <Testimonials />
    <Newsletter />
    <LandingFooter />
    </>
    )
}

export default Navbar
