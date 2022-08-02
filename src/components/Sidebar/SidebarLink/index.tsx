// import { Container } from './styles';

import { ComponentType } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconProps } from 'phosphor-react'

type SidebarLinkProps = {
  // isActive?: boolean
  icon: ComponentType<IconProps>
  title: string
  to: string
  shouldMacthExactPath?: boolean
}

export function SidebarLink({
  // isActive,
  shouldMacthExactPath = false,
  icon: Icon,
  title,
  to,
}: SidebarLinkProps) {
  const location = useLocation()

  let isActive

  if (shouldMacthExactPath && location.pathname === to) {
    isActive = true
  }

  if (!shouldMacthExactPath && location.pathname.startsWith(String(to))) {
    isActive = true
  }

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
      <NavLink
        to={to}
        className="cursor-pointer rounded inline-block w-full py-2 pl-12 text-base font-medium"
      >
        {title}
      </NavLink>
    </li>
  )
}
