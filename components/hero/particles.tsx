"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Particles } from "@/components/magicui/particles"
import Link from "next/link"
import Image from "next/image"

export function ParticlesCom() {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  //   useEffect(() => {
  //     setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  //   }, [resolvedTheme])

  return (
    <div className=" space-y-3">
      <div className=" mt-20 relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-gray-800 bg-transparent ">
        <div className=" flex flex-col gap-y-1 text-center items-center">
          <h1 className=" text-[1.7rem] font-semibold">
            Introducing Fluid compute
          </h1>
          <p className=" text-neutral-400 text-[0.85rem]">
            The power of servers in serverless form
          </p>
          <Link
            href="/learn-more"
            className=" rounded-full px-3 bg-neutral-50 w-fit text-black py-1 text-[0.8rem] mt-3"
          >
            Learn more
          </Link>
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={300}
          ease={150}
          color={color}
          refresh
        />
      </div>
    </div>
  )
}
