import React from 'react'
import "./selectplan.css"

function SelectPlan({ planData, plans, setPlans, handleClick, isClicked_1 }) {

  
  const planElements = planData.map((plan, index) => {
    function handlePlan(plan) {
      setPlans(plan)
    }
    return (
      <button className={`plan ${plans && plans.header === plan.header? "plan_clicked": ""}`} key={index} onClick={() => handlePlan(plan)}>
        <img src={plan.path}/>
        <div>
          <h3>{plan.header}</h3>
          <p>{isClicked_1 ? `$${plan.desc.yearly.price}/yr` : `$${plan.desc.monthly}/mo`}</p>
          {isClicked_1 && <p className='discount'>2 months free</p>}
        </div>
      </button>
    )
  })

  return (
    <div className='select-plan-container'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className='plan-container'>
        {planElements}
      </div>
      <div className={`switch-container ${isClicked_1 && "clicked"}`}>
        <p className='monthly'>Monthly</p>
        <div className="switch" onClick={handleClick}>
          <div className='circle'></div>
        </div>
        <p className='yearly'>Yearly</p>
      </div>
    </div>
  )
}

export default SelectPlan