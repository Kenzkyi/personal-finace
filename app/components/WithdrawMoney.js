'use client'
import '@/app/styles/addMoney.scss'
import cancelIcon from '@/app/asset/public/cancelIcon.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useFinanceContext } from '../context/FinanceContext'

const WithdrawMoney = () => {
    const { 
    setOpenWithdrawMoney,
    singleWithdrawMoneyDetails,
    allAvailablePots,
    setAllAvailablePots,
  } = useFinanceContext()
  const [amount,setAmount] = useState('')
  const [error,setError] = useState('')
  const [newAmount,setNewAmount] = useState(singleWithdrawMoneyDetails.total)

    const onConfirmWithdrawal = ()=>{
    if (amount >= 1 && !newAmount.toString().startsWith('-')) {
      const updatedArray = allAvailablePots.map((item)=>item.id === singleWithdrawMoneyDetails.id ? {...item,total: newAmount} : item)
      setAllAvailablePots(updatedArray)
      setOpenWithdrawMoney(false)
    }else{
      setError('Input a valid amount')
    }
  }

  return (
    <div className='addMoney' onClick={()=>setOpenWithdrawMoney(false)}>
      <div className='addMoney-modal' onClick={(e)=>e.stopPropagation()}>
        <div className='addMoney-modal-title'>
            <h2>Withdraw from ‘{singleWithdrawMoneyDetails.name}’</h2>
            <Image src={cancelIcon} height={25.5} width={25.5} alt='cancel' style={{cursor:'pointer'}} onClick={()=>setOpenWithdrawMoney(false)}/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.</p>
        <main>
          <header>
            <h6>New Amount</h6>
            <h5>${newAmount}</h5>
          </header>
          <footer>
            <section>
              <div style={{display:'flex',background:'transparent',borderRadius:4,gap:2,width:`${(singleWithdrawMoneyDetails.total/singleWithdrawMoneyDetails.target) * 100}%`,maxWidth:`${(singleWithdrawMoneyDetails.total/singleWithdrawMoneyDetails.target) * 100}%`}}>
              <aside style={{backgroundColor:'black',borderRadius: '4px 0px 0px 4px',width: newAmount.toString().startsWith('-') ? '0%' : `${100 - ((amount/singleWithdrawMoneyDetails.total) * 100)}%`}}></aside>
              <aside style={{backgroundColor:'red',width: newAmount.toString().startsWith('-') ? '100%' : `${((amount/singleWithdrawMoneyDetails.total) * 100)}%`,maxWidth:`100%`}}></aside>
              </div>
            </section>
            <article>
              <h3>{`${((amount/singleWithdrawMoneyDetails.target) * 100).toFixed(2)}%`}</h3>
              <h4>Target of ${singleWithdrawMoneyDetails.target}</h4>
            </article>
          </footer>
        </main>
        <nav>
          <label>Amount to Withdraw</label>
          <input autoFocus type="number" placeholder='$ e.g. 200' value={amount} onChange={(e)=>{
            setError('');
            const value = Number(e.target.value)
            if (value <= singleWithdrawMoneyDetails.total) {
              setAmount(e.target.value);
              setNewAmount(Number(singleWithdrawMoneyDetails.total) - Number(e.target.value))
            }
          }}/>
          <small>{error}</small>
        </nav>
        <button onClick={onConfirmWithdrawal}>Confirm Withdrawal</button>
      </div>
    </div>
  )
}

export default WithdrawMoney
