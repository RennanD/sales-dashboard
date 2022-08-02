// import { Container } from './styles';

export function TableDashoard() {
  return (
    <div className={`overflow-x-auto relative `}>
      <table className="w-full text-sm text-left">
        <thead className="text-sm font-medium shadow-sm text-gray-500 bg-white border-b border-gray-200">
          <tr>
            <th scope="col" className="py-3 px-6">
              No
            </th>
            <th scope="col" className="py-3 px-4">
              Ref
            </th>
            <th scope="col" className="py-3 px-4">
              Leads
            </th>
            <th scope="col" className="py-3 px-4">
              Deals
            </th>
            <th scope="col" className="py-3 px-4">
              Tasks
            </th>
            <th scope="col" className="py-3 px-4 text-right">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              key={index}
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-700 whitespace-nowrap dark:text-white"
              >
                {index + 1}.
              </th>
              <td className="py-4 px-4 flex items-center">
                <img
                  src="https://github.com/rennand.png"
                  className="h-10 w-10 rounded-full mr-3"
                  alt=""
                />
                <div>
                  <strong className="block text-sm font-medium text-gray-700">
                    Rennan Oliveira
                  </strong>
                  <span className="text-sm text-gray-500">Developer</span>
                </div>
              </td>
              <td className="py-4 px-4">187</td>
              <td className="py-4 px-4">154</td>
              <td className="py-4 px-4">28 Tasks Done</td>
              <td className="py-4 px-4  text-right">100%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
