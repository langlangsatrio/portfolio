"use client";

import { Button } from "@/components/ui/button";
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";

export default function ContactForm() {
  return (
    <div className="py-16" id="contact">
      <div className="w-full h-full py-8 px-8 lg:px-36 lg:py-20 flex flex-col items-center justify-center gap-20">
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-2 lg:font-bold lg:text-5xl lg:mb-5 text-center">
            Got any questions?
          </h1>
          <h1 className="text-xl font-bold lg:font-bold lg:text-5xl mb-5 text-center">
            Confuse where and how to begin?
          </h1>
          <h3 className="lg:text-xl lg:font-medium text-center text-gray-500">
            Why not start with a convo? Book your free call with me or send me
            message!
          </h3>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row gap-5 justify-center items-center mb-10 lg:mb-0 lg:px-0 px-5 lg:-mt-0 -mt-8">
          <Button className="flex lg:flex px-5 py-7 lg:px-10 lg:py-10 shadow-md">
            <IoMdCall size={80} />{" "}
            <p className="text-sm mx-1 lg:text-2xl">
              Schedule a video-call session
            </p>
          </Button>{" "}
          <p className="hidden lg:inline text-3xl mx-2">or</p>
          <Button className="flex lg:flex px-5 py-7  lg:px-10 lg:py-10 shadow-md">
            <MdMessage size={10} />{" "}
            <p className="text-sm mx-1 lg:text-2xl">
              Send me message and inquiries
            </p>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
