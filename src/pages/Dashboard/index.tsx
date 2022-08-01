// import { Container } from './styles';

import { Bag, ChartLine, Wallet } from 'phosphor-react'
import { AreaChart } from '../../components/AreaChart'
import { DashboardCard } from '../../components/DashboardCard'
import { Navbar } from '../../components/Navbar'
import { ResumeCard } from '../../components/ResumeCard'
import { Sidebar } from '../../components/Sidebar'

export function Dashboard() {
  const areaData = [
    {
      date: '2021-03-18T00:00:00.000Z',
      value: 5421,
    },
    {
      date: '2021-03-19T00:00:00.000Z',
      value: 7248,
    },
    {
      date: '2021-03-20T00:00:00.000Z',
      value: 6300,
    },
    {
      date: '2021-03-21T00:00:00.000Z',
      value: 9842,
    },
    {
      date: '2021-03-22T00:00:00.000Z',
      value: 11578,
    },
    {
      date: '2021-03-23T00:00:00.000Z',
      value: 4170,
    },
  ]

  return (
    <div className="flex w-full min-h-screen bg-gray-100 flex-row">
      <Sidebar />
      <div className="w-full h-screen ">
        <Navbar />
        <main className="w-full pb-10 max-h-[calc(100vh_-_80px)] overflow-y-auto px-6 my-0 mx-auto max-w-[1444px]">
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
          </div>

          <div className="pt-10 pb-2 flex items-center flex-wrap gap-3">
            <DashboardCard title="Revenue vc Costs">
              <AreaChart title="Revenue vc Costs" data={areaData} />
            </DashboardCard>

            <DashboardCard title="Total Profit">
              <AreaChart title="Total Profit" data={areaData} />
            </DashboardCard>
          </div>

          <div className="pt-10 pb-2 flex items-center flex-wrap gap-3">
            <DashboardCard title="Revenue vc Unit Sold">
              <AreaChart title="Revenue vc Unit Sold" data={areaData} />
            </DashboardCard>
          </div>
        </main>
      </div>
    </div>
  )
}
