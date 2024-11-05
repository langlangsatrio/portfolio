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
    "Branding",
    "Logo & Icons",
    "Landing Page",
    "Minimum Viable Product (MVP) Development",
    "Full-scale Web Application",
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
    <div className="flex flex-col gap-2 justify-center items-center mb-28">
      <h1 className=" lg:font-bold lg:text-4xl mb-2  text-white">
        What I can do:
      </h1>
      <p className="text-gray-400 mb-16 text-lg">
        I can do beyond the list. Contact me for specific inquiry.
      </p>
      <div className="flex flex-col">
        <div className="flex gap-3 justify-center my-3">
          {service.map((value, item) => {
            return (
              <div key={item}>
                <Badge
                  key={item}
                  variant={"outline"}
                  className="py-2 px-4 bg-slate-200"
                >
                  <p className="text-black text-lg mx-2">{value}</p>
                </Badge>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 justify-center my-3">
          {techStack.map((value, item) => {
            return (
              <div key={item}>
                <Badge
                  key={item}
                  variant={"outline"}
                  className="py-2 px-4 border border-slate-200"
                >
                  {value.component}
                  <p className="text-white text-lg mx-2"> {value.name}</p>
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
