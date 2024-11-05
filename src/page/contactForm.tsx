"use client";

import { Button } from "@/components/ui/button";
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";

export default function ContactForm() {
  return (
    <div className="py-20">
      <div className="w-full h-full px-36 py-20 flex flex-col items-center justify-center gap-20">
        <div className="mt-8">
          <h1 className="lg:font-bold lg:text-5xl mb-5 text-center">
            Got any questions?
          </h1>
          <h1 className="lg:font-bold lg:text-5xl mb-5 text-center">
            Confuse where and how to begin?
          </h1>
          <h3 className="lg:text-xl lg:font-medium text-center text-gray-400">
            Why not start with a convo? Book your free call with me or send me
            message!
          </h3>
        </div>
        <div className="flex gap-5 justify-center items-center mb-8">
          <Button className="px-10 py-10 ">
            <IoMdCall size={30} />{" "}
            <p className="text-3xl mx-1">Schedule a video-call session</p>
          </Button>{" "}
          <p className="text-3xl mx-2">or</p>
          <Button className="px-10 py-10 ">
            <MdMessage size={30} />{" "}
            <p className="text-3xl mx-1">Send me message and inquiries</p>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
