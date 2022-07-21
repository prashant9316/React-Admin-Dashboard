import React from 'react'
import { ChartsHeader, Stacked as StackedChart } from '../../components'


const Stacked = () => {
  return (
    <div className='mt-24 m-2 md:m-10 p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg'>
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className='w-full'>
        <StackedChart />
      </div>

    </div>
  )
}

export default Stacked