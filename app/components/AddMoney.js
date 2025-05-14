'use client'
import '@/app/styles/addMoney.scss'
import cancelIcon from '@/app/asset/public/cancelIcon.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useFinanceContext } from '../context/FinanceContext'

const AddMoney = () => {
  const { 
    setOpenAddMoney,
    singleAddMoneyDetails,
    allAvailablePots,
    setAllAvailablePots,
  } = useFinanceContext()
  const [amount,setAmount] = useState('')
  const [error,setError] = useState('')
  const [newAmount,setNewAmount] = useState(singleAddMoneyDetails.total)

  const onConfirmAddition = ()=>{
    if (amount >= 1) {
      const updatedArray = allAvailablePots.map((item)=>item.id === singleAddMoneyDetails.id ? {...item,total: newAmount} : item)
      setAllAvailablePots(updatedArray)
      setOpenAddMoney(false)
    }else{
      setError('Input a valid amount')
    }
  }

  return (
    <div className='addMoney' onClick={()=>setOpenAddMoney(false)}>
      <div className='addMoney-modal' onClick={(e)=>e.stopPropagation()}>
        <div className='addMoney-modal-title'>
            <h2>Add to ‘{singleAddMoneyDetails.name}’</h2>
            <Image src={cancelIcon} height={25.5} width={25.5} alt='cancel' style={{cursor:'pointer'}} onClick={()=>setOpenAddMoney(false)}/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.</p>
        <main>
          <header>
            <h6>New Amount</h6>
            <h5>${newAmount}</h5>
          </header>
          <footer>
            <section>
              <div style={{width:`${((singleAddMoneyDetails.total/singleAddMoneyDetails.target) * 100).toFixed(2)}%`}}></div>
              <aside style={{width:`${((amount/singleAddMoneyDetails.target) * 100).toFixed(2)}%`,maxWidth: `${(100 -((singleAddMoneyDetails.total/singleAddMoneyDetails.target) * 100)).toFixed(2)}%`}}></aside>
            </section>
            <article>
              <h3>{`${((amount/singleAddMoneyDetails.target) * 100).toFixed(2)}%`}</h3>
              <h4>Target of ${singleAddMoneyDetails.target}</h4>
            </article>
          </footer>
        </main>
        <nav>
          <label>Amount to Add</label>
          <input autoFocus type="number" placeholder='$ e.g. 200' value={amount} onChange={(e)=>{setAmount(e.target.value);setError('');setNewAmount(Number(singleAddMoneyDetails.total) + Number(e.target.value))}}/>
          <small>{error}</small>
        </nav>
        <button onClick={onConfirmAddition}>Confirm Addition</button>
      </div>
    </div>
  )
}

export default AddMoney
