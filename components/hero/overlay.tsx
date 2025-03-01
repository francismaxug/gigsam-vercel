import React from "react"
import Link from "next/link"
import Image from "next/image"

const Overlay = () => {
  return (
    <div className="relative  h-auto ">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:80px_90px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-black to-orange-500/20" />

      <main className="relative pt-32  h-fit">
        <div className="container mx-auto px-0">
          <div className="max-w-lg mx-auto text-center space-y-4 ">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              Your complete platform for the web.
            </h1>
            <p className="text-[0.8rem] text-white/70 max-w-sm mx-auto">
              Vercel provides the developer tools and cloud infrastructure to
              build, scale, and secure a faster, more personalized web.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 pt-4">
              <Link
                href=""
                className="bg-white text-black text-[0.7rem] flex gap-x-1 items-center justify-center hover:bg-white/90  px-4 py-1.5 rounded-full transition-colors"
              >
                <svg height="16" viewBox="0 0 74 64" className="text-black">
                  <path
                    d="M37.5896 0L75.1792 65H0L37.5896 0Z"
                    fill="currentColor"
                  />
                </svg>
                <p> Start Deploying</p>
              </Link>
              <Link
                href=""
                className="bg-black border text-white text-[0.7rem]   px-4 py-1.5 hover:bg-gray-800 rounded-full transition-colors"
              >
                <p>Get a Demo</p>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/v2.png"
          width={1000}
          height={1000}
          alt="Vercle"
          className=" w-full h-full   object-fill object-bottom"
        />
      </main>
    </div>
  )
}

export default Overlay
