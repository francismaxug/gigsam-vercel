"use client"
import React, { useEffect, useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import ProductDropdown from "../hero/products-dropdown"
import SolutionsDropdown from "../hero/solutions-dropdown"
import ResourcesDropdown from "../hero/resource-dropdown"

// Define types for the props
type TabProps = {
  children: React.ReactNode
  tab: number
  handleSetSelected: (val: number | null) => void
  selected: number | null
  isLink?: boolean
  title?: string
}

type ContentProps = {
  selected: number | null
  dir: string | null
}

type NubProps = {
  selected: number | null
}

type TabItem = {
  title: string
  Component: React.ComponentType
  id: number
  isLink?: boolean
}

// ShiftingDropDown component
export const ShiftingDropDown = () => {
  return (
    <div className="">
      <Tabs />
    </div>
  )
}

// Tabs component
const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [dir, setDir] = useState<string | null>(null)

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l")
    } else if (val === null) {
      setDir(null)
    }

    setSelected(val)
  }

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
          isLink={t.isLink}
          title={t.title}
        >
          {t.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  )
}

// Tab component
const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
  isLink,
  title,
}: TabProps) => {
  if (isLink) {
    return (
      <Link
        onMouseEnter={() => handleSetSelected(null)}
        onClick={() => handleSetSelected(null)}
        href={`${
          title === "Docs"
            ? "docs"
            : title === "Enterprise"
            ? "enterprise"
            : "pricing"
        }`}
        className={`flex items-center text-neutral-400 hover:text-neutral-100 gap-1 rounded-full px-3 py-1 text-[0.72rem] hover:transition-colors hover:bg-neutral-800  `}
      >
        <span>{children}</span>
      </Link>
    )
  }

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 text-[0.75rem] transition-colors ${
        selected === tab
          ? "bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  )
}

// Content component
const Content = ({ selected, dir }: ContentProps) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute -left-16 top-[calc(100%_+_24px)] w-auto h-auto rounded-lg border border-neutral-900 bg-gradient-to-b from-black via-black to-black"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id &&
            !t.isLink && ( // Skip rendering content for the link tab
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
        </div>
      ))}
    </motion.div>
  )
}

// Bridge component
const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
)

// Nub component
const Nub = ({ selected }: NubProps) => {
  const [left, setLeft] = useState(0)

  useEffect(() => {
    moveNub()
  }, [selected])

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`)
      const overlayContent = document.getElementById("overlay-content")

      if (!hoveredTab || !overlayContent) return

      const tabRect = hoveredTab.getBoundingClientRect()
      const { left: contentLeft } = overlayContent.getBoundingClientRect()

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

      setLeft(tabCenter)
    }
  }

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  )
}

// Links component
const Links = () => {
  return <p>Hello</p>
}

// TABS array with types
const TABS: TabItem[] = [
  {
    title: "Products",
    Component: ProductDropdown,
  },
  {
    title: "Solutions",
    Component: SolutionsDropdown,
  },
  {
    title: "Resources",
    Component: ResourcesDropdown,
  },
  {
    title: "Enterprise",
    Component: Links,
    isLink: true,
  },
  {
    title: "Docs",
    Component: Links,
    isLink: true,
  },
  {
    title: "Pricing",
    Component: Links,
    isLink: true,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }))
