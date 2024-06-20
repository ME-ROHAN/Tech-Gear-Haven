import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='Contact-form'>
        {/* <div className='form'> */}
      <form action="" >
        <h1>SEND US A MESSAGE</h1>
        <input type="text" placeholder='Name' />
        <input type="Email" placeholder='E-mail'/>
        <input type="number" placeholder='Phone'/>
        <input className='form-message' type="text" placeholder='Your Message' />
        <button className='Send-but'> Send <img src="src/assets/send.svg" alt="" /> </button>
      </form>
        {/* </div> */}
      
    </div>
  )
}

export default Contact
