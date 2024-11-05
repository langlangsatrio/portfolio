"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import parse from "html-react-parser";

export default function AboutMe() {
  const [content, setContent] = useState(`<div className="judul">
              <h1 className="font-semibold text-lg lg:font-bold lg:text-4xl lg:mb-2">
                A natural builders
              </h1>
              <p className="text-sm mb-3 lg:mb-9">
                I approach every task from the perspective of executor
              </p>
            </div>
            <div className="konten">
              <p className="text-sm mb-5 lg:text-medium lg:leading-loose lg:pr-44 lg:mb-6">
                Above everyone, why me? Well.. I am a natural builder and doer,
                dedicated to transforming ideas into reality. My approach to
                every task is rooted in execution, ensuring that I deliver
                results efficiently and effectively. Say goodbye to a boring
                consultancy with normative outcome.
              </p>
            </div>`);

  const theContent = [
    {
      code: `<div className="judul">
              <h1 className="font-semibold text-lg lg:font-bold lg:text-4xl lg:mb-2">
                A natural builders
              </h1>
              <p className="text-sm mb-3 lg:mb-9">
                I approach every task from the perspective of executor
              </p>
            </div>
            <div className="konten">
              <p className="text-sm mb-5 lg:text-medium lg:leading-loose lg:pr-44 lg:mb-6">
                Above everyone, why me? Well.. I am a natural builder and doer,
                dedicated to transforming ideas into reality. My approach to
                every task is rooted in execution, ensuring that I deliver
                results efficiently and effectively. Say goodbye to a boring
                consultancy with normative outcome.
              </p>
            </div>`,
    },
    {
      code: `   <div className="judul">
              <h1 className="font-semibold text-lg lg:font-bold lg:text-4xl lg:mb-2">My experience</h1>
              <p className="text-sm mb-3 lg:mb-9">My entrepreneurial and tech journey</p>
            </div>
            <div className="konten">
              <p className="text-sm mb-5 lg:text-medium lg:leading-loose lg:pr-44 lg:mb-6">
                I have been engaged in entrepreneurship, evolving from
                a simple lemonade stand to the
                dynamic world of blockchain startups. With a passion for
                technology and a commitment to building impactful solutions, I'm
                ready to scale up your development.
              </p>
            </div>`,
    },
  ];

  const updateContentNext = () => {
    for (let i = 0; i < theContent.length; i++) {
      if (content === theContent[i].code) {
        if (i === theContent.length - 1) {
          setContent(theContent[0].code);
        } else {
          setContent(theContent[i + 1].code);
        }
        return;
      }
    }
  };

  const updateContentPrevious = () => {
    for (let i = 0; i < theContent.length; i++) {
      if (content === theContent[i].code) {
        if (i === 0) {
          setContent(theContent[theContent.length - 1].code);
        } else {
          setContent(theContent[i - 1].code);
        }
        return;
      }
    }
  };

  return (
    <div
      className="px-8 py-16 flex flex-col gap-5  lg:px-32 lg:py-32 lg:flex lg:flex-col"
      id="about"
    >
      <div>
        <h1 className="font-semibold text-xl lg:font-bold lg:text-4xl lg:leading-normal lg:mb-2 text-center">
          Get to know me
        </h1>
        <p className="text-center text-sm my-2 text-gray-500 lg:text-lg lg:leading-normal lg:mb-20">
          Want to know more? Book a call session{" "}
          <a className="underline hover:text-black">here</a>
        </p>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <Card className="p-6 h-full lg:flex lg:flex-row lg:justify-between lg:rounded-2xl lg:p-12 border-4 border-black lg:w-2/3 lg:h-fit bg-white shadow-lg">
          <div className="lg:flex lg:flex-col lg:justify-between">
            <div>{parse(content)}</div>

            <div className="flex gap-2 mb-5 lg:mb-0 lg:flex lg:gap-2">
              <Button
                variant={"secondary"}
                className="lg:w-fit shadow-md"
                onClick={updateContentPrevious}
              >
                <GrPrevious /> Previous
              </Button>
              <Button
                variant={"secondary"}
                className="lg:w-fit shadow-md"
                onClick={updateContentNext}
              >
                Next <GrNext />
              </Button>
            </div>
          </div>
          <div>
            <div className="lg:flex lg:flex-col lg:w-96 lg:h-96">
              <img
                src="./main-photo.jpeg"
                className="rounded-2xl shadow-lg h-full w-96 object-cover"
                alt="Photo of Satrio"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
