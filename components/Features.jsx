import React from 'react'

export default function Features() {
  return (
    <div className="max-w-[960px] mx-auto my-24 px-4">
      <div className="">
        <h1 className="text-2xl leading-[1.25] font-bold mb-6">
          Features
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          <div className="p-5 border border-[#333338]">
            <h4 className="text-base mb-2 font-semibold">Liveblocks</h4>
            <p className="text-[.875rem]">
              A collaborative whiteboard app with included share menu, documents
              listing, users, groups, permissions, and more.
            </p>
          </div>
          <div className="p-5 border border-[#333338]">
            <h4 className="text-base mb-2 font-semibold">Next.js</h4>
            <p className="text-[.875rem]">
              Best practices followed, using a mixture of SSR and custom API
              endpoints. Modify documents from both client and server.
            </p>
          </div>
          <div className="p-5 border border-[#333338]">
            <h4 className="text-base mb-2 font-semibold">
              User Interface
            </h4>
            <p className="text-[.875rem]">
              Adjust our reusable interface &amp; design system to fit your
              needs.
            </p>
          </div>
          <div className="p-5 border border-[#333338]">
            <h4 className="text-base mb-2 font-semibold">TypeScript</h4>
            <p className="text-[.875rem]">
              All custom client and server functions are fully typed, and easy
              to update.
            </p>
          </div>
          <div className="p-5 border border-[#333338]">
            <h4 className="text-base mb-2 font-semibold">NextAuth.js</h4>
            <p className="text-[.875rem]">
              Complete authentication, compatible with any NextAuth provider,
              including GitHub, Google, Auth0, and many more.
            </p>
          </div>
          <div className="p-5 border border-[#333338]">
            <h4 className="text-base mb-2 font-semibold">SWR</h4>
            <p className="text-[.875rem]">
              See data update live using the SWR (state-while-revalidate)
              library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
