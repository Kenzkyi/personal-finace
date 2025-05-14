'use client'
import SideNavbar from '@/app/components/SideNavbar'
import DownNavbar from '../components/DownNavbar'
import AddBudget from '../components/AddBudget'
import EditBudget from '../components/EditBudget'
import { useFinanceContext } from '../context/FinanceContext'
import DeleteBudget from '../components/DeleteBudget'
import AddPot from '../components/AddPot'
import EditPot from '../components/EditPot'
import DeletePot from '../components/DeletePot'

const dashboardLayout = ({children}) => {
  const { 
    openAddBudget,
    openEditBudget,
    openDeleteBudget,
    openAddPot,
    openEditPot,
    openDeletePot,
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
      {
        openAddPot && <AddPot />
      }
      {
        openEditPot && <EditPot />
      }
      {
        openDeletePot && <DeletePot />
      }
    </div>
  )
}

export default dashboardLayout
