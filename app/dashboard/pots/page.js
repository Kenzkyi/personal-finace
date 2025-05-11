import React from 'react'
import '@/app/styles/pots.scss'
import Image from 'next/image'
import threeDots from '@/app/asset/public/threeDots.svg'
import { allPots } from '@/app/asset/datas'

const Pots = () => {
  return (
    <div className='pots'>
      <div className='pots-title'>
        <h2>Pots</h2>
        <button>+ Add New Pot</button>
      </div>
      <div className='pots-body'>
        {
          allPots.map((item,index)=>(
            <div className='pots-bodyContent' key={index}>
          <div className='pots-bodyContent-title'>
            <main>
              <aside style={{backgroundColor:item.theme}}></aside>
              <h4>{item?.name}</h4>
            </main>
            <nav>
              <Image src={threeDots} height={3.5} width={13.5} alt='dots'/>
            </nav>
          </div>
          <div className='pots-bodyContent-chart'>
            <main>
              <p>Total Saved</p>
              <h3>${item?.total.toFixed(2)}</h3>
            </main>
            <nav>
              <section>
                <div style={{backgroundColor:item.theme,width:`${((item.total/item.target) * 100).toFixed(2)}%`}}></div>
              </section>
              <article>
                <h6>{`${((item.total/item.target) * 100).toFixed(2)}`}%</h6>
                <h5>Target of ${item?.target}</h5>
              </article>
            </nav>
          </div>
          <div className='pots-bodyContent-buttons'>
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Pots
