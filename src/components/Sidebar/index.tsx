// import { Container } from './styles';

import {
  AddressBook,
  Buildings,
  Calendar,
  ChartBar,
  Envelope,
  File,
  GridFour,
  Handbag,
  List,
} from 'phosphor-react'
import { SidebarLink } from './SidebarLink'

export function Sidebar() {
  return (
    <div className="flex flex-col shadow-sm h-screen w-80 overflow-y-auto bg-white border-r-[1px] border-gray-200">
      <div className="px-6 pt-8">
        <h2 className="flex font-medium gap-10 text-lg">
          Sales Dashboard
          <List size={24} />
        </h2>
      </div>

      <div className="px-6 pt-6">
        <hr className="border-gray-200" />
      </div>

      <div className="px-6 pt-6 mb-6">
        <ul className="flex flex-col space-y-3">
          <SidebarLink
            to="/"
            title="Dashboard"
            icon={GridFour}
            shouldMacthExactPath
          />
        </ul>
      </div>

      <div className="px-6 pt-4">
        <ul className="flex flex-col space-y-3">
          <SidebarLink to="/#" title="Companies" icon={Buildings} />
          <SidebarLink to="/#" title="Deals" icon={Handbag} />
          <SidebarLink to="/contacts" title="Contacts" icon={AddressBook} />
          <SidebarLink to="/#" title="Reports" icon={ChartBar} />
          <SidebarLink to="/#" title="Calendar" icon={Calendar} />
          <SidebarLink to="/#" title="Messages" icon={Envelope} />
          <SidebarLink to="/#" title="Documents" icon={File} />
        </ul>
      </div>
    </div>
  )
}
