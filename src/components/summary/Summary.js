import React from 'react'
import "./summary.css"

function Summary({ isClicked_1, plans, add_ons, setCurrentStep}) {

  let sum = isClicked_1 ? plans.desc.yearly.price : plans.desc.monthly

  
  const add_ons_element = add_ons.map((add_on, index) => {
    sum += isClicked_1 ? add_on.price.yearly : add_on.price.monthly
    return (
      <div key={index} className="add-on-summary">
        <p className='header'>{add_on.header}</p>
        <p className='price'>{isClicked_1 ? `+$${add_on.price.yearly}/yr` : `+$${add_on.price.monthly}/mo`}</p>
      </div>
    )
  })
  
  console.log(sum)

  return (
    <div className='summary-container'>
      <h1>Finishing Up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div className='components'>
        <div className='plan-summary'>
          <div>
            <h3>{`${plans.header} ${isClicked_1 ? "(Yearly)" : "(Monthly)"}`}</h3>
            <p onClick={()=>setCurrentStep(2)}>Change</p>
          </div>
          <h3>{isClicked_1 ? `$${plans.desc.yearly.price}/yr` : `$${plans.desc.monthly}/mo`}</h3>
        </div>
        {add_ons_element}
      </div>
      <div className='sum-container'>
        <p>{`Total ${isClicked_1 ? "(per year)" : "(per month)"}`}</p>
        <h3>{isClicked_1 ? `$${sum}/yr` : `+$${sum}/mo`}</h3>
      </div>
    </div>
  )
}

export default Summary