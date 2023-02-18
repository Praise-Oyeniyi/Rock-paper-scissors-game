import React from 'react'

const ScoreHead = (props) => {
  
  

  return (
    <div className=" uppercase type-score p-4 flex items-center justify-between rounded-md border border-white sm:py-2">
        <ul className="type leading-none font-semibold text-base sm:text-sm sm:leading-[.8]">
        <li>Rock</li>
        <li>Paper</li>
        <li>Scissors</li>
        <li className={`${props.bonus?'block':'hidden'}`}>Lizard</li>
        <li className={`${props.bonus?'block':'hidden'}`}>Spock</li>
        </ul>
        <div className="score bg-white h-full rounded-md py-2 px-4 text-center">
        <h5 className='text-[#2a46c0] font-bold text-sm'>Score</h5>
        <h1 className='text-[#606e85] text-4xl -tracking-wider font-bold'>{props.score}</h1>
        </div>

    </div>
  )
}

export default ScoreHead