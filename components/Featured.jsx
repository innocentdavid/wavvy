import React from 'react'

export default function Featured() {
  return (
<section className="md:mt-[100px] mt-[70px] flex justify-center flex-col items-center">
  <h2 className=" text-[20px] md:text-[28px] text-gray-400">AS FEATURED IN</h2>
  <div className="flex flex-wrap justify-center gap-3 flex-col mt-2  md:flex-row">
    {
        // eslint-disable-next-line @next/next/no-img-element
        <img src="https://wavvy-next-preview.vercel.app/_next/static/media/buzzfeed.910ed4f7.svg" className="md:p-7 p-2 " alt="" />}
              {// eslint-disable-next-line @next/next/no-img-element
        <img src="https://wavvy-next-preview.vercel.app/_next/static/media/daily-news.07f63296.svg" className="md:p-7 p-2 " alt="" />}
              {// eslint-disable-next-line @next/next/no-img-element
        <img src="https://wavvy-next-preview.vercel.app/_next/static/media/entrepreneur.41efb504.svg" className="md:p-7 p-2 " alt="" />}
              {// eslint-disable-next-line @next/next/no-img-element
        <img src="https://wavvy-next-preview.vercel.app/_next/static/media/quartz.84bd5564.svg" className="md:p-7 p-2 " alt="" />}
              {// eslint-disable-next-line @next/next/no-img-element
        <img src="https://wavvy-next-preview.vercel.app/_next/static/media/wired.8d4051e0.svg" className="md:p-7 p-2 " alt="" />}
  </div>
</section>

  )
}
