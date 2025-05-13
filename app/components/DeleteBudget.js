import React from 'react'
import '@/app/styles/deleteComponent.scss'
import cancelIcon from '@/app/asset/public/cancelIcon.svg'
import Image from 'next/image'
import { useFinanceContext } from '../context/FinanceContext'

const DeleteBudget = () => {
        const { 
        singleDeletingBudget,
        setOpenDeleteBudget,
        setAllAvailableBudget,
        allAvailableBudget,
        allAvailableColors,
        setAllAvailableColors
    } = useFinanceContext()

    const confirmDeletion = ()=>{
      const updatedArray = allAvailableBudget.filter((item)=>item.id !== singleDeletingBudget.id)
      const updatedColorArray = allAvailableColors.map((item)=>item.hex === singleDeletingBudget.theme ? {...item,alreadyUsed:false} : item)
      setAllAvailableColors(updatedColorArray)
      setAllAvailableBudget(updatedArray)
      setOpenDeleteBudget(false)
    }

  return (
    <div className='deleteBudget' onClick={()=>setOpenDeleteBudget(false)}>
      <div className='deleteBudget-modal'onClick={(e)=>e.stopPropagation()} >
        <div className='deleteBudget-modal-title'>
            <h2>Delete ‘{singleDeletingBudget.category}’?</h2>
            <Image src={cancelIcon} height={25.5} width={25.5} alt='cancel' style={{cursor:'pointer'}} onClick={()=>setOpenDeleteBudget(false)}/>
        </div>
        <p>Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.</p>
        <button onClick={confirmDeletion}>Yes, Confirm Deletion</button>
        <nav onClick={()=>setOpenDeleteBudget(false)}>No, Go Back</nav>
      </div>
    </div>
  )
}

export default DeleteBudget
