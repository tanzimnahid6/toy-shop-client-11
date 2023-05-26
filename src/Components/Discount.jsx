import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Discount = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div data-aos="fade-up">
    
      <div className="grid md:grid-cols-3 bg-[#a7d5ef] gap-8 my-8 p-8 ">
        <div className=" w-full p-8 h-64  ">
          <h1 className="text-3xl font-bold">Best Selling Toy </h1>
          <h1 className="text-6xl font-extrabold mx-2">
            <span className="text-purple-600">33%</span> OFF
          </h1>
          <h1 className="text-xl font-bold">Most Durable Product </h1>
          <p className="">Do not Miss Out! Save 33 % on SUPER TURBO CAR!</p>
          <Link to='alltoy'><div className="btn btn-sm btn-error mt-2">Shop</div></Link>
        </div>
        <div className="md:col-span-2 ">
          <div className="w-full h-64">
            <img
              className="w-full rounded-md object-cover h-64"
              src="https://i.ibb.co/XjWgZvs/pexels-mike-bird-97353.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
