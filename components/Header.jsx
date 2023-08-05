import React, { useState } from 'react'
import { FaBars, FaCheckCircle, FaTimes } from 'react-icons/fa'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <section className="bg-[#fef6e1] w-full">
            <div className="flex justify-between items-center max-w-[1300px] relative mx-auto p-7 border-b border-grey">
                <div className="flex justify-between items-center lg:gap-5 ">
                    {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.d32faf19.png&w=384&q=75" alt="" width="100px" className />
                    }
                    <div className>
                        <ul className="md:flex justify-between px-3 gap-3 xl:gap-10 text-[20px] hidden md:visible  ">
                            <li className="px-2  hover:bg-grey hover:border-1"><a href="#">Home</a></li>
                            <li className="px-2  hover:bg-grey hover:border-1"><a href="#" />About</li>
                            <li className="px-2  hover:bg-grey hover:border-1"><a href="#" />Pricing</li>
                            <li className="px-2  hover:bg-grey hover:border-1"><a href="#" />Contact</li>
                            <li className="px-2  hover:bg-grey hover:border-1"><a href="#" />Pages</li>
                            <a href="#" className=" md:hidden text-[20px] text-black">Sign in</a>
                        </ul>
                    </div>
                    {showMobileMenu && <div className="w-[100%] h-[350px] absolute left-0 top-[98%] bg-[#fef6e1]  px-3 gap-10 text-[20px] md:hidden">
                        <ul className=" flex flex-col text-left justify-center py-4 px-3 " id="myLinks">
                            <li className="px-2 text-gray-800 text-[18px] border-b border-gray-700 py-2 "><a href="#">Home</a></li>
                            <li className="px-2 text-gray-800 text-[18px] border-b border-gray-700 py-2 "><a href="#" />About</li>
                            <li className="px-2 text-gray-800 text-[18px] border-b border-gray-700 py-2 "><a href="#" />Pricing</li>
                            <li className="px-2 text-gray-800 text-[18px] border-b border-gray-700 py-2 "><a href="#" />Contact</li>
                            <li className="px-2 text-gray-800 text-[18px] border-b border-gray-700 py-2 "><a href="#" />Pages</li>
                            <a href="#" className=" md:hidden text-[20px] text-black text-center w-full border border-black my-6 p-2  ">Sign in</a>
                        </ul>
                    </div>}
                </div>
                <div className=" flex lg:gap-7  gap-3 justify-center items-center lg:px-3  ">
                    <a href="#" className="hidden lg:block text-[20px] text-black">Sign in</a>
                    <button className="px-2 lg:px-5 py-2 lg:py-3  bg-black text-white text-[400] text-[14px]">Sign up Free</button>
                    <a href="javascript:void(0);" className="p-1 md:hidden border icon" onClick={() => { setShowMobileMenu(!showMobileMenu) }}>
                        {showMobileMenu ? <FaTimes size={30} className="" /> : <FaBars size={30} className="" />}
                    </a>
                </div>
            </div>

            <div className="pt-20 md:pt-32 pb-14 md:pb-[208px] xl:pb-0 px-8 md:mx-[80px]">
                <div className="pb-14">
                    <div className="w-full xl:max-w-[36rem] mx-0">
                        <h1 className="md:text-[50px] text-[45px] leading-[50px] md:text-center xl:text-start md:leading-[68px] font-semibold ">Starting a podcast has never been easier</h1>
                        <div className="flex flex-col md:flex-row lg:flex-col">
                            <div className="flex gap-3 my-6 md:mx-2  ">
                                <FaCheckCircle className="text-[20px]" />
                                <h2 className="text-grey-200 text-[15px]">One click integrations, that work for you.</h2>
                            </div>
                            <div className="flex gap-3 my-6 md:mx-2  ">
                                <FaCheckCircle className="text-[20px]" />
                                <h2 className="text-grey-200 text-[15px]">Just record and hit publish, it’s that simple.</h2>
                            </div>
                            <div className="flex gap-3 my-6 md:mx-2">
                                <FaCheckCircle className="text-[20px]" />
                                <h2 className="text-grey-200 text-[15px]">Get weekly reports straight to your inbox with key metrics.</h2>
                            </div>
                        </div>

                        <div className="md:mt-[30px] flex flex-col md:flex-row justify-center xl:justify-start">
                            <button className="p-3 m-2 border bg-black text-white text-[20px] ">Get your Free account</button>
                            <button className="p-3 m-2 border border-black  text-black text-[20px] hover:bg-black hover:text-white cursor-pointer ">See Our Solutions</button>
                        </div>
                        <div className="w-full text-center xl:text-start">
                            <small className="text-[16px]">30-day free trial. No card required.</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="bg-[#FFFAED] px-8 md:mr-[120px]">
                    <div className="xl:px-12 py-2 xl:py-12 xl:pl-14 xl:mx-[80px] md:max-w-[23rem] xl:max-w-[36rem] relative">
                        <BiSolidQuoteAltLeft size={30} color="#DBE0E2" className="xl:absolute top-8 left-8" />
                        <div className="mx-auto max-w-[650px]">
                            <div className="flex flex-col md:flex-row ">
                                <h3 className="lg:px-[20px] pr-[5px] text-[16px] text-[#334155] md:text-[20px]">Wavvy has taken the headache out of our podcast hosting, and allowed us to focus on what we love to do – record great content, and grow a loyal audience.</h3>
                            </div>

                            <div className="flex items-center gap-6 mt-7 md:mr-7 mx-2">
                                {
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-01.19a82b70.jpg&w=64&q=75" alt="" className="rounded-full" />
                                }
                                <div className>
                                    <h2>
                                        Courtland Allen</h2>
                                    <p className="text-gray-400">Indie Hackers Podcast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block xl:p-12 pb-0 xl:pl-14 px-8 xl:px-0 xl:mx-[80px] md:max-w-[32rem] xl:max-w-[36rem] absolute right-0 bottom-0">
                    {// eslint-disable-next-line @next/next/no-img-element
                        <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-hero.398a4a99.jpg&w=640&q=75" alt=" " className="mt-[100px] h-fit w-[340px] xl:w-[576px]" />}
                </div>
            </div>
        </section>

    )
}
