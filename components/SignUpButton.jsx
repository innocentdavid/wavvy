import React from 'react'

export default function SignUpButton() {
  return (
    <button className="flex items-center gap-2 h-[2.25rem] bg-white text-black px-[14px] rounded-[.4rem]">
      <span className="Button_icon__V_a2N">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg>
      </span>
      <span className="Button_label__k4nES">Sign in</span>
    </button>
  )
}
