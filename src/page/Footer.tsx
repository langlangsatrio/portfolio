"use client";

export default function Footer() {
  return (
    <div>
      <div
        className="border-t-2 flex justify-center lg:justify-between
       px-10 py-14 lg:px-40 lg:py-16"
      >
        <div className="flex flex-col gap-2 lg:gap-5 justify-center items-center lg:justify-start lg:items-start">
          <h1 className="font-bold text-2xl lg:text-left text-center">
            SATRIO
          </h1>
          <p className="text-medium text-gray-500 lg:text-left">
            2024. All rights reserved.
          </p>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}
