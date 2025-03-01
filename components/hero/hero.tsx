import React from "react"
import { ParticlesCom } from "./particles"
import Overlay from "./overlay"
import { MdOutlineStarRate, MdOutlineVerifiedUser } from "react-icons/md"
import { BsChat } from "react-icons/bs"
import Image from "next/image"
import { LineChartt } from "./line-chart"
import { IoMdRefresh } from "react-icons/io"
import { RiSaveLine } from "react-icons/ri"
import { PiBuildingsFill } from "react-icons/pi"
import { GlobeWorld } from "./globe"
import Orbit from "./orbit"
import Footer from "../footer/footer"
import Features from "./features"
import Reliability from "./reliability"

const LandingPage = () => {
  return (
    <div className=" space-y-3">
      <ParticlesCom />
      <div className="border border-neutral-900 bg-transparent">
        <Overlay />
        <div className=" grid lg:grid-cols-[1fr_300px]  md:grid-cols-1  sm:grid-cols-1 gap-y-6 px-8 py-12 pb-16 gap-x-7 text-neutral-500 border-b border-neutral-900">
          <div className=" space-y-5">
            <div className=" leading-7">
              <span className=" text-white font-semibold ">runway</span> build
              times went from 7m to 40s. <br />
              <span className=" text-white text-[0.8rem]  ">Leonard.Ai </span>
              saw a 95% reduction in page <br /> load times.{" "}
              <span className=" text-white  font-semibold ">_zapier </span> saw
              24x faster builds.
            </div>
            <div className=" flex gap-x-0.5 items-center  text-[0.6rem] rounded-full border   border-gray-600 w-fit">
              {[
                "AI Apps",
                "Web Apps",
                "Ecommerce",
                "Marketing",
                "Platforms",
              ].map((val, i) => (
                <div key={i}>
                  <button
                    className={`  ${
                      i === 0
                        ? "rounded-full border border-gray-500 bg-gray-900/50"
                        : ""
                    }   w-full px-2 py-1 cursor-pointer `}
                  >
                    {val}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className=" space-y-5">
            <div className="  text-[0.7rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              asperiores eaque, doloribus fugiat, repudiandae mollitia vel
              praesentium, id laboriosam. asperiores eaque, doloribus fugiat,
              gugu iuyu8tytu
            </div>
            <button className=" px-3 bg-white flex items-center justify-center  rounded-full py-1.5 cursor-pointer">
              <p className="text-[0.65rem]">Deploy AI Apps in seconds </p>

              <MdOutlineStarRate className=" inline-block text-[0.7rem]  ml-7" />
            </button>
          </div>
        </div>
        <div className="  border-gray-800 mt-4 md:flex md:flex-row items-start sm:flex-col  ">
          <div className=" border-neutral-900 border-r border-t w-full h-full px-8 py-10">
            <div className=" space-y-5">
              <p className=" text-neutral-400 text-[0.9rem]">
                {">"}_ Git-connected Deploys
              </p>
              <div>
                <p className=" text-[1.1rem]">
                  From localhost to https, in seconds.
                </p>
                <p className="text-neutral-400 text-[1.1rem]">
                  Deploy from Git or your CLI.
                </p>
              </div>
              <div className=" relative">
                <Image
                  alt="code"
                  src="/c1.png"
                  width={1000}
                  height={1000}
                  className=" w-[80%] "
                />
                <Image
                  alt="code"
                  src="/cc.png"
                  width={1000}
                  height={1000}
                  className=" w-[80%] h-[9rem] relative -top-[5rem] left-[5rem]"
                />
              </div>
            </div>
          </div>
          {/* <Separator orientation="vertical" className=" bg-gray-500" /> */}
          <div className=" border-neutral-900 border-t w-full h-full px-8 py-10">
            <div className=" space-y-5">
              <p className=" text-neutral-400 text-[0.9rem]">
                <BsChat className=" inline-block text-gray-500 mr-3" />{" "}
                Collaborative pre-production
              </p>
              <div>
                <p className=" text-[1.1rem] text-neutral-400">
                  <span className=" text-white">
                    {" "}
                    Every deploy is remarkable.
                  </span>{" "}
                  Chat with your team on real, production-grade UI, not just
                  designs.
                </p>
              </div>
              <div className="">
                <Image
                  alt="code"
                  src="/ptt.png"
                  width={1000}
                  height={1000}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <LineChartt />
        </div>
        <div className="border-neutral-900 border-b">
          <div className="  border-gray-800 mt-4 md:flex md:flex-row items-start sm:flex-col ">
            <div className=" border-neutral-900  md:border-r md:border-t w-full h-full px-8 py-11">
              <div className=" space-y-5">
                <p className=" text-neutral-400 text-[0.9rem]">
                  <IoMdRefresh className=" inline-block text-gray-500 mr-2 text-[1.3rem] rotate-180" />{" "}
                  Instant Rollbacks
                </p>
                <div>
                  <p className=" text-[1.1rem] text-neutral-400">
                    <span className=" text-white">
                      {" "}
                      Go ahead, deploy on Friday.
                    </span>{" "}
                    Instantly rollback to a working deployment.
                  </p>
                </div>
                <div className="">
                  <Image
                    alt="code"
                    src="/c2.png"
                    width={1000}
                    height={1000}
                    className=" "
                  />
                </div>
              </div>
            </div>
            {/* <Separator orientation="vertical" className=" bg-gray-500" /> */}
            <div className=" border-neutral-900  border-t w-full h-full px-8 py-10">
              <div className=" space-y-5">
                <p className=" text-neutral-400 text-[0.9rem]">
                  <RiSaveLine className=" inline-block text-gray-500 mr-2 text-[1.1rem]" />{" "}
                  Conformance
                </p>
                <div>
                  <p className=" text-[1.1rem] text-neutral-400">
                    <span className=" text-white">
                      {" "}
                      Move fast, don’t break things.
                    </span>{" "}
                    Keep quality high while maintaining velocity with Enterprise
                    Monorepos.
                  </p>
                </div>
                <div className="">
                  <Image
                    alt="code"
                    src="/c3.png"
                    width={1000}
                    height={1000}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {""} */}
        <div className=" flex items-center justify-center text-center w-full py-12 border-b border-neutral-900">
          <div className=" text-[0.7rem] sm:text-[1.4rem] w-full flex items-center justify-center">
            Scale your{" "}
            <span className="ml-1 mr-1">
              {" "}
              <button className=" flex items-center justify-center  gap-x-1.5 rounded-full px-2 py-1 border border-neutral-600 text-[0.7rem] hover:bg-gray-600/40 cursor-pointer">
                <PiBuildingsFill className=" inline-block text-white" />
                Enterprice
              </button>
            </span>{" "}
            without compromising{" "}
            <span className="ml-1">
              {" "}
              <button className=" flex items-center justify-center  gap-x-1.5 rounded-full px-2 py-1 border border-neutral-600 text-[0.7rem] hover:bg-gray-600/40 cursor-pointer">
                <MdOutlineVerifiedUser className=" inline-block text-white" />
                Security
              </button>
            </span>{" "}
          </div>
        </div>
        <div className=" mt-4">
          <GlobeWorld />
        </div>
        <div className=" mt-4">
          <div className=" w-full p-7">
            <Orbit />
          </div>
        </div>
        <div className=" mt-4">
          <div className=" w-full p-5">
            <Features />
          </div>
        </div>
        <div className=" mt-4">
          <div className=" w-full p-5 py-16 border-b border-white/20">
            <Reliability />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
