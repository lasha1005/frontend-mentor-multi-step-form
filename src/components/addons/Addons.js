import React from 'react'
import './addons.css'

function Addons({ isClicked_1, add_On_Data, add_ons, setAdd_ons }) {

  const add_On_Element = add_On_Data.map((add_on, index) => {
    
    function append_Add_On(e) {
      add_on.isChecked = e.target.checked
      if(e.target.checked) {
        setAdd_ons(prevAdd_ons => {
          return [...prevAdd_ons, add_on]
        })
      } else {
        const filtered_add_ons = add_ons.filter(element => element.header !== add_on.header)
        setAdd_ons(filtered_add_ons)
      }
    }
    
    return (
      <div className={`add-on ${add_on.isChecked && "checked"}`} key={index}>
        <input type="checkbox" checked={add_on.isChecked} onChange={append_Add_On}/>
        <div>
          <h4>{add_on.header}</h4>
          <p>{add_on.desc}</p>
        </div>
        <p>{isClicked_1 ? `+$${add_on.price.yearly}/yr` : `+$${add_on.price.monthly}/mo`}</p>
      </div>
    )
  })

  return (
    <div className='add-ons-container'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>
        {add_On_Element}
      </div>
    </div>
  )
}

export default Addons