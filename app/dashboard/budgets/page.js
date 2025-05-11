import React from 'react'
import '@/app/styles/budgets.scss'
import Image from 'next/image'
import budgetsChart from '@/app/asset/public/budgetChart.png'
import threeDots from '@/app/asset/public/threeDots.svg'
import seeMore from '@/app/asset/public/seeMoreArrow.svg'
import { allBudgets, allTransactions } from '@/app/asset/datas'


const Budgets = () => {
  const randomNumber = ()=>{
    const randomNum = Math.floor(Math.random() * 49)
    return randomNum
  }
  return (
    <div className='budgets'>
      <div className='budgets-title'>
        <h3>Budgets</h3>
        <button>+ Add New Budget</button>
      </div>
      <div className='budgets-mainHolder'>
        <div className='budgets-mainHolderLeft'>
          <nav>
            <Image height={240} width={240} src={budgetsChart} alt='budget chart'/>
          </nav>
          <main>
            <h2>Spending Summary</h2>
            <section>
              <article style={{border:'none'}}>
                <div>
                  <header>
                    <aside></aside>
                    <p>Entertainment</p>
                  </header>
                  <footer>
                    <h5>$15.00</h5>
                    <h6>of $50.00</h6>
                  </footer>
                </div>
              </article>
              <article>
                <div>
                  <header>
                    <aside style={{backgroundColor:'#82C9D7'}}></aside>
                    <p>Bills</p>
                  </header>
                  <footer>
                    <h5>$150.00</h5>
                    <h6>of $750.00</h6>
                  </footer>
                </div>
              </article>
              <article>
                <div>
                  <header>
                    <aside style={{backgroundColor:'#F2CDAC'}}></aside>
                    <p>Dining Out</p>
                  </header>
                  <footer>
                    <h5>$133.00</h5>
                    <h6>of $75.00</h6>
                  </footer>
                </div>
              </article>
              <article>
                <div>
                  <header>
                    <aside style={{backgroundColor:'#626070'}}></aside>
                    <p>Personal Care</p>
                  </header>
                  <footer>
                    <h5>$40.00</h5>
                    <h6>of $100.00</h6>
                  </footer>
                </div>
              </article>
            </section>
          </main>
        </div>
        <div className='budgets-mainHolderRight'>
          {
            allBudgets.map((item,index)=>(
              <div className='budgets-mainContent' key={index}>
            <div className='budgets-mainContent-title'>
              <main>
                <aside style={{backgroundColor:item.theme}}></aside>
                <h6>{item.category}</h6>
              </main>
              <nav>
                <Image src={threeDots} height={3.5} width={13.5} alt='dots'/>
              </nav>
            </div>
            <div className='budgets-mainContent-amountBar'>
              <section>Maximum of ${item.maximum.toFixed(2)}</section>
              <nav>
                <aside style={{backgroundColor:item.theme,width:`${(item.spent/item.maximum) * 100}%`}}></aside>
              </nav>
              <main>
                <article>
                  <aside style={{backgroundColor:item.theme}}></aside>
                  <section>
                    <p>Spent</p>
                    <h6>${item.spent.toFixed(2)}</h6>
                  </section>
                </article>
                <article>
                  <aside style={{backgroundColor:'#F8F4F0'}}></aside>
                  <section>
                    <p>Remaining</p>
                    <h6>${item.remaining.toFixed(2)}</h6>
                  </section>
                </article>
              </main>
            </div>
            <div className='budgets-mainContent-latestSpending'>
              <header>
                <h4>Latest Spending</h4>
                <button>
                  <p>See All</p>
                  <Image src={seeMore} width={12} height={12} alt='see more'/>
              </button>
              </header>
              <footer>
                <main style={{borderTop:'none'}}>
                  <article>
                    <section>
                      <Image height={32} width={32} src={allTransactions[randomNumber()]?.avatar} alt='' style={{borderRadius:'100%'}}/>
                      <h5>{allTransactions[randomNumber()]?.name}</h5>
                    </section>
                    <aside>
                      <h6>-${allTransactions[randomNumber()]?.amount.toFixed(2).slice(1)}</h6>
                      <p>{allTransactions[randomNumber()]?.date.slice(0,10)}</p>
                    </aside>
                  </article>
                </main>
                <main>
                  <article>
                    <section>
                      <Image height={32} width={32} src={allTransactions[randomNumber()]?.avatar} alt='' style={{borderRadius:'100%'}}/>
                      <h5>{allTransactions[randomNumber()]?.name}</h5>
                    </section>
                    <aside>
                      <h6>-${allTransactions[randomNumber()]?.amount.toFixed(2).slice(1)}</h6>
                      <p>{allTransactions[randomNumber()]?.date.slice(0,10)}</p>
                    </aside>
                  </article>
                </main>
                <main>
                  <article>
                    <section>
                      <Image height={32} width={32} src={allTransactions[randomNumber()]?.avatar} alt='' style={{borderRadius:'100%'}}/>
                      <h5>{allTransactions[randomNumber()]?.name}</h5>
                    </section>
                    <aside>
                      <h6>-${allTransactions[randomNumber()]?.amount.toFixed(2).slice(1)}</h6>
                      <p>{allTransactions[randomNumber()]?.date.slice(0,10)}</p>
                    </aside>
                  </article>
                </main>
              </footer>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Budgets
