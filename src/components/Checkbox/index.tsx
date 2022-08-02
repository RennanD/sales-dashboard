// import { Container } from './styles';

import { HTMLAttributes } from 'react'

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Checkbox({ id, label, ...rest }: CheckboxProps) {
  return (
    <div className="flex items-center mb-5">
      <input
        id={id}
        type="checkbox"
        value=""
        className="w-5 h-5 text-blue-500 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
        {...rest}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  )
}
