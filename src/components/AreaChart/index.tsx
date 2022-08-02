import { ApexOptions } from 'apexcharts'
import ApexCharts from 'react-apexcharts'

type AreaChartData = {
  date: string
  value: number
}

type AreaChartProps = {
  title: string
  data: AreaChartData[]
}

export function AreaChart({ data, title }: AreaChartProps) {
  const options: ApexOptions = {
    chart: {
      animations: {
        easing: 'easein',
      },
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
      foreColor: '#202020',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      theme: 'light',
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#898989',
      },
      axisTicks: {
        color: '#898989',
      },
      categories: data.map((item) => item.date),
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'light',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  }

  const series = [
    { color: '#775DA6', name: title, data: data.map((item) => item.value) },
  ]

  return (
    <ApexCharts
      options={options}
      series={series}
      type="area"
      height={250}
      width="100%"
    />
  )
}
