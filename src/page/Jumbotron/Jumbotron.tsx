"use client";
import FeaturedIn from "@/components/FeaturedIn/FeaturedIn";
import { Button } from "@/components/ui/button";
import { IoMdCall } from "react-icons/io";
import { DiTechcrunch } from "react-icons/di";
import { FaProductHunt } from "react-icons/fa";
import { FaYCombinator } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FcBbc } from "react-icons/fc";
import { MdMessage } from "react-icons/md";

export default function Jumbotron() {
  return (
    <div className="flex flex-col gap-2 px-5 py-7 lg:px-0 lg:py-0 lg:flex lg:flex-col ">
      <div className="lg:flex lg:px-36 lg:pb-12 lg:pt-36 pt-20 ">
        <div className="flex flex-col justify-center items-center gap-6 lg:flex lg:flex-col lg:gap-8 lg:justify-center lg:items-start">
          <div className="border border-black lg:py-2 lg:px-4 rounded-3xl w-fit h-fit px-2">
            <h3 className="text-sm lg:text-base lg:font-semibold">
              Hi, I&apos;m Satrio, Founder of Startup Powerhouse
            </h3>
          </div>
          <h1 className="text-center font-semibold text-4xl leading-snug lg:text-left lg:font-bold lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight">
            I&apos;m a Software Developer and Tech-Entrepreneur based in Asia
          </h1>
          <p className="text-center text-lg lg:text-left lg:text-xl lg:leading-9 text-gray-700">
            A full-stack engineer, founder, product builder, and
            tech-enthusiast. <br />
            Available for{" "}
            <span className="text-black font-semibold">
              project-based
            </span> and{" "}
            <span className="text-black font-semibold">fulltime role</span>.
          </p>
          <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:gap-5 lg:my-3">
            <Button className="lg:px-4 lg:py-6 shadow-md">
              <IoMdCall />
              <h1 className="lg:text-xl">Book an introductory call with me</h1>
            </Button>
            <Button className="lg:px-4 lg:py-6 shadow-md">
              <MdMessage />
              <h1 className="lg:text-xl">Send me a message</h1>
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-2 ">
            <h3 className="lg:text-base lg:mx-1">✅ Builder.</h3>
            <h3 className="lg:text-base lg:mx-1">✅ Transparent Process.</h3>
            <h3 className="lg:text-base lg:mx-1">✅ Fast deliverable.</h3>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-full lg:h-full">
          <img
            src="./main-photo.jpeg"
            className="rounded-2xl"
            alt="Photo of Satrio"
          />
        </div>
      </div>

      <div className="lg:px-0 lg:mb-10 lg:mt-16">
        <FeaturedIn
          component1={<DiTechcrunch color="gray" size={50} />}
          label1="Tech Crunch"
          component2={<FaProductHunt color="gray" size={50} />}
          label2="Product Hunt"
          component3={<FaYCombinator color="gray" size={50} />}
          label3="YCombinator"
          component4={<SiGeeksforgeeks color="gray" size={50} />}
          label4="GeeksforGeeks"
          component5={<FcBbc color="gray" size={50} />}
          label5="BBC"
        />
      </div>
    </div>
  );
}
