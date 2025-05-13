'use client'
import React, { createContext, useContext, useState } from 'react'
import { allBudgets, colorDropArray } from '../asset/datas'

const myContext = createContext()

export const useFinanceContext = ()=> useContext(myContext)

const FinanceContext = ({children}) => {
    const [openAddBudget,setOpenAddBudget] = useState(false)
    const [openEditBudget,setOpenEditBudget] = useState(false) 
    const [openDeleteBudget,setOpenDeleteBudget] = useState(false)
    const [singleEditingBudget,setSingleEditingBudget] = useState({})
    const [singleDeletingBudget,setSingleDeleteBudget] = useState({})
    const [allAvailableBudget,setAllAvailableBudget] = useState(allBudgets)
    const [allAvailableColors,setAllAvailableColors] = useState(colorDropArray)

    const defaultValue = {
        openAddBudget,
        setOpenAddBudget,
        allAvailableBudget,
        setAllAvailableBudget,
        allAvailableColors,
        setAllAvailableColors,
        openEditBudget,
        setOpenEditBudget,
        singleEditingBudget,
        setSingleEditingBudget,
        openDeleteBudget,
        setOpenDeleteBudget,
        singleDeletingBudget,
        setSingleDeleteBudget
    }
    
    
  return (
    <myContext.Provider value={defaultValue}>
      {children}
    </myContext.Provider>
  )
}

export default FinanceContext
