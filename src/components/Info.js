import React from 'react'

function Info({ isClicked, name, setName, email, setEmail, phone, setPhone }) {
  return (
    <div className='info-container'>
        <h1>Personal Info</h1>
        <p>Please provide your name, email adress, phone number.</p>
        <form>
            <div>
                <div className='label'>
                    <label>Name</label>
                    <p className={!name && isClicked ? "warning" : ""}>This field is required</p>
                </div>
                <input 
                    className={!name && isClicked ? "warning" : ""}
                    type="text" 
                    value={name}
                    placeholder='e.g. Stephen King'
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <div className='label'>
                    <label>Email Adress</label>
                    <p className={!email && isClicked ? "warning" : ""}>This field is required</p>
                </div>
                <input 
                    className={!email && isClicked ? "warning" : ""}
                    type='email' 
                    value={email}
                    placeholder='e.g. stephenking@lorem.com'
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <div className='label'>
                    <label>Phone Number</label>
                    <p className={!phone && isClicked ? "warning" : ""}>This field is required</p>
                </div>
                <input
                    className={!phone && isClicked ? "warning" : ""}                    
                    type='text' 
                    value={phone}
                    placeholder='e.g. +1 234 567 890'
                    onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
        </form>
    </div>
  )
}

export default Info