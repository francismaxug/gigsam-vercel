import React from "react"
import { reliability } from "@/lib/utils"

const Reliability = () => {
  return (
    <div>
      <h1 className=" text-[1.45rem]">Reliability you can count on.</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-x-2 gap-y-8 w-full items-baseline mt-6">
        {reliability.map(
          ({ title, content }: { title: string; content: string }, index) => (
            <div key={index} className=" flex flex-col gap-y-2">
              <p className=" text-neutral-500 text-[0.8rem]">{title}</p>
              <p className="text-[0.7rem]">{content}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Reliability
