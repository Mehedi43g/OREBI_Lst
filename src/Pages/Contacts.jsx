import React, { useState } from 'react'
import Container from '../Components/Container'
import { useDispatch } from 'react-redux'
import { allproduct } from '../Components/Slice/ProductSlic'

const Contacts = () => {
  let dispatch = useDispatch()
  let [text, settext] = useState('')
  let handleInput = (e)=>{
    settext(e.target.value);
    
  }

  let handleSubmit = ()=>{
    dispatch(allproduct(text))
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
