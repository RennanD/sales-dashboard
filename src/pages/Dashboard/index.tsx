// import { Container } from './styles';

import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'

export function Dashboard() {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 flex-row">
      <Sidebar />
      <div className="w-full h-screen">
        <Navbar />
        <main className="w-full overflow-y-auto"></main>
      </div>
    </div>
  )
}
