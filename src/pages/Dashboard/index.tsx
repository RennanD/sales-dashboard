// import { Container } from './styles';

import { Bag, ChartLine, PaperPlaneTilt, Wallet } from 'phosphor-react'
import { Navbar } from '../../components/Navbar'
import { ResumeCard } from '../../components/ResumeCard'
import { Sidebar } from '../../components/Sidebar'

export function Dashboard() {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 flex-row">
      <Sidebar />
      <div className="w-full h-screen">
        <Navbar />
        <main className="w-full overflow-y-auto px-6 my-0 mx-auto max-w-[1444px]">
          <div className="pt-10">
            <h2 className="text-4xl  leading-relaxed font-medium text-gray-700 block">
              Hi Rennan Oliveira
            </h2>
            <span className="text-gray-500">
              Welcome back to Sales Dashboard
            </span>
          </div>

          <div className="pt-10 pb-2 flex items-center gap-6 flex-wrap">
            <ResumeCard
              label="New Sales"
              resume="$22.880,50"
              icon={Bag}
              color="text-purple-700"
            />

            <ResumeCard
              label="Cost of Goods Sold"
              resume="Rp8,768.00"
              icon={Wallet}
              color="text-red-500"
            />

            <ResumeCard
              label="Gross Profit"
              resume="Rp2,898.00"
              icon={ChartLine}
              color="text-blue-500"
            />
            <ResumeCard
              label="Quantity"
              resume="56"
              icon={PaperPlaneTilt}
              color="text-yellow-700"
            />
          </div>
        </main>
      </div>
    </div>
  )
}
