import React from "react"
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn"
import { VercelTerminal } from "./terminal"
import { slugs } from "@/lib/utils"

import { IconCloud } from "@/components/magicui/icon-cloud"

const customCommandMap = {
  copy: "TS app/users/page.ts",
}

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
)

const Orbit = () => {
  return (
    <div className=" relative grid lg:grid-cols-[1fr_300px] md:lg:grid-cols-1 md:gap-y-4 px-8 py-12 pb-16 gap-x-7 text-neutral-500 border-b border-neutral-900">
      <div className=" ">
        <ScriptCopyBtn
          //   showMultiplePackageOptions={true}
          codeLanguage="shell"
          lightTheme="nord"
          darkTheme="vitesse-dark"
          commandMap={customCommandMap}
          className="bg-black text-[0.8rem] w-[20rem]"
        />
        <VercelTerminal />
        <div className="space-y-2 mt-10">
          <p>
            <span className=" text-white">
              Bringing the best of client and server rend ering
            </span>{" "}
            Experience seemless integration, optimized performance and reduced
            bundle sizes like never before.
          </p>
          <button className=" px-2 bg-neutral-900 text-white flex text-[0.7rem] items-center justify-center  rounded-full py-1.5 cursor-pointer">
            Descover Integrations
          </button>
        </div>
      </div>
      <div className=" space-y-2">
        <div className="relative  m-0 flex  p-0 items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
        <div className="space-y-2 ml-5">
          <p>
            <span className=" text-white">All the data,</span> Connect with
            content, commerce or database platforms.
          </p>
          <button className=" px-2 bg-neutral-900 text-white flex text-[0.7rem] items-center justify-center  rounded-full py-1.5 cursor-pointer">
            Descover Integrations
          </button>
        </div>
      </div>
    </div>
  )
}

export default Orbit
