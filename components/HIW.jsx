import React from 'react'

export default function HIW() {
  return (
<section className="flex flex-col lg:flex-row justify-between mt-[50px] md:mt-[150px] ">
  <div className="flex-[2] w-full px-[10px] md:px-[30px] " style={{background: '#334155'}}>
    <div className="md:mt-16">
      <div className="px-[5px] mx-[10px] my-9 md:my-0 md:px-[10px] md:mx-[60px] flex justify-center flex-col  ">
        <h1 className="text-[28px] mt-9 md:mt-0 md:text-[48px] font-bold text-white ">How Wavvy works</h1>
        <div className="flex gap-3 mt-4 md:mt-0 items-center py-3 md:py-5 border-b w-full lg:w-[70%] border-gray-500">
          <span className=" text-[25px] md:text-[30px] text-white font-bold">01</span>
          <p className="text-[18px] md:text-[25px] text-gray-300 font-bold">Sign up in a few minutes</p>
        </div>
        <div className="flex gap-3 items-center  py-3 md:py-5 border-b w-full lg:w-[70%] border-gray-500">
          <span className=" text-[25px] md:text-[30px] text-white font-bold">02</span>
          <p className="text-[18px] md:text-[25px] text-gray-300 font-bold">Migrate episodes with a few click</p>
        </div>
        <div className="flex gap-3 items-center  py-3 md:py-5 border-b w-full lg:w-[70%] border-gray-500">
          <span className="text-[25px] md:text-[30px] text-white font-bold">03</span>
          <p className="text-[18px] md:text-[25px] text-gray-300 font-bold">Your account is open; you can start recording and leveraging our platform</p>
        </div>
        <div className="w-50% my-7">
          <button className="px-6 py-4 border border-white text-[23px]  text-white hover:bg-white hover:text-black ">Get your free account</button>
        </div>
      </div>
    </div>
  </div>

      <div className="flex-1 relative bg-[url(https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocess.a9338c8e.jpg&w=3840&q=75),linear-gradient(to_right,_#334155,_#334155)] bg-right bg-cover">
    <div className="min-w-full min-h-full z-[2]" style={{ backgroundImage: 'linear-gradient(to right, #334155, rgba(225, 225, 225, 0))'}} />
    {// eslint-disable-next-line @next/next/no-img-element
    // <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocess.a9338c8e.jpg&w=3840&q=75" width height="140px" className="md:w-[1400px] w-[900px]" style={{opacity: 1}} alt="" />
    }
  </div>
</section>

  )
}
