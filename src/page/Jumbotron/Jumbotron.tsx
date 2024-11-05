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
    <div className="flex flex-col">
      <div className="lg:flex lg:px-36 lg:py-12">
        <div className="lg:flex lg:flex-col lg:gap-8 lg:justify-center lg:items-start">
          <div className="border border-black lg:py-2 lg:px-4 rounded-3xl w-fit h-fit">
            <h3 className="text-base lg:font-semibold">
              Hi, I&apos;m Satrio, Founder of Startup Powerhouse
            </h3>
          </div>
          <h1 className="lg:font-bold lg:text-6xl lg:leading-tight">
            I&apos;m a Software Developer and Tech-Entrepreneur based in Asia
          </h1>
          <p className="lg:text-xl lg:leading-9 text-gray-700">
            A full-stack engineer, founder, product builder, and
            tech-enthusiast. <br />
            Available for{" "}
            <span className="text-black font-semibold">
              project-based
            </span> and{" "}
            <span className="text-black font-semibold">fulltime role</span>.
          </p>
          <div className="flex gap-5 my-3">
            <Button className="lg:px-4 lg:py-6 shadow-md">
              <IoMdCall />
              <h1 className="lg:text-xl">Book an introductory call with me</h1>
            </Button>
            <Button className="lg:px-4 lg:py-6 shadow-md">
              <MdMessage />
              <h1 className="lg:text-xl">Send me a message</h1>
            </Button>
          </div>
          <div className="lg:flex lg:gap-2 ">
            <h3 className="lg:text-base lg:mx-1">✅ Builder.</h3>
            <h3 className="lg:text-base lg:mx-1">✅ Transparent Process.</h3>
            <h3 className="lg:text-base lg:mx-1">✅ Fast deliverable.</h3>
          </div>
        </div>
        <div className="lg:flex-col borde w-full h-full">
          <img
            src="./main-photo.jpeg"
            className="rounded-2xl"
            alt="Photo of Satrio"
          />
        </div>
      </div>

      <div className="lg:mb-10 lg:mt-16">
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
