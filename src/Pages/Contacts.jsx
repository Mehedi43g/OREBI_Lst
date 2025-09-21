import React, { useState } from 'react'
import Container from '../Components/Container'

const Contacts = () => {
  let [text, settext] = useState('')
  let handleInput = (e)=>{
    settext(e.target.value);
    
  }

  let handleSubmit = ()=>{
    alert(text)
  }
  return (
    <div>
      <Container>
        <div className="">
          <div className="">
            <input onChange={handleInput} className='border-1 p-[10px]' type="text" placeholder='orange'/>
            <button onClick={handleSubmit} className='ml-[10px] p-[10px] cursor-pointer border-1'>Submite</button>
          </div>
      <h3>Contacts</h3>
        </div>
      </Container>
    </div>
  )
}

export default Contacts
