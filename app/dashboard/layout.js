'use client'
import SideNavbar from '@/app/components/SideNavbar'
import DownNavbar from '../components/DownNavbar'
import AddBudget from '../components/AddBudget'
import EditBudget from '../components/EditBudget'
import { useFinanceContext } from '../context/FinanceContext'
import DeleteBudget from '../components/DeleteBudget'

const dashboardLayout = ({children}) => {
  const { 
    openAddBudget,
    openEditBudget,
    openDeleteBudget,
  } = useFinanceContext()
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
      {
        openAddBudget && <AddBudget />
      }

      {
        openEditBudget && <EditBudget />
      }
      {
        openDeleteBudget && <DeleteBudget/>
      }
    </div>
  )
}

export default dashboardLayout
