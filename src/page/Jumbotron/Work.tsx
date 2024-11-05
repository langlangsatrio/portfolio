"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Services from "../Services";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";

export default function Work() {
  const workPortfolio = [
    {
      name: "EternaGPT",
      type: "MVP for Bootstraped Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      url: "https://robohash.org/1",
    },
    {
      name: "Penducation",
      type: "Landing Page for VC-Backed Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      url: "https://robohash.org/2",
    },
    {
      name: "Code Challenge 2",
      type: "Company Profile for Corporate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      url: "https://robohash.org/3",
    },
    {
      name: "EternaGPT",
      type: "MVP Bootstraped Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      url: "https://robohash.org/5",
    },
    {
      name: "Penducation",
      type: "VC-Backed Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      url: "https://robohash.org/6",
    },
    {
      name: "Code Challenge 2",
      type: "Company Profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      url: "https://robohash.org/7",
    },
  ];

  return (
    <div className="flex flex-col gap-2 pt-16 px-3 lg:px-2 lg:py-28 lg:justify-center items-center lg:mt-24 bg-black">
      <Services />
      <h1 className="font-semibold text-xl lg:font-bold lg:text-4xl mb-2 text-white">
        Recent Work
      </h1>
      <p className="text-gray-400 text-sm text-center mb-5 px-7 lg:mb-5 lg:text-lg">
        Some of my recent works. Each case is unique. See case study for
        references.
      </p>
      <div className="flex gap-5">
        <Link href={"https://www.behance.net/satriolanglang"}>
          <FaBehanceSquare color="gray" size={27} />
        </Link>
        <Link href={"https://github.com/langlangsatrio"}>
          <FaGithub color="gray" size={27} />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-3 mt-10  -mb-5 lg:hidden w-full h-full">
        <HiOutlineArrowLongLeft color="white" />
        <p className="text-sm text-white">Swipe left to see more projects</p>
      </div>
      <div className="flex justify-center w-screen mt-10 mb-20 lg:mb-0 lg:my-0">
        <Carousel className="w-screen max-w-7xl max-h-full">
          <CarouselContent className="lg:-ml-1">
            {workPortfolio.map((value, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="w-full place-items-center lg:w-fit basis-1/1 lg:basis-1/3 lg:py-20 "
                >
                  <div className="">
                    <Card className="lg:ml-0 lg:pl-2 bg-gray-200 border border-white shadow-md shadow-white  w-72 lg:w-96">
                      <CardHeader>
                        <CardTitle>
                          <div className="font-semibold mb-1 lg:mb-2 text-xl lg:text-2xl">
                            {value.name}
                          </div>
                          <div className="font-medium text-xs lg:text-base lg:mb-1">
                            {value.type}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={value.url}
                          className="rounded-md w-full h-full mb-5 lg:mb-7 lg:w-full lg:h-full bg-gray-300 shadow-md"
                          alt="Photo of Projects"
                        />
                        <div className="text-xs lg:font-medium lg:text-base">
                          {value.description}
                        </div>
                      </CardContent>
                      <CardContent>
                        <h1 className="font-semibold mb-2 ">Tech:</h1>
                        <div className="flex gap-2">
                          <SiTypescript size={20} />
                          <FaReact size={20} />
                          <SiPostgresql size={20} />
                        </div>
                      </CardContent>
                      <CardContent>
                        <Button>See case study</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
