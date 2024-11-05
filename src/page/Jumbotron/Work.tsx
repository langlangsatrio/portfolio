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

export default function Work() {
  const workPortfolio: any[] = [
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
    <div className="flex flex-col gap-2 px-2 py-28 justify-center items-center mt-24 bg-black">
      <Services />
      <h1 className="lg:font-bold lg:text-4xl mb-2 text-white">Recent Work</h1>
      <p className="text-gray-400 mb-5 text-lg">
        Some of my recent works. Each case is unique. See case study for
        references.
      </p>
      <div className="flex gap-5">
        <FaBehanceSquare color="gray" size={27} />
        <FaGithub color="gray" size={27} />
      </div>
      <div className="flex justify-center">
        <Carousel className="max-w-7xl max-h-full ">
          <CarouselContent className="-ml-1">
            {workPortfolio.map((value, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3 py-20">
                  <div>
                    <Card className="lg:pl-2 bg-gray-200 border border-white shadow-md shadow-white">
                      <CardHeader>
                        <CardTitle>
                          <div className="font-semibold mb-2 text-xl">
                            {value.name}
                          </div>
                          <div className="font-medium text-small mb-1">
                            {value.type}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={value.url}
                          className="mb-7 rounded-md w-full h-full bg-gray-300 shadow-md"
                        />
                        <div className="font-medium text-small">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
