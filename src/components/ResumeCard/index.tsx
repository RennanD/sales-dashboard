// import { Container } from './styles';

import { IconProps } from 'phosphor-react'
import { ComponentType } from 'react'

type ResumeCardProps = {
  icon: ComponentType<IconProps>
  color: string
  label: string
  resume: string
}

export function ResumeCard({
  icon: Icon,
  color,
  label,
  resume,
}: ResumeCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-6 flex-1">
      <header className="flex w-full items-ce2nter justify-between">
        <span className="font-medium text-base">{label}</span>
        <span className={color}>
          <Icon size={24} />
        </span>
      </header>
      <strong className="mt-4 block font-bold text-2xl text-gray-700">
        {resume}
      </strong>
    </div>
  )
}
