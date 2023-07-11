import React from 'react'

function Sidebar({currentStep}) {
  return (
    <div className='side-bar'>
        <section>
            <p className={`num ${currentStep === 1 ? 'current' : ""}`}>1</p>
            <div>
                <p>STEP 1</p>
                <h4>YOUR INFO</h4>
            </div>
        </section>
        <section>
            <p className={`num ${currentStep === 2 ? 'current' : ""}`}>2</p>
            <div>
                <p>STEP 2</p>
                <h4>SELECT PLAN</h4>
            </div>
        </section>
        <section>
            <p className={`num ${currentStep === 3 ? 'current' : ""}`}>3</p>
            <div>
                <p>STEP 3</p>
                <h4>ADD-ONS</h4>
            </div>
        </section>
        <section>
            <p className={`num ${currentStep >= 4 ? 'current' : ""}`}>4</p>
            <div>
                <p>SREP 4</p>
                <h4>SUMMARY</h4>
            </div>
        </section>
    </div>
  )
}

export default Sidebar