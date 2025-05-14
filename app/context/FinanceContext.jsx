'use client'
import React, { createContext, useContext, useState } from 'react'
import { allBudgets, allPots, colorDropArray, colorDropPotArray } from '../asset/datas'

const myContext = createContext()

export const useFinanceContext = ()=> useContext(myContext)

const FinanceContext = ({children}) => {
    const [openAddBudget,setOpenAddBudget] = useState(false)
    const [openEditBudget,setOpenEditBudget] = useState(false) 
    const [openDeleteBudget,setOpenDeleteBudget] = useState(false)
    const [openAddPot,setOpenAddPot] = useState(false)
    const [openEditPot,setOpenEditPot] = useState(false) 
    const [openDeletePot,setOpenDeletePot] = useState(false)
    const [openAddMoney,setOpenAddMoney] = useState(false)
    const [openWithdrawMoney,setOpenWithdrawMoney] = useState(false)
    const [singleEditingBudget,setSingleEditingBudget] = useState({})
    const [singleDeletingBudget,setSingleDeleteBudget] = useState({})
    const [singleEditingPot,setSingleEditingPot] = useState({})
    const [singleDeletingPot,setSingleDeletePot] = useState({})
    const [singleAddMoneyDetails,setSingleAddMoneyDetails] = useState({})
    const [singleWithdrawMoneyDetails,setSingleWithdrawMoneyDetails] = useState({})
    const [allAvailableBudget,setAllAvailableBudget] = useState(allBudgets)
    const [allAvailablePots,setAllAvailablePots] = useState(allPots)
    const [allAvailableColors,setAllAvailableColors] = useState(colorDropArray)
    const [allAvailablePotColors,setAllAvailablePotColors] = useState(colorDropPotArray)

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
        setSingleDeleteBudget,
        openAddPot,
        setOpenAddPot,
        allAvailablePotColors,
        setAllAvailablePotColors,
        allAvailablePots,
        setAllAvailablePots,
        openEditPot,
        setOpenEditPot,
        singleEditingPot,
        setSingleEditingPot,
        openDeletePot,
        setOpenDeletePot,
        singleDeletingPot,
        setSingleDeletePot,
        openAddMoney,
        setOpenAddMoney,
        singleAddMoneyDetails,
        setSingleAddMoneyDetails,
        openWithdrawMoney,
        setOpenWithdrawMoney,
        singleWithdrawMoneyDetails,
        setSingleWithdrawMoneyDetails
    }
    
    
  return (
    <myContext.Provider value={defaultValue}>
      {children}
    </myContext.Provider>
  )
}

export default FinanceContext
