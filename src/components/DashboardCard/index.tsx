// import { Container } from './styles';

import { ArrowRight } from 'phosphor-react'
import { ReactNode } from 'react'

type DashboardCardProps = {
  title: string
  children: ReactNode
}

export function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md flex-1 p-6 w-full">
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">{title}</h2>

        <a href="#" className="text-purple-700 flex items-center gap-2 text-sm">
          View More
          <ArrowRight size={16} />
        </a>
      </header>
      {children}
    </div>
  )
}
