import { Globe } from "@/components/magicui/globe"
import Link from "next/link"

export function GlobeWorld() {
  return (
    <div className="relative hidden lg:flex size-full w-full items-center justify-center overflow-hidden  bg-black px-40 pb-50 pt-0 md:pb-60">
      <div className="container mx-auto px-0">
        <div className="max-w-lg mx-auto text-center space-y-2 pt-8 ">
          <p className="text-[0.9rem] text-white/70 max-w-sm mx-auto">
            <span className=" text-white">Deploy once, Deliver everywhere</span>{" "}
            When you push code to vercel, we make it instantly available to the
            planet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 pt-3">
            <Link
              href=""
              className="bg-white text-black text-[0.7rem]  hover:bg-white/90  px-4 py-1.5 rounded-full transition-colors"
            >
              <p>More about Infrasturacture</p>
            </Link>
            <Link
              href=""
              className="bg-black border text-white text-[0.7rem]   px-4 py-1.5 hover:bg-gray-800 rounded-full transition-colors"
            >
              <p>Learn about Enterprise</p>
            </Link>
          </div>
        </div>
      </div>
      <Globe className="top-36" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  )
}
