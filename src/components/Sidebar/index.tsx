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
          <SidebarLink title="Dashboard" icon={GridFour} isActive />
        </ul>
      </div>

      <div className="px-6 pt-4">
        <ul className="flex flex-col space-y-3">
          <SidebarLink title="Companies" icon={Buildings} />
          <SidebarLink title="Deals" icon={Handbag} />
          <SidebarLink title="Contacts" icon={AddressBook} />
          <SidebarLink title="Reports" icon={ChartBar} />
          <SidebarLink title="Calendar" icon={Calendar} />
          <SidebarLink title="Messages" icon={Envelope} />
          <SidebarLink title="Documents" icon={File} />
        </ul>
      </div>
    </div>
  )
}
