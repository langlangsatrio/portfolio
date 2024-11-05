"use client";

import { Badge } from "@/components/ui/badge";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
export default function Services() {
  const service = [
    "Minimum Viable Product (MVP) Development",
    "Full-scale Web Application",
    "Logo & Icons",
    "Landing Page",
    "Branding",
    "CMS",
  ];

  const techStack = [
    {
      name: "TypeScript",
      component: <BiLogoTypescript size={20} color="white" />,
    },
    {
      name: "JavaScript",
      component: <BiLogoJavascript size={20} color="white" />,
    },
    {
      name: "ReactJS",
      component: <FaReact size={20} color="white" />,
    },
    {
      name: "NextJS",
      component: <SiNextdotjs size={20} color="white" />,
    },
    {
      name: "TailwindCSS",
      component: <RiTailwindCssFill size={20} color="white" />,
    },
    {
      name: "PostgreSQL",
      component: <SiPostgresql size={20} color="white" />,
    },
    {
      name: "Figma",
      component: <FaFigma size={20} color="white" />,
    },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center mb-20 px-10 lg:py-0 lg:px-0 lg:mb-28">
      <h1 className="font-semibold text-xl lg:font-bold lg:text-4xl lg:mb-2  text-white">
        What I can do:
      </h1>
      <div className="px- lg:px-0">
        <p className="text-gray-400 text-sm text-center mb-5 lg:px-0 lg:py-0 lg:mb-16 lg:text-lg">
          I do beyond. Contact me for specific inquiry.
        </p>
      </div>
      <div className="flex flex-col px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center gap-2  lg:flex lg:flex-row lg:gap-3 lg:justify-center lg:my-4">
          {service.map((value, item) => {
            return (
              <div key={item} className="items-center">
                <Badge
                  variant={"outline"}
                  className="py-1 px-2 lg:py-2 lg:px-4 bg-slate-200 place-items-center"
                >
                  <p className="text-black text-base text-center mx-1 lg:text-lg lg:mx-2">
                    {value}
                  </p>
                </Badge>
              </div>
            );
          })}
        </div>
        <p
          className="lg:hidden text-xl text-white text-center
        mt-9 mb-2 font-bold"
        >
          Tools
        </p>
        <div className="px- lg:px-0">
          <p className="text-gray-400 text-sm text-center mb-5 lg:hidden lg:px-0 lg:py-0 lg:mb-16 lg:text-lg">
            List of stack I used, but not limited to
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 lg:flex lg:flex-row lg:gap-3 lg:justify-center lg:my-4">
          {techStack.map((value, item) => {
            return (
              <div key={item}>
                <Badge
                  key={item}
                  variant={"outline"}
                  className="py-2 px-4 border border-slate-200"
                >
                  {value.component}
                  <p className="text-white text-lg mx-2" id="work">
                    {" "}
                    {value.name}
                  </p>
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
