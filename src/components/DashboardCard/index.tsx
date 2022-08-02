import { HTMLAttributes, ReactNode } from 'react'
import { DotsThreeVertical } from 'phosphor-react'

type DashboardCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  subtitle?: string
  children: ReactNode
}

export function DashboardCard({
  title,
  children,
  subtitle,
  className,
  ...rest
}: DashboardCardProps) {
  return (
    <div
      className={`bg-white min-h-[400px] shadow-md rounded-md flex-1 p-8 w-full ${className}`}
      {...rest}
    >
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
