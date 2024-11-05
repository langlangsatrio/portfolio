"use client";
import { FaMoneyBill } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { BiSolidConfused } from "react-icons/bi";
export default function Solution() {
  return (
    <div className="px-6 lg:p-70 w-full h-2/4 my-7" id="solution">
      <div className="lg:px-80 lg:py-32 lg:flex lg:flex-col lg:w-full">
        <div className=" lg:mb-32 lg:px-32">
          <h1 className="font-semibold text-xl lg:font-bold lg:text-4xl lg:leading-normal lg:mb-5 text-center">
            Whether you are a big tech corporation, established corporation,
            pre-revenue startup or even pre-product startups.. I fit into your
            needs..
          </h1>
          <p className="text-center text-sm my-2 text-gray-500 lg:text-lg lg:leading-normal lg:my-0">
            I&apos;m a full-stack engineer with professional experience in
            sales, marketing and brand design.
          </p>
          <p className="text-center text-sm my-2 text-gray-500 hidden lg:block lg:text-lg lg:leading-normal lg:my-0">
            I&apos;m able to scale your products and bringing more sales.
            Proficient in seeing market demands.
          </p>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center mt-16 px-10 lg:px-0 lg:py-0 lg:mt-0 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-64">
          <div className="flex flex-col lg:flex lg:flex-col justify-center items-center lg:gap-2 lg:w-52">
            <div className="hidden lg:block">
              <FaMoneyBill color="black" size={80} />
            </div>
            <div className="block lg:hidden">
              <FaMoneyBill color="black" size={50} />
            </div>
            <div>
              <h3 className="my-2 font-bold lg:font-semibold lg:text-center lg:my-2">
                Friendly Price-tag
              </h3>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm lg:text-base">
                Hiring a software engineers could be expensive nowadays, not to
                mention if they don&apos;t have startup environment knowledge.
              </p>
              <br className="border border-gray-500 w-full h-1" />
              <p className="text-black font-semibold text-sm lg:text-base">
                With a price of a coffee*, you can hire a full-rounded developer
                like me.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex lg:flex-col justify-center items-center lg:gap-2 lg:w-52">
            <div className="hidden lg:block">
              <IoTime color="black" size={80} />
            </div>
            <div className="block lg:hidden">
              <IoTime color="black" size={50} />
            </div>
            <div>
              <h3 className="my-2 font-bold lg:font-semibold lg:text-center lg:my-2">
                Time Wise
              </h3>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm lg:text-base">
                Developing a product could takes long times, from months to
                years. This happened because your hire can&apos;t interpret the
                demands.
              </p>
              <br className="border border-gray-500 w-full" />
              <p className="text-black font-semibold text-sm lg:text-base">
                I scale and deliver your needs in weeks, not months.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex lg:flex-col justify-center items-center lg:gap-2 lg:w-52">
            <div className="hidden lg:block">
              <BiSolidConfused color="black" size={80} />
            </div>
            <div className="block lg:hidden">
              <BiSolidConfused color="black" size={50} />
            </div>
            <div>
              <h3 className="my-2 font-bold lg:font-semibold lg:text-center lg:my-2">
                Any Stack
              </h3>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm lg:text-base">
                Don&apos;t let your ideas be limited by the tech of the product.
                You name it, I ship it. Any stack and technology. Set your ideas
                free.
              </p>
              <br className="border border-gray-500 w-full h-1" />
              <p
                className="text-black font-semibold text-sm lg:text-base"
                id="service"
              >
                I&apos;m a full stack developer. <br />I ship anything with any
                stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
