import Link from "next/link"
import React from "react"
import { FaRegSave } from "react-icons/fa"
import {
  MdOutlineStarRate,
  MdOutlineDisplaySettings,
  MdOutlineVerifiedUser,
} from "react-icons/md"
import { CiGlobe } from "react-icons/ci"
import { VscGraph } from "react-icons/vsc"
import { TbBrandNextjs } from "react-icons/tb"

const SolutionsDropdown = () => {
  return (
    <main className="py-2 pt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[200px_200px] gap-x-4 w-auto">
          <div className="text-neutral-500">
            <h3 className="font-medium mb-4 text-[0.8rem] text-neutral-500">
              Use Cases
            </h3>
            <div className=" flex flex-col gap-y-4">
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <MdOutlineDisplaySettings className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">Fluid compute</p>
                    <p className=" text-[0.6rem]">Servers in serverless form</p>
                  </div>
                </Link>
              </div>
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <CiGlobe className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">Rendering</p>
                    <p className=" text-[0.6rem]">Fast, scalable, reliable</p>
                  </div>
                </Link>
              </div>
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <VscGraph className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">Observability</p>
                    <p className=" text-[0.6rem]">Trcae every step</p>
                  </div>
                </Link>
              </div>
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <MdOutlineVerifiedUser className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">Security</p>
                    <p className=" text-[0.6rem]">Scale without compromising</p>
                  </div>
                </Link>
              </div>
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <FaRegSave className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">Previews</p>
                    <p className=" text-[0.6rem]">Helping teams ship</p>
                  </div>
                </Link>
              </div>
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <MdOutlineStarRate className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">AI</p>
                    <p className=" text-[0.6rem]">Powering breakthroughs</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-neutral-500 ">
            <h3 className="font-medium mb-4 text-[0.8rem] text-neutral-500">
              Users
            </h3>
            <div className=" flex flex-col gap-y-4">
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <FaRegSave className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">Previews</p>
                    <p className=" text-[0.6rem]">Helping teams ship</p>
                  </div>
                </Link>
              </div>
              <div className=" group">
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white flex gap-x-2.5 items-center"
                >
                  <div className=" rounded-sm p-2 border flex items-center group-hover:bg-white justify-center border-neutral-900">
                    <MdOutlineStarRate className="inline-block  text-white group-hover:text-black " />
                  </div>
                  <div>
                    <p className=" text-white">AI</p>
                    <p className=" text-[0.6rem]">Powering breakthroughs</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SolutionsDropdown
