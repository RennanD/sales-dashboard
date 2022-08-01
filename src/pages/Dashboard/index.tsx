// import { Container } from './styles';

import { Sidebar } from '../../components/Sidebar'

export function Dashboard() {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 flex-row">
      <Sidebar />
      <div className="flex overflow-y-auto flex-col w-full">
        <p>teste</p>
      </div>
    </div>
  )
}
