import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const questions = [
    {
        question: "Do I need specific tech?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "Where are my podcasts stored?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "What if I want to move to a different platform later?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "Are larger podcasts more expensive?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "Is it secure?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "What if I don’t do video?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "How does automatic transcription work?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "What if I decide to cancel in the future?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    },
    {
        question: "Do you offer a free plan?",
        answer: "Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.",
    }
]

export default function FAQ() {
    return (
        <section className="relative max-w-[1400px] mx-auto md:flex md:flex-row-reverse justify-start xl:p-[30px] md:p-[10px] mt-[100px]">
            <div className="">
                {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="https://wavvy-next-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffaq-image.89029d50.jpg&w=1080&q=75" alt="" className="h-fit max-h-[320px] sm:max-h-[470px] w-full md:w-[450px] lg:w-[590px] lg:h-fit" />}
            </div>

            <div className="px-5 md:px-24">
                <div className="
                relative z-[2] md:absolute -top-[130px] md:top-[70px] md:left-10 
                bg-[#f7f7f5] border border-[#ccd5df] 
                w-full md:w-[70%] px-7 md:px-14
            ">
                    <h1 className="text-[30px] lg:text-[50px] font-bold mt-5 md:mt-10">Frequently asked questions</h1>
                    {questions.map((q, index) => {
                        return (
                            <Card key={`question-${index + 1}`} q={q?.question} a={q?.answer} total={questions.length} i={index + 1} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const Card = ({ q, a, total, i }) => {
    const [showAns, setShowAns] = useState(false)

    return (
        <div
            className={`w-full ${total !== i && "border-b"} border-[#ccd5df] py-[32px]`}>
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAns(!showAns)}>
                <h3 className="text-[18px] font-semibold lg:text-[20px] text-[#444]">
                    {q}</h3>
                {showAns ? <FaMinus /> : <FaPlus />}
            </div>
            {showAns && <div className="text-[14px] px-1 pt-5">
                <p>{a}</p>
            </div>}
        </div>
    )
}