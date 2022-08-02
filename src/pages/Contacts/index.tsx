// import { Container } from './styles';

import { FunnelSimple, MagnifyingGlass, Plus } from 'phosphor-react'
import { ContactsTable } from '../../components/ContactsTable'

export function Contacts() {
  return (
    <div>
      <div className="pt-8 flex items-start justify-between">
        <h2 className="text-4xl  leading-relaxed font-medium text-gray-700 block">
          Contacts
        </h2>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-y-4 text-gray-500 left-0 flex items-center pl-2 pointer-events-none">
              <MagnifyingGlass size={24} />
            </div>

            <input
              type="text"
              className="border-2 border-gray-200 rounded-md pl-12 pr-4 text-base py-2.5 bg-white text-gray-700 placeholder-gray-500"
              placeholder="Search"
            />
          </div>

          <button
            className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-md px-4 py-2.5"
            type="button"
          >
            <span className="text-gray-500">
              <FunnelSimple size={24} />
            </span>
            Filters
          </button>

          <button
            className="flex items-center gap-3 bg-purple-700 text-gray-100 border-2 border-purple-700 rounded-md px-4 py-2.5"
            type="button"
          >
            <Plus size={24} />
            Add Contact
          </button>
        </div>
      </div>

      <div className="mt-8 p-8 bg-white rounded-md shadow-md">
        <ContactsTable />
      </div>
    </div>
  )
}
