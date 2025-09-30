import React, { useState } from 'react'
import Container from '../Components/Container'

const Contacts = () => {
  window.scrollTo(0,0);

  let [text, settext] = useState('')
  let handleInput = (e)=>{
    settext(e.target.value);
    
  }


  return (
    <div>
      <Container>
        <div className="">
          <div className="">
            <input onChange={handleInput} className='border-1 p-[10px]' type="text" placeholder='orange'/>
            <button  className='ml-[10px] p-[10px] cursor-pointer border-1'>Submite</button>
          </div>
      <h3>Contacts</h3>
        </div>
      </Container>
    </div>
  )
}

export default Contacts
