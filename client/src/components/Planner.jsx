
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import { PlusIcon } from '@heroicons/react/20/solid'

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}
const projects = [
  {
    id: 1,
    name: 'Weekend with friends',
    href: '#',
    status: 'Complete',
    createdBy: 'FirstName',
    dueDate: 'March 20, 2023 - March 22, 2023'
  },
  {
    id: 2,
    name: 'New Car',
    href: '#',
    status: 'In progress',
    createdBy: 'FirstName',
    dueDate: 'TBD',
  },
  {
    id: 3,
    name: 'Car Insurance',
    href: '#',
    status: 'In progress',
    createdBy: 'FirstName',
    dueDate: 'TBD',
  },
  {
    id: 4,
    name: 'Apartment',
    href: '#',
    status: 'In progress',
    createdBy: 'FirstName',
    dueDate: 'TBD',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Planner = () => {
    return (
        <div className='w-full h-auto flex items-center justify-between flex-col'>
            <div className='w-full h-[6rem] flex items-center justify-start fixed bg-white md:pl-[6rem]'>
                <div className='w-auto flex items-center justify-center ml-8 md:ml-0'>             
                    <Link to={'/dashboard'}><button className='bg-blue-200 px-4 py-2 text-blue-600 rounded mr-6'>&larr; Home</button></Link>
                    <button className='bg-green-200 px-4 py-2 text-green-700 rounded flex items-center justify-around'>
                       <PlusIcon className='w-6 h-6 mr-2'/> Add New Plan
                    </button>
                </div>

            </div>
            <div className='w-[90%] border-b-2 mb-8 fixed mt-[6rem]'></div>
        <div className='w-full h-auto flex items-center justify-center'>
        <ul role="list" className="divide-y divide-gray-100 w-3/4 mt-[8rem]">
            <h1 className='text-4xl mb-5 font-light'>Your Spending Planner:</h1>
        {projects.map((project) => (
        <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">{project.name}</p>
              <p
                className={classNames(
                  statuses[project.status],
                  'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {project.status}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p className="whitespace-nowrap">
                Date(s) <time>{project.dueDate}</time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p className="truncate">Created by {project.createdBy}</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <a
              href={project.href}
              className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
            >
              View Plan<span className="sr-only">, {project.name}</span>
            </a>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Delete<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
        </div>
        </div>
    )
}

export default Planner
