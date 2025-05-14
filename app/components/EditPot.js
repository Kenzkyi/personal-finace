'use client'
import '@/app/styles/addComponent.scss'
import cancelIcon from '@/app/asset/public/cancelIcon.svg'
import Image from 'next/image'
import arrowDown from '@/app/asset/public/arrowDown.svg'
import { colorDropArray } from '../asset/datas'
import { useState } from 'react'
import { useFinanceContext } from '../context/FinanceContext'

const EditPot = () => {
    const { 
            setAllAvailablePots,
            allAvailablePots,
            allAvailablePotColors,
            setAllAvailablePotColors,
            singleEditingPot,
            setOpenEditPot
        } = useFinanceContext()
    const [showColorDropdown,setShowColorDropdown] = useState(false)
    const [target,setTarget] = useState(singleEditingPot.target)
    const [error,setError] = useState({})
        
    const [colorSelected,setColorSelected] = useState(allAvailablePotColors.find((item)=>item.hex === singleEditingPot.theme))
    const potName = singleEditingPot.name

    const onClickColor = (myColor)=>{
        setColorSelected(myColor)
        setShowColorDropdown(false)
    }


        const validateForm = ()=>{
        let allError = {};
        if (target.toString().trim() === '') {
            allError.target = 'Please input amount'
        }
        if (target.toString().trim() !== '' && !Number(target)){
            allError.target = 'Enter a valid amount'
        }

        setError(allError)
        return Object.keys(allError).every((item)=> item === '')
    }

    const onSaveChanges = ()=>{
        let newColorArray = []
        if (validateForm()) {
            const updatedArray = allAvailablePots.map((item)=>item.id === singleEditingPot.id ? {...item,theme:colorSelected.hex,target:Number(target)} : item)
            if (colorSelected.hex === singleEditingPot.theme){
                newColorArray = allAvailablePotColors.map((item)=>item.hex === colorSelected.hex ? {...item,alreadyUsed: true} : item)
            }else{
                newColorArray = allAvailablePotColors.map((item)=>item.hex === colorSelected.hex ? {...item,alreadyUsed: true} : item).map((item)=>item.hex === singleEditingPot.theme ? {...item,alreadyUsed: false} : item)
            }
            console.log(updatedArray)
            setAllAvailablePots(updatedArray)
            setAllAvailablePotColors(newColorArray)
            setOpenEditPot(false)
        }
    }

  return (
    <div className='addBudget' onClick={()=>setOpenEditPot(false)}>
      <div className='addBudget-modal' onClick={(e)=>{setShowColorDropdown(false);e.stopPropagation()}}>
        <div className='addBudget-modal-title'>
            <h2>Edit Pot</h2>
            <Image src={cancelIcon} height={25.5} width={25.5} alt='cancel' style={{cursor:'pointer'}} onClick={()=>setOpenEditPot(false)}/>
        </div>
        <p>If your saving targets change, feel free to update your pots.</p>
        <main>
            <nav>
                <label>Pot Name</label>
                <input placeholder='e.g. Rainy Days' value={potName} disabled={true}/>
                <small>{error.category}</small>
            </nav>
            <nav>
                <label>Target</label>
                <input placeholder='$ e.g 2000' value={target} onChange={(e)=>setTarget(e.target.value)}/>
                <small>{error.target}</small>
            </nav>
            <nav>
                <label>Theme</label>
                <section onClick={(e)=>{setShowColorDropdown(true);e.stopPropagation()}}>
                    <article>
                        <div style={{backgroundColor:colorSelected?.hex}}></div>
                        <h4>{colorSelected?.name}</h4>
                    </article>
                    <Image src={arrowDown} width={11} height={6} alt='down'/>
                    {
                        showColorDropdown && <aside>
                        {
                            allAvailablePotColors.map((item,index)=>(
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

export default EditPot
