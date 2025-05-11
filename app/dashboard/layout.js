import React from 'react'
import SideNavbar from '@/app/components/SideNavbar'
import DownNavbar from '../components/DownNavbar'

const dashboardLayout = ({children}) => {
  return (
    <div className='dashboardLayout'>
      <div className='dashboardLayout-leftSide'>
        <SideNavbar/>
      </div>
      <div className='dashboardLayout-rightSide'>
        {children}
      </div>
      <div className='dashboardLayout-downSide'>
        <DownNavbar/>
      </div>
    </div>
  )
}

export default dashboardLayout
