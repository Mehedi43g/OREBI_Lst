import { IoAdd } from 'react-icons/io5'
import Container from '../Components/Container'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { ApiData } from '../Components/ContextApi'


import { TabItem, Tabs } from "flowbite-react";
import { useDispatch } from 'react-redux'



// import { addToCart } from '../Components/Slice/productSlic'



const ProductDetails = () => {
  let info = useContext(ApiData)
  let productId = useParams()
  let dispatch = useDispatch()



  let [singleProducts, setSingleProducts] = useState({})

  let singleProduct = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProducts(response.data);
    })
  }
  useEffect(() => {
    singleProduct();
  }, []);

  console.log(info);

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return singleProducts.rating > index + 1 ? (<IoMdStar />) : singleProducts.rating > number ? <IoMdStarHalf /> :
      (<IoMdStarOutline />);

  })


  let mainPrice = (singleProducts.price / 100) * singleProducts.discountPercentage;
  let mulPrice = singleProducts.price - mainPrice;
  console.log(singleProducts.reviews);


  let [onk, seoShowK] = useState(true);
  let [showpp, setShowpp] = useState(false);
  let [onshow, setOnShow] = useState(1);

  let handleCart = (item) => {
    // dispatch(addToCart({ ...item, qun: 1 }));

  }
  return (
    <div className='pb-[10px] select-none'>
      <Container>

        <div className="flex justify-center gap-5 py-3">

          <div className="w-3/12 cursor-pointer">
            <img className='w-full' src={singleProducts.thumbnail} alt="" />
          </div>

          <div className="w-3/12 cursor-pointer">
            <img className='w-full' src={singleProducts.thumbnail} alt="" />
          </div>
        </div>


        <div className="w-6/12">
          <div className="flex gap-2 ">
            <div className="flex text-[20px] text-[#FFD881]">
              {clientRating}

            </div>

            <div className="">
              <p className='text-[#767676] font-dm text-[14px] '>{singleProducts.rating}</p>
            </div>
          </div>
          <div className="flex gap-6 items-center border-b-1 pb-[20px] border-[#F0F0F0] py-[20px]">
            <p className='text-[#767676] font-dm text-[16px] line-through'>$ {singleProducts.price}</p>
            <p className='text-[#262626] font-dm font-bold text-[20px]'>$ {mulPrice.toFixed(2)}</p>
          </div>
          <div className="py-2 border-b-[1px] border-[#F0F0F0]">
            <div className="flex items-center gap-3">
              <div className="flex">
                <p className='text-[#262626] font-dm text-[14px]  font-bold'>QUANTITY:</p>
              </div>
              <div className="flex items-center border-[1px] border-[#F0F0F0] gap-3">
                <div className="text-[20px] w-[50px] text-center cursor-pointer" onClick={() => setOnShow(onshow > 1 ? onshow - 1 : 1)}>-</div>
                <div className=" text-[20px] w-[50px] text-center ">{onshow}</div>
                <div className="text-[20px] w-[50px] px-[10px] cursor-pointer" onClick={() => setOnShow(onshow + 1)}>+</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 py-3 border-b-[1px] border-[#F0F0F0]">
            <p className='font-dm font-bold text-[14px] text-[#262626]'>STATUS:</p>
            <p className='font-dm text-[14px] text-[#767676]'>{singleProducts.stock} In stock</p>
          </div>

          <div className="flex gap-5 py-[10px] border-b-[1px] border-[#F0F0F0]">
            <div className="w-[150px] text-center  py-[10px] border-[1px] hover:bg-black hover:text-white duration-300 text-[#262626] font-dm font-bold cursor-pointer">
              <button className='text-[14px]' >Add to Wish List</button>
            </div>
            <div onClick={() => handleCart(singleProducts)} className="w-[150px] text-center py-[10px] border-[1px] hover:bg-black hover:text-white duration-300 text-[#262626] font-dm font-bold cursor-pointer">

              <button className='text-[14px]'>Add to Cart</button>
            </div>
          </div>

          <div className="py-[10px] ">
            <div className="flex justify-between items-center gap-3 py-3 " onClick={() => setShowpp(!showpp)}>
              <p className='font-dm font-bold text-[#262626] text-[14px]'>FEATURES  & DETAILS</p>
              <IoAdd className='font-bold text-[#262626] text-[20px]' />
            </div>
            {showpp &&
              <div className="">
                <p>{singleProducts.description}</p>
              </div>
            }
            <div className="border-b-[1px] border-[#F0F0F0] pb-3"></div>


            <div className="flex justify-between items-center gap-3 py-3" onClick={() => seoShowK(!onk)}>
              <p className='font-dm font-bold text-[#262626] text-[14px]'>SHIPPING & RETURNS</p>
              <IoAdd className='font-bold text-[#262626] text-[20px]' />
            </div>
            {onk &&
              <div className="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            }
            <div className="border-b-[1px] border-[#F0F0F0] pb-3"></div>
          </div>
          <div className=" gap-5">
            
            <Tabs className="gap-4" aria-label="Tabs with icons" variant="underline">

              <TabItem active title="Description">
                <p className="text-gray-700 leading-relaxed">{singleProducts?.description}</p>
              </TabItem>
              <TabItem title={`Reviews (${singleProducts?.reviews?.length || 0})`}>
                {singleProducts?.reviews?.length > 0 ? (
                  <div className="space-y-6">
                    {singleProducts.reviews.map((item, index) => {
                      const reviewStars = Array.from({ length: 5 }, (_, starIndex) => {
                        const number = starIndex + 0.5;
                        return item.rating > starIndex + 1 ? (
                          <IoMdStar key={starIndex} className="text-yellow-400 text-[18px]" />
                        ) : item.rating > number ? (
                          <IoMdStarHalf key={starIndex} className="text-yellow-400 text-[18px]" />
                        ) : (
                          <IoMdStarOutline key={starIndex} className="text-yellow-400 text-[18px]" />
                        );
                      });

                      return (
                        <div
                          key={index}
                          className="p-4 rounded-xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition duration-300"
                        >
                          <div className="flex justify-between">
                            <div className="font-semibold text-sm mb-2">{item.reviewerName}</div>
                            <div className="text-xs text-gray-400 mb-1">
                              {new Date(item.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric", })}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-600 text-sm font-medium">Rating:</span>
                            <div className="flex gap-1">{reviewStars}</div>
                          </div>
                          <p className="text-gray-700 text-sm">{item.comment}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-6">No reviews yet. Be the first to review!</p>
                )}
              </TabItem>
            </Tabs>


          </div>
        </div>

        <div className="w-full">
          <div className="py-[10px] border-b-[1px] border-[#F0F0F0] ">
            <p className='pt-[20px] font-dm text-[14px] text-[#767676]'>1 review for Product</p>
          </div>
          <div className="flex justify-between py-5">
            <div className="flex gap-10 items-center">
              <p className='font-dm text-[16px] text-[#262626]'>John Ford</p>
              <div className="flex items-center text-amber-200 text-[20px]">
                {clientRating}
              </div>
            </div>
            <div className="font-dm text-[16px] text-[#767676]">
              <p>6 months ago</p>
            </div>
          </div>
          <div className=" border-b-[1px] border-[#F0F0F0]">
            <p className='font-dm text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="w-6/12 py-[10px]">
          <div className="pt-[10px] pb-[30px]">
            <p className='font-dm font-bold text-[20px] text-[#262626]'>Add a Review</p>
          </div>
          <div className="">
            <div className="">
              <p className='font-dm font-bold text-[20px] text-[#262626]'>Name</p>
              <form action="">
                <input className='w-full border-b-[1px] border-[#F0F0F0] py-[10px] focus:outline-none ' type="text" placeholder='Your name here' />
              </form>
            </div>
            <div className="">
              <p className='font-dm font-bold text-[20px] text-[#262626]'>Email</p>
              <form action="">
                <input className='w-full border-b-[1px] border-[#F0F0F0] py-[10px] focus:outline-none ' type="text" placeholder='Your email here' />
              </form>
            </div>
            <div className="">
              <p className='font-dm font-bold text-[20px] text-[#262626]'>Review</p>
              <form action="">
                <input className='w-full  focus:outline-none  border-b-[1px] border-[#F0F0F0] pt-[10px] pb-[70px] pl-[5px] ' type="text" placeholder='Your review here' />
              </form>
            </div>
            <div className="py-[10px]">
              <div className="text-center w-[200px] py-[10px] bg-black text-white cursor-pointer">
                <p>Post</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default ProductDetails
