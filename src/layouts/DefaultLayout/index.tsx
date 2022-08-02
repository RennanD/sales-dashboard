// import { Container } from './styles';

import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'

export function DefaultLayout() {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 flex-row">
      <Sidebar />
      <div className="w-full h-screen">
        <Navbar />
        <div className="pb-10 max-h-[calc(100vh_-_80px)] w-full overflow-y-auto">
          <main className="w-full px-8 my-0 mx-auto max-w-[1444px]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
