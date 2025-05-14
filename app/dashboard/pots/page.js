'use client'
import { useState } from 'react'
import '@/app/styles/pots.scss'
import Image from 'next/image'
import threeDots from '@/app/asset/public/threeDots.svg'
import { useFinanceContext } from '@/app/context/FinanceContext'

const Pots = () => {
  const [showThreedots,setShowThreedots] = useState(null)
    const { 
      setOpenAddPot,
      setOpenEditPot,
      setSingleEditingPot,
      setOpenDeletePot,
      setSingleDeletePot,
      allAvailablePots,
      setOpenAddMoney,
      setSingleAddMoneyDetails,
      setOpenWithdrawMoney,
      setSingleWithdrawMoneyDetails
    } = useFinanceContext()
  
    const onclickOnEditBudget = (budgetItem)=>{
      setSingleEditingPot(budgetItem)
      setOpenEditPot(true)
      setShowThreedots(null)
    }
  
    const onclickOnDeleteBudget = (budgetItem)=>{
      setSingleDeletePot(budgetItem)
      setOpenDeletePot(true)
      setShowThreedots(null)
    }
  return (
    <div className='pots' onClick={()=>setShowThreedots(null)}>
      <div className='pots-title'>
        <h2>Pots</h2>
        <button onClick={()=>setOpenAddPot(true)}>+ Add New Pot</button>
      </div>
      <div className='pots-body'>
        {
          allAvailablePots.map((item,index)=>(
            <div className='pots-bodyContent' key={index}>
          <div className='pots-bodyContent-title'>
            <main>
              <aside style={{backgroundColor:item.theme}}></aside>
              <h4>{item?.name}</h4>
            </main>
            <nav>
              <Image src={threeDots} height={3.5} width={13.5} alt='dots' onClick={(e)=>{setShowThreedots(index);e.stopPropagation()}}/>
              {
                  showThreedots === index ? <div>
                  <section style={{borderTop:'none'}}>
                    <article onClick={(e)=>{onclickOnEditBudget(item);e.stopPropagation()}}>Edit Budget</article>
                  </section>
                  <section>
                    <article style={{color:'red'}} onClick={(e)=>{onclickOnDeleteBudget(item);e.stopPropagation()}}>Delete Budget</article>
                  </section>
                </div> : null
                }
            </nav>
          </div>
          <div className='pots-bodyContent-chart'>
            <main>
              <p>Total Saved</p>
              <h3>${item?.total.toFixed(2)}</h3>
            </main>
            <nav>
              <section style={{maxWidth:'100%'}}>
                <div style={{backgroundColor:item.theme,width:`${((item.total/item.target) * 100).toFixed(2)}%`,maxWidth:'100%'}}></div>
              </section>
              <article>
                <h6>{`${((item.total/item.target) * 100).toFixed(2)}`}%</h6>
                <h5>Target of ${item?.target}</h5>
              </article>
            </nav>
          </div>
          <div className='pots-bodyContent-buttons'>
            <button onClick={()=>{setOpenAddMoney(true);setSingleAddMoneyDetails(item)}}>+ Add Money</button>
            <button onClick={()=>{setOpenWithdrawMoney(true);setSingleWithdrawMoneyDetails(item)}}>Withdraw</button>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Pots
