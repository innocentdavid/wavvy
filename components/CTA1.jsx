import React from 'react'

export default function CTA1() {
  return (
    <section className="md:mt-[120px] mt-[180px] flex flex-1 flex-col lg:flex-row justify-between relative mx-3 p-2 md:p-[100px]">
      <div className="max-w-[400px] md:max-w-[700px] xl:max-w-full mx-auto xl:mr-0 relative">
        <div className="mx-3 relative xl:absolute xl:top-[20%] xl:left-0">
          {// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-image-01.4ee2ebf6.jpg&w=640&q=75" alt="" className="w-full xl:w-[580px] h-fit" />}

          <div className="border absolute bg-[#E6E5E0] max-w-[250px] md:max-w-[290px] xl:top-[80%] top-[-80px] md:top-[-70px] xl:left-0 2xl:left-[-40px] right-0 p-3 md:p-0">
            <h1 className=" p-1 md:p-5 text-[40px] font-bold">1000+</h1>
            <p className=" px-2 md:px-4 md:py-2">Podcasters use Waves to power their podcast</p>
          </div>
        </div>

        <div className="lg:flex justify-end">
          <div className="border-2 border-[#F7F7F5] bg-[#F7F7F5] py-[40px] px-[10px] md:p-[56px] xl:px-[150px] xl:w-[59%]">
            <h1 className=" text-[28px] md:text-[40px] mt-0 md:mt-[20px] font-semibold ">Never worry about sound quality again</h1>
            <p className="text-[15px]  md:text-[20px] leading-[30px] md:leading-[40px] py-4">Lorem ipsum dolor sit amet orci aliquam porta adipiscing elementum purus netus laoreet pulvinar. Vestibulum platea iaculis eu ac netus lobortis porta sodales urna mollis ac. Elit viverra magna euismod aenean diam ullamcorper eu nec venenatis. Eleifend lacinia luctus sagittis hendrerit habitasse cras dapibus.</p>
            <button className="px-6 py-3 border border-black mb-[26px] md:mb-0 mt-7 mx-2 md:mx-0">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
