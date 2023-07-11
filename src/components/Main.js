import React from 'react'
import Info from './Info'
import SelectPlan from './selectplan/SelectPlan'
import Addons from './addons/Addons'
import Summary from './summary/Summary'
import Thankyou from './thankyou/Thankyou'

function Main({ handleSubmit, currentStep, setCurrentStep }) {
  const [isClicked, setIsClicked] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [plans, setPlans] = React.useState()
  const [isClicked_1, setIsClicked_1] = React.useState(false)
  const [add_ons, setAdd_ons] = React.useState([])
  const [add_On_Data, setAdd_On_Data] = React.useState([
    {
      isChecked: false,
      header: "Online service",
      desc: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10
      }
    },
    {
      isChecked: false,
      header: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20
      }
    },
    {
      isChecked: false,
      header: "Custumizable profile",
      desc: "Custom theme on your profile",
      price: {
        monthly: 3,
        yearly: 30
      }
    },
  ])
  const planData= [
    {
      isClicked: false,
      path: "assets/images/icon-arcade.svg",
      header: "Arcade",
      desc: {
        monthly: 9,
        yearly: {
          price: 90,
          discount: "2 months free"
        }
      }
    },
    {
      isClicked: false,
      path: "assets/images/icon-advanced.svg",
      header: "Advanced",
      desc: {
        monthly: 12,
        yearly: {
          price: 120,
          discount: "2 months free"
        }
      }
    },
    {
      isClicked: false,
      path: "assets/images/icon-pro.svg",
      header: "Pro",
      desc: {
        monthly: 15,
        yearly: {
          price: 150,
          discount: "2 months free"
        }
      }
    },
  ]

  function handleClick() {
    setIsClicked_1(prevIsClicked => !prevIsClicked)
  }

  const styles_1 = {
    opacity: currentStep > 1 ? 1 : 0,
    cursor: currentStep > 1 ? "pointer" : "auto",
  }

  const styles_2 = {
    display: currentStep >= 5 ? "none" : "flex",
  }

  console.log(plans)

  return (
    <main>
      {
        currentStep === 1 ?
        <Info 
        handleSubmit={ handleSubmit } 
        isClicked={isClicked}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      /> : currentStep === 2 ?
      <SelectPlan 
        planData={planData}
        plans={plans}
        setPlans={setPlans}
        isClicked_1={isClicked_1}
        handleClick={handleClick}
      /> :
      currentStep === 3 ?
      <Addons 
        isClicked_1 = {isClicked_1}
        add_ons={add_ons}
        setAdd_ons = {setAdd_ons}
        add_On_Data={add_On_Data}
      /> :
      currentStep === 4 ?
      <Summary 
        setCurrentStep={setCurrentStep}
        isClicked_1={isClicked_1}
        plans={plans}
        add_ons={add_ons}
      /> :
      <Thankyou />
      }
      <div className='button-container' style={styles_2}>
        <button 
          className='go-back'
          style={styles_1}
          onClick={() => {
            handleSubmit(name, email, phone, "back")
          }}
        >
          Go Back
        </button>

        <button 
          className={`${currentStep === 4 ? "confirm" : "next-step"}`}
          onClick={()=>{
            handleSubmit(name, email, phone, "forward", plans, add_ons)
            setIsClicked(true)
          }}
        >
          {currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </main>
  )
}

export default Main