import Container from './Container'
import logo from '../assets/logo.png'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { MdPeople, MdSearch } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Header = () => {
  let [showN, setShowN] = useState()


  let [show, setShow] = useState()
  let cateRaf = useRef()
  useEffect(() => {
    document.addEventListener("click", (e) => {
      console.log(cateRaf.current.contains(e.target) == true);
      if (cateRaf.current.contains(e.target) == true) {
        setShow(true)


      } else {
        setShow(false)
      }

    })
  }, [show])

  const [showw, setShoww] = useState(false);
  const cateRRaf = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (cateRRaf.current && cateRRaf.current.contains(e.target)) {
        setShoww((prev) => !prev);
      } else {
        setShoww(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  let [akk,setAkk] = useState(false)
  let handelfalse = ()=>{
    setAkk(false)
  }



  return (
    <>
      <div className="bg-[#FFFFFF] select-none">
        <Container>
          <div className="flex py-3 items-center">
            <div className="w-5/12">
              <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className="w-4/12">
              <ul className='flex gap-2'>
                <Link to="/">
                <li className='cursor-pointer text-[14px] font-dm hover:font-bold w-[50px] duration-300'>Home</li>
                
                </Link>
                
                <Link to="/shop">
                <li className='cursor-pointer text-[14px] font-dm hover:font-bold w-[50px] duration-300'>Shop</li>
                
                </Link>
                <Link to="/about">
                
                <li className='cursor-pointer text-[14px] font-dm hover:font-bold w-[50px] duration-300'>About</li>
                </Link>
                <Link to="/contacts">
                
                <li className='cursor-pointer text-[14px] font-dm hover:font-bold w-[70px] duration-300'>Contacts</li>
                </Link>
                <Link to= "/journal">
                
                <li className='cursor-pointer text-[14px] font-dm hover:font-bold w-[50px] duration-300'>Journal</li>
                </Link>
              </ul>
            </div>
            <div className="w-3/12">
              {/* for space */}
            </div>

          </div>
        </Container>
      </div>

      {/*......................... 2nd part of Header ......................... */}
      <div className="bg-[#F5F5F3] select-none">
        <Container >
          <div className="py-3 flex items-center">
            <div className="w-4/12 relative ">
              <div ref={cateRaf} className="font-dm text-[14px] flex items-center gap-2 ">
                <FaBars />
                <h4>Shop by Category</h4>
                <div className="">
                  {show &&
                    <div className=" absolute top-10 left-0 w-[50%] z-[10] ">
                      <ul className='bg-[#262626] rounded-[5px]'>
                        <li onClick={() => setShowN(!showN)} className='font-dm font-medium text-[14px] text-[#ffffffb0] hover:text-white pl-[10px] h-[30px] pt-[5px] hover:pl-[20px] flex items-center justify-between pr-[10px] duration-300 group'>Accesories <FaAngleRight />

                          <div className=" absolute top-0 right-[-234%] w-[500px] rounded-[5px] bg-white shadow-md text-black flex gap-2 group-hover:flex gap-2 hidden group-hover:block ">
                            <div className="pl-[5px] h-[180px] w-[140px]  flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626]  cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            < div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer '>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Wallets</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Wallets</li>
                              </ul>
                            </div>
                          </div>


                        </li>

                        <li className='font-dm font-medium text-[14px] text-[#ffffffb0] hover:text-white pl-[10px] h-[30px] pt-[5px] hover:pl-[20px] flex items-center justify-between pr-[10px] duration-300 group'>Furniture <FaAngleRight />

                          <div className=" absolute top-0 right-[-234%] w-[500px] rounded-[5px] bg-white shadow-md text-black group-hover:flex gap-2 hidden group-hover:block">
                            <div className="pl-[5px] h-[160px] w-[140px]  flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626]  cursor-pointer'>Living Room Furniture</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sofa</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Armchair</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Coffee Table</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>TV Stand</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bookshelf</li>
                              </ul>
                            </div>
                            < div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer '>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Wallets</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Wallets</li>
                              </ul>
                            </div>
                          </div>


                        </li>
                        <li className='font-dm font-medium text-[14px] text-[#ffffffb0] hover:text-white pl-[10px] h-[30px] pt-[5px] hover:pl-[20px] flex items-center justify-between pr-[10px] duration-300 group'>Electronics <FaAngleRight />
                          <div className=" absolute top-0 right-[-236%] w-[500px] rounded-[5px] bg-white shadow-md text-black group-hover:flex gap-2 hidden group-hover:block">
                            <div className="pl-[5px] h-[160px] w-[140px]  flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626]  cursor-pointer'>Living Room Furniture</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sofa</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Armchair</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Coffee Table</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>TV Stand</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bookshelf</li>
                              </ul>
                            </div>
                            < div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer '>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Wallets</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Wallets</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className='font-dm font-medium text-[14px] text-[#ffffffb0] hover:text-white pl-[10px] h-[30px] pt-[5px] hover:pl-[20px] flex items-center justify-between pr-[10px] duration-300 group'>Clothes <FaAngleRight />
                          <div className=" absolute top-0 right-[-236%] w-[500px] rounded-[5px] bg-white shadow-md text-black group-hover:flex gap-2 hidden group-hover:block">
                            <div className="pl-[5px] h-[160px] w-[140px]  flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626]  cursor-pointer'>Living Room Furniture</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sofa</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Armchair</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Coffee Table</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>TV Stand</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bookshelf</li>
                              </ul>
                            </div>
                            < div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer '>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Wallets</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Wallets</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className='font-dm font-medium text-[14px] text-[#ffffffb0] hover:text-white pl-[10px] h-[30px] py-[5px] hover:pl-[20px] flex items-center justify-between pr-[10px] duration-300 group'>Bags <FaAngleRight />
                          <div className=" absolute top-0 right-[-236%] w-[500px] rounded-[5px] bg-white shadow-md text-black group-hover:flex gap-2 hidden group-hover:block">
                            <div className="pl-[5px] h-[160px] w-[140px]  flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626]  cursor-pointer'>Living Room Furniture</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sofa</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Armchair</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Coffee Table</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>TV Stand</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bookshelf</li>
                              </ul>
                            </div>
                            < div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer '>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Wallets</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Wallets</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className='font-dm font-medium text-[14px] text-[#ffffffb0] hover:text-white pl-[10px] h-[30px] pt-[5px] hover:pl-[20px] flex items-center justify-between pr-[10px] duration-300 group'>Home appliances <FaAngleRight />
                          <div className=" absolute top-0 right-[-236%] w-[500px] rounded-[5px] bg-white shadow-md text-black group-hover:flex gap-2 hidden group-hover:block">
                            <div className="pl-[5px] h-[160px] w-[140px]  flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626]  cursor-pointer'>Living Room Furniture</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sofa</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Armchair</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Coffee Table</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>TV Stand</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bookshelf</li>
                              </ul>
                            </div>
                            < div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer '>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Wallets</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Fashion & Style</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Watches</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Sunglasses</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Bracelets</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Necklaces</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] duration-300 cursor-pointer'>Rings</li>
                              </ul>
                            </div>
                            <div className="pl-[5px] h-[180px] w-[140px] flex flex-col justify-between">
                              <h3 className='font-dm font-bold text-[14px] text-[#262626] cursor-pointer'>Bags & Wallets</h3>
                              <ul className="flex flex-col justify-between py-[8px] h-full">
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Backpacks</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Handbags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Crossbody Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Tote Bags</li>
                                <li className='font-dm text-[12px] text-[#767676] hover:text-[14px] hover:text-[#262626] hover:font-bold h-[30px] cursor-pointer duration-300'>Wallets</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="w-5/12 relative">
              <form action="/">
                <input className='outline-none bg-[#FFFFFF] font-dm text-[14px]  w-full pl-[20px] pr-[35px] py-[10px] text-[#C4C4C4] rounded-[10px]' type="text" placeholder='Search Products' />
              </form>
              <div className=" absolute right-[15px] top-[30%] ">
                <CiSearch />
              </div>
            </div>
            <div className="w-3/12 relative z-[30]">
              <div className="pl-[20px] flex justify-end gap-3 items-center">
                <div ref={cateRRaf} className=" cursor-pointer">
                  <MdPeople className='text-[20px]' />
                </div>
                <div onClick={()=>setAkk(!akk)} className=" cursor-pointer">
                  <FaCartShopping />
                </div>
              </div>
              {showw && 
              <div className="My Account,Log-Out absolute top-10 right-10">
                <div className="text-center">
                  <div className=" px-[30px] py-2 border-1 border-b-0 hover:bg-[black] duration-300 border-[#F0F0F0] text-[14px] font-dm font-bold hover:text-[#FFFFFF] ">
                    <p >MY Account</p>
                  </div>
                  <div className=" px-[30px] py-2 border-1  hover:bg-[black] duration-300 border-[#F0F0F0] text-[14px] font-dm font-bold  hover:text-[#FFFFFF]">
                    <p >Log Out</p>
                  </div>
                </div>
              </div>
              }
              {akk &&  
              
              <div className=" absolute top-12 right-0">
                <div className="flex items-center gap-2 bg-[#F5F5F3] p-[20px]">
                  <div className=" w-[60px] h-[60px] bg-[#5f635e]">
                    
                  </div>
                  <div className="txt">
                    <h4>Black Smart Watch</h4>
                    <p>$44.00</p>
                  </div>
                  <div onClick={()=>handelfalse(akk)} >
                    <RxCross2 className="text-[20px] hover:text-[green] cursor-pointer"/>
                  </div>
                </div>
                  <div className="bg-[#FFFFFF] py-[5px]">
                    <p className='text-[#767676] font-dm text-[14px]'>Subtotal: <span className='text-[#262626] font-dm text-[14px] font-bold'>$44.00</span></p>
                    <div className="flex items-center justify-around pt-[10px]">
                      <div className="text-[14px] font-bold font-dm text-[#262626] border-1 px-[20px] py-[10px] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300">View Cart</div>
                      <div className="text-[14px] font-bold font-dm text-[#262626] border-1 px-[20px] py-[10px] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300">Checkout</div>
                    </div>
                  </div>
              </div>
              }
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Header