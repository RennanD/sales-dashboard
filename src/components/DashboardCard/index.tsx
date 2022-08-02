import { ReactNode } from 'react'
import { DotsThreeVertical } from 'phosphor-react'

type DashboardCardProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export function DashboardCard({
  title,
  children,
  subtitle,
}: DashboardCardProps) {
  return (
    <div className="bg-white h-[400px] shadow-md rounded-md flex-1 p-8 w-full">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-medium block">{title}</h2>
          {!!subtitle && <span className="text-gray-500">{subtitle}</span>}
        </div>

        <DotsThreeVertical size={24} weight="bold" />
      </header>
      {children}
    </div>
  )
}
