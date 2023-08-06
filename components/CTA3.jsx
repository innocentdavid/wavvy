import React from 'react'

export default function CTA3() {
  return (
    <section className="bg-[#fef6e1] md:mt-[700px] mt-[10px] flex gap-7 p-[15px] md:p-[25px] justify-between md:px-14">
      <div className="flex-1 flex flex-col justify-centermd:px-9 ">
        <h1 className="text-[30px] md:text-[48px] text-center md:text-left font-semibold">Start growing your podcast today</h1>
        <p className="text-[20px] px-2 md:px-0 max-w-[300px] md:max-w-[500px] my-7">Lorem ipsum dolor sit amet porta augue quisque enim. Vel ornare fames mauris dictumst aliqua purus praesent quis ut eros laoreet odio.</p>
        <button className="text-[18px] mx-1 md:mx-0 py-4 mb-8 px-7 bg-[#0f172a] text-white w-full md:w-fit">Get your free account</button>
      </div>

      <div className="flex-1 hidden md:flex items-center justify-center">

        {// eslint-disable-next-line @next/next/no-img-element
          <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-image-02.3eec208a.jpg&w=384&q=75" alt="" className="w-[145px] h-[217px] lg:max-h-[190px] lg:max-w-[284px]" />
        }
        {// eslint-disable-next-line @next/next/no-img-element
          <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-image-01.3b5f6dd9.jpg&w=640&q=75" alt="" className="w-[200px] h-[300px] lg:max-h-[266px] lg:max-w-[355px]" />
        }
      </div>
    </section>


  )
}
