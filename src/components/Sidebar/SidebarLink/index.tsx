// import { Container } from './styles';

import { IconProps } from 'phosphor-react'
import { ComponentType } from 'react'

type SidebarLinkProps = {
  isActive?: boolean
  icon: ComponentType<IconProps>
  title: string
}

export function SidebarLink({ isActive, icon: Icon, title }: SidebarLinkProps) {
  return (
    <li
      className={`relative text-gray-700 rounded  hover:bg-purple-100 ${
        isActive ? 'bg-purple-100' : ''
      }`}
    >
      <div
        className={`absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none ${
          isActive ? 'text-purple-500' : 'text-gray-500'
        }`}
      >
        <Icon size={24} />
      </div>
      <a
        href="#"
        className="cursor-pointer rounded inline-block w-full py-2 pl-12 text-base font-medium"
      >
        {title}
      </a>
    </li>
  )
}
