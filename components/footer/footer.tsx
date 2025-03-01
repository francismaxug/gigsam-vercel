import Link from "next/link"
import React from "react"
import { FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6"
import { IoLogoGithub } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-medium mb-4 text-[0.95rem]">Products</h3>
            <div className=" flex flex-col gap-y-3">
              {[
                "AI",
                "Enterprise",
                "Fluid Compute",
                "Next.js",
                "Observability",
                "Previews",
                "Rendering",
                "Security",
                "Turbo",
              ].map((product, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  {product}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-[0.95rem]">Resources</h3>
            <div className=" flex flex-col gap-y-3">
              {[
                "Community",
                "Docs",
                "Guides",
                "Help",
                "Integrations",
                "Pricing",
                "Resource",
                "Solution Paterns",
                "Template",
              ].map((resource, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  {resource}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-[0.95rem]">Company</h3>
            <div className=" flex flex-col gap-y-3">
              {[
                "About",
                "Blog",
                "Careers",
                "Changelog",
                "Contact Us",
                "Customers",
                "Partners",
                "Privacy policy",
                "Legal",
              ].map((resource, i) => (
                <Link
                  key={i}
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  {resource}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-[0.95rem]">Social</h3>
            <div className=" flex flex-col gap-y-3">
              <div>
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  <FaXTwitter className="inline-block mr-2" />
                  Twitter
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  <IoLogoGithub className="inline-block mr-2" />
                  Github
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  <FaLinkedin className="inline-block mr-2" />
                  LinkedIn
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-[0.8rem] text-white/50 hover:text-white"
                >
                  <FaYoutube className="inline-block mr-2" />
                  YouTube
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className=" flex items-end justify-end font-semibold  font-sans"
            >
              <svg height="22" viewBox="0 0 74 64" className="text-white">
                <path
                  d="M37.5896 0L75.1792 65H0L37.5896 0Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
