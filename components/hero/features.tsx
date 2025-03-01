import React from "react"
import { TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaAngular, FaPython } from "react-icons/fa"
import { SiNuxtdotjs, SiVite, SiAstro, SiGatsby } from "react-icons/si"
import { GrSkype } from "react-icons/gr"
import { WordRotate } from "@/components/magicui/word-rotate"
import Link from "next/link"

const Features = () => {
  return (
    <div className="relative  h-auto ">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:130px_120px]" />

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-green-500/20 via-black to-orange-500/20"
        style={{
          backgroundPosition: "center bottom",
          backgroundSize: "100% 50%",
        }}
      />

      <main className="relative  h-auto">
        <div className="container mx-auto px-0 w-full gap-y-2 flex flex-col md:flex-row  gap-x-4 ">
          <div className="w-[210px]">
            <div className=" flex gap-x-2 items-center pl-6 ">
              <p className="text-[1.2rem]">Your</p>
              <WordRotate
                className="text-[1.5rem] font-bold text-pink-600 dark:text-white"
                words={[
                  "Next",
                  "React",
                  "Angular",
                  "Python",
                  "Nuxt",
                  "Vite",
                  "Astro",
                  "Gatsby",
                  "Skype",
                ]}
              />
            </div>
            <p className=" -mt-3 pl-6 text-[1.2rem]">your way</p>
          </div>
          <div className="  w-full flex-1/3 md:ml-4 mt-4">
            <div className=" grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10 items-center">
              <div className=" group w-full h-full flex items-center justify-center ">
                <TbBrandNextjs className="inline-block size-10  text-white group-hover:text-orange-600 " />
              </div>
              <div className=" group w-full h-full  flex items-center justify-center p-2">
                <FaReact className="inline-block size-10  text-white group-hover:text-blue-600 " />
              </div>
              <div className=" group w-full h-full  flex items-center justify-center p-2">
                <SiNuxtdotjs className="inline-block size-10  text-white group-hover:text-green-600 " />
              </div>
              <div className=" group w-full h-full  flex items-center justify-center p-2">
                <SiAstro className="inline-block size-10  text-white group-hover:text-red-600 " />
              </div>
              <div className=" group w-full h-full  flex items-center justify-center p-2">
                <SiVite className="inline-block size-10  text-white group-hover:text-amber-300 " />
              </div>
              <div className=" group w-full h-full   flex items-center justify-center p-2">
                <FaAngular className="inline-block size-10  text-white group-hover:text-fuchsia-600 " />
              </div>
              <div className=" group w-full h-full    flex items-center justify-center p-2">
                <SiGatsby className="inline-block size-10  text-white group-hover:text-lime-500 " />
              </div>
              <div className=" group w-full h-full    flex items-center justify-center p-2">
                <FaPython className="inline-block size-10  text-white group-hover:text-yellow-500 " />
              </div>
              <div className=" group w-full h-full    flex items-center justify-center p-2">
                <GrSkype className="inline-block size-10  text-white group-hover:text-purple-600 " />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Features
