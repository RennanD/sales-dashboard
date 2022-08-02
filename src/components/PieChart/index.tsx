import { ApexOptions } from 'apexcharts'

import ApexCharts from 'react-apexcharts'

export function PieChart() {
  const options: ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: ['#70B6C1', '#775DA6', '#FFB1B7'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      theme: 'light',
    },
    stroke: {
      colors: ['#fff'],
    },
    labels: ['send', 'open', 'spam'],
    colors: ['#775DA6', '#FFB1B7', '#70B6C1'],
    fill: {
      colors: ['#775DA6', '#FFB1B7', '#70B6C1'],
    },
  }

  const series = [860, 730, 234]

  return (
    <ApexCharts options={options} series={series} type="pie" height={250} />
  )
}
