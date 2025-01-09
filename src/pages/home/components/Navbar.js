import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {ShoppingBagIcon, XMarkIcon, Bars3CenterLeftIcon, UserIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Collections', href: '#', current: false },
  { name: 'New', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomeNav() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    // alert(window.innerWidth)
    if(window.innerWidth > 800){
      setIsMobile(false);
    }
    else{
      setIsMobile(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])
  useEffect(() => {
    handleWindowSizeChange()
  }, [])
  return (
    <Disclosure as="nav" className="text-black">
      <div className="max-w-9xl py-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              
              <Bars3CenterLeftIcon aria-hidden="true" className="block size-8 group-data-[open]:hidden text-black" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {isMobile ? (
              <div className="flex shrink-0 items-center">
              <img
                alt="Odin"
                src="/logo-p.png"
                className="h-8 w-auto mr-6"
              />
            </div>
            ) : (null)}
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-black-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-lg font-medium '
                    )}                    
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {isMobile ? (null) : (
            <div className="flex justify-center items-center w-full mr-40"> 
            <img src="/logo.png" alt="logo image" />
          </div>
            )}
          

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:justify-end sm:static sm:inset-auto sm:pr-2">
            <button
              type="button"
              className="relative rounded-full bg-white-800 ring-4 ring-black p-1 text-black-400 hover:text-black focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View Cart</span>
              <ShoppingBagIcon aria-hidden="true" className="size-6 m-1" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserIcon aria-hidden="true" className="size-6 m-2" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Favourites
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-lg font-beat',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
