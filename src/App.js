import React from 'react'
import './app.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {

  const [currentStep, setCurrentStep] = React.useState(1)

  function handleSubmit(name, email, phone, direction, plans, add_ons) {
    if (direction === "forward") {
      if(name && email && phone && currentStep === 1) {
      setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
      } else if (plans && currentStep === 2) {
        setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
      } else if (add_ons[0] && currentStep === 3) {
        setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
      } else if (currentStep === 4) {
        setCurrentStep(prevCurrentStep => prevCurrentStep + 1)
      }
    } else {
      setCurrentStep(prevCurrentStep => prevCurrentStep - 1)
    }
  }

  return (
    <div className='app'>
      <Sidebar currentStep={currentStep}/>
      <Main 
        handleSubmit={ handleSubmit }
        currentStep={ currentStep }
        setCurrentStep= { setCurrentStep }
      />
    </div>
  );
}

export default App;
