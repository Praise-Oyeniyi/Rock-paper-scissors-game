import React from 'react'

const BottomButtons = (props) => {
  
  return (
    <div className="rules w-full flex justify-between items-center text-base font-semibold">
        <button className='py-[0.4rem] px-8 border rounded-md border-white uppercase' onClick={()=>{props.knowRules(true)}}>Rules</button>
        <button className='py-[0.4rem] px-8 border rounded-md border-white uppercase' onClick={()=>props.bonusAdd(!props.bonus)}>Bonus</button>
    </div>
  )
}

export default BottomButtons