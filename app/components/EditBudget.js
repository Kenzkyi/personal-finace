'use client'
import '@/app/styles/addComponent.scss'
import cancelIcon from '@/app/asset/public/cancelIcon.svg'
import Image from 'next/image'
import arrowDown from '@/app/asset/public/arrowDown.svg'
import { colorDropArray } from '../asset/datas'
import { useState } from 'react'
import { useFinanceContext } from '../context/FinanceContext'

const EditBudget = () => {
    const { 
            setAllAvailableBudget,
            allAvailableBudget,
            allAvailableColors,
            setAllAvailableColors,
            singleEditingBudget,
            setOpenEditBudget
        } = useFinanceContext()
    const [showColorDropdown,setShowColorDropdown] = useState(false)
    const [showCategoryDropdown,setShowCategoryDropdown] = useState(false)
    const [maximumSpend,setMaximumSpend] = useState(singleEditingBudget.maximum)
    const [error,setError] = useState({})
        
    const [colorSelected,setColorSelected] = useState(allAvailableColors.find((item)=>item.hex === singleEditingBudget.theme))
    const [categorySelected,setCategorySelected] = useState(singleEditingBudget.category)
      const category = ['Entertainment','Bills','Groceries','Dining Out','Transportation','Personal Care','Education','Lifestyle','Shopping','General']

    const onClickColor = (myColor)=>{
        setColorSelected(myColor)
        setShowColorDropdown(false)
    }

    const onCategoryClick = (myCatergory)=>{
        setCategorySelected(myCatergory)
        setShowCategoryDropdown(false)
    }

        const validateForm = ()=>{
        let allError = {};
        if (maximumSpend.toString().trim() === '') {
            allError.maximumSpend = 'Please input amount'
        }
        if (maximumSpend.toString().trim() !== '' && !Number(maximumSpend)){
            allError.maximumSpend = 'Enter a valid amount'
        }

        setError(allError)
        return Object.keys(allError).every((item)=> item === '')
    }

    const onSaveChanges = ()=>{
        let newColorArray = []
        if (validateForm()) {
            const updatedArray = allAvailableBudget.map((item)=>item.id === singleEditingBudget.id ? {...item,theme:colorSelected.hex,maximum:Number(maximumSpend),remaining:Number(maximumSpend)-item.spent} : item)
            if (colorSelected.hex === singleEditingBudget.theme){
                newColorArray = allAvailableColors.map((item)=>item.hex === colorSelected.hex ? {...item,alreadyUsed: true} : item)
            }else{
                newColorArray = allAvailableColors.map((item)=>item.hex === colorSelected.hex ? {...item,alreadyUsed: true} : item).map((item)=>item.hex === singleEditingBudget.theme ? {...item,alreadyUsed: false} : item)
            }
            setAllAvailableBudget(updatedArray)
            setAllAvailableColors(newColorArray)
            setOpenEditBudget(false)
        }
    }

  return (
    <div className='addBudget' onClick={()=>setOpenEditBudget(false)}>
      <div className='addBudget-modal' onClick={(e)=>{setShowCategoryDropdown(false);setShowColorDropdown(false);e.stopPropagation()}}>
        <div className='addBudget-modal-title'>
            <h2>Edit Budget</h2>
            <Image src={cancelIcon} height={25.5} width={25.5} alt='cancel' style={{cursor:'pointer'}} onClick={()=>setOpenEditBudget(false)}/>
        </div>
        <p>As your budgets change, feel free to update your spending limits.</p>
        <main>
            <nav>
                <label>Budget Category</label>
                <section style={{cursor: 'default'}}>
                    <h6>{categorySelected}</h6>
                    {/* <Image src={arrowDown} width={11} height={6} alt='down'/> */}
                    {
                        showCategoryDropdown && <aside>
                        {
                            category.map((item,index)=>(
                        <header key={index} style={{borderColor: index === 0 ? 'white' : '#F2F2F2'}} >
                            <footer onClick={(e)=>{onCategoryClick(item);e.stopPropagation()}}>
                                <div className='colorDropdown-holder'>
                                    <h4>{item}</h4>
                                </div>
                            </footer>
                        </header>
                            ))
                        }
                    </aside>
                    }
                </section>
                <small>{error.category}</small>
            </nav>
            <nav>
                <label>Maximum Spend</label>
                <input placeholder='$ e.g 2000' value={maximumSpend} onChange={(e)=>setMaximumSpend(e.target.value)}/>
                <small>{error.maximumSpend}</small>
            </nav>
            <nav>
                <label>Theme</label>
                <section onClick={(e)=>{setShowColorDropdown(true);setShowCategoryDropdown(false);e.stopPropagation()}}>
                    <article>
                        <div style={{backgroundColor:colorSelected.hex}}></div>
                        <h4>{colorSelected.name}</h4>
                    </article>
                    <Image src={arrowDown} width={11} height={6} alt='down'/>
                    {
                        showColorDropdown && <aside>
                        {
                            allAvailableColors.map((item,index)=>(
                                item.alreadyUsed ? 
                                <header key={index} style={{borderColor: index === 0 ? 'white' : '#F2F2F2'}}>
                            <footer style={{cursor:'not-allowed'}}>
                                <div className='colorDropdown-holder'>
                                    <div style={{backgroundColor:item.hex}}></div>
                                    <h4>{item.name}</h4>
                                </div>
                                <h3>Already used</h3>
                            </footer>
                        </header>
                        :
                        <header key={index} style={{borderColor: index === 0 ? 'white' : '#F2F2F2'}} >
                            <footer onClick={(e)=>{onClickColor(item);e.stopPropagation()}}>
                                <div className='colorDropdown-holder'>
                                    <div style={{backgroundColor:item.hex}}></div>
                                    <h4>{item.name}</h4>
                                </div>
                            </footer>
                        </header>
                            ))
                        }
                    </aside>
                    }
                </section>
                <small>{error.color}</small>
            </nav>
        </main>
        <button onClick={onSaveChanges}>Save Changes</button>
      </div>
    </div>
  )
}

export default EditBudget
