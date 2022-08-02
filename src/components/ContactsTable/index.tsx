// import { Container } from './styles';

import { DotsThreeVertical } from 'phosphor-react'

export function ContactsTable() {
  return (
    <div className={`overflow-x-auto relative`}>
      <table className="w-full text-sm text-left">
        <thead className="text-sm font-medium shadow-sm text-gray-500 bg-white border-b border-gray-200">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-4">
              Phone
            </th>
            <th scope="col" className="py-3 px-4">
              Email
            </th>
            <th scope="col" className="py-3 px-4">
              Company
            </th>
            <th scope="col" className="py-3 px-4">
              Created Date
            </th>
            <th scope="col" className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              key={index}
            >
              <td className="py-4 px-4 flex items-center">
                <img
                  src="https://github.com/rennand.png"
                  className="h-10 w-10 rounded-full mr-3"
                  alt=""
                />
                <div>
                  <strong className="block text-md font-medium text-gray-700">
                    Rennan Oliveira
                  </strong>
                </div>
              </td>
              <td className="py-4 px-4">(99) 99999-9999</td>
              <td className="py-4 px-4">email@email.com</td>
              <td className="py-4 px-4">Develop Team</td>
              <td className="py-4 px-4">2, Ago. de 2022</td>
              <td className="py-4 px-4  text-right">
                <span className="text-gray-500">
                  <DotsThreeVertical size={24} weight="bold" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
