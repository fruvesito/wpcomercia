import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuDesplegable() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Menú
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="w-full flex flex-wrap flex-grow justify-center lg:flex lg:items-center lg:w-auto">
          <ul className="grid grid-col-1">
            <li className="mt-0.5"><Link to="/" className="text-black hover:text-gray-400">Inicio</Link></li>
            <li className="mt-0.5"><Link to="/info" className="text-black hover:text-gray-400">Acerca de</Link></li>
            <li className="mt-0.5"><Link to="/contacto" className="text-black hover:text-gray-400">Contacto</Link></li>
          </ul>
      </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
