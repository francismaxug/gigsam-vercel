import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
]

export const reliability = [
  {
    title: "Elastic stability",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,pariatur alias corrupti commodi hic dolorum porro omnis, et cum",
  },
  {
    title: "Rock-solid security",
    content:
      "Eaque debitis porro, magni dolore remnam quasi mollitia? Vel maiores, exercitationem nesciunt veritatiscumque, neque ratione ",
  },
  {
    title: "Global performance",
    content:
      "sed exercitationem autem earumaccusantium provident natus recusandae quae rerum iure liberomollitia illum accusamus. Lorem ipsum ",
  },
  {
    title: "User first protection",
    content:
      " sapiente ipsa. Lorem ipsum dolor sitamet consectetur adipisicing elit. Possimus doloremque natusvoluptas quis, corporis maxime mollitia ",
  },
  {
    title: "Serverless storage",
    content:
      " eos laboriosam. Rerum totam odit culpa magnam cupiditate blanditiis et? Dignissimos labore laudantium excepturi nobis nisi velit nostrum vitae",
  },
  {
    title: "Seemless integrations",
    content:
      "debitis odio maxime deserunt ut doloremqueerror fugit! Lorem, ipsum dolor sit amet consectetur adipisicingelit. Commodi, praesentium sequi ",
  },
  {
    title: "Multiple frameworks",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,pariatur alias corrupti commodi hic dolorum porro omnis, et cum, doloremque iste .",
  },
  {
    title: "Easy deployments",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,pariatur alias corrupti commodi hic dolorum porro omnis, et cum, doloremque iste ",
  },
]
