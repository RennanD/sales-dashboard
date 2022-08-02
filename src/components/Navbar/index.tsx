import { Bell, Info, MagnifyingGlass } from 'phosphor-react'

export function Navbar() {
  return (
    <nav className="w-full bg-white h-20 shadow-sm border-b-[1px] border-gray-200">
      <div className="flex h-full items-center justify-between">
        <div className="px-6">
          <div className="relative">
            <div className="absolute inset-y-4 text-gray-500 left-0 flex items-center pl-2 pointer-events-none">
              <MagnifyingGlass size={24} />
            </div>

            <input
              type="text"
              className="w-[400px] rounded pl-12 pr-4 text-base py-2.5 bg-gray-100 text-gray-700 placeholder-gray-500"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="px-6 flex items-center gap-6">
          <Info size={24} />
          <Bell size={24} />

          <div className="flex items-center gap-3">
            <img
              src="https://github.com/rennand.png"
              alt="Avatar github"
              className="rounded-full w-10 h-10"
            />

            <div className="leading-relaxed">
              <strong className="font-bold text-sm block">
                Rennan Oliveira
              </strong>
              <span className="text-gray-500 text-xs block">Super admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
