"use client";

import { ReactNode } from "react";

interface IFeaturedIn {
  component1: ReactNode;
  component2: ReactNode;
  component3: ReactNode;
  component4: ReactNode;
  component5: ReactNode;

  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
}

export default function FeaturedIn({
  component1,
  component2,
  component3,
  component4,
  component5,
  label1,
  label2,
  label3,
  label4,
  label5,
}: IFeaturedIn) {
  return (
    <div className="lg:flex lg:flex-col lg:gap-10 items-center">
      <h1 className="lg:font-medium lg:text-gray-500 lg:text-lg">
        Featured in:
      </h1>
      <div className="lg:flex lg:gap-60">
        <div className="lg:flex lg:flex-col lg:justify-center  items-center lg:gap-2">
          <div className="lg:mb-2">{component1}</div>
          <p className="lg:text-gray-500 lg:text-base">{label1}</p>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center  items-center lg:gap-2">
          <div className="lg:mb-2">{component2}</div>
          <p className="lg:text-gray-500 lg:text-base">{label2}</p>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center  items-center lg:gap-2">
          <div className="lg:mb-2">{component3}</div>
          <p className="lg:text-gray-500 lg:text-base">{label3}</p>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center  items-center lg:gap-2">
          <div className="lg:mb-2">{component4}</div>
          <p className="lg:text-gray-500 lg:text-base">{label4}</p>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center  items-center lg:gap-2">
          <div className="lg:mb-2">{component5}</div>
          <p className="lg:text-gray-500 lg:text-base">{label5}</p>
        </div>
      </div>
    </div>
  );
}
