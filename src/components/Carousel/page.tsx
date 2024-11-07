import getBlogs from "../BlogAPI/page";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TypeBlogPostAsset } from "../BlogAPI/types/TypeBlogPostPortfolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [blogState, setBlogState] = useState<any>([]);

  const takeData = async () => {
    const response = await getBlogs();
    setBlogState(response?.items);
  };

  useEffect(() => {
    takeData();
    console.log(blogState);
  }, []);

  const router = useRouter();

  return (
    <div className="slider-container">
      <h1 className="text-3xl font-bold">List of Projects</h1>
      <Slider {...settings} className="py-4">
        {blogState?.map((value: any, item: any) => (
          <div
            className="flex flex-col gap-5 items-start justify-center py-3 px-5 rounded-md shadow-md hover:bg-slate-200 cursor-pointer"
            key={item}
            onClick={() => router.push(`/blog/${item}`)}
          >
            <img
              src={`https:${
                (value.fields.image as TypeBlogPostAsset)?.fields.file.url
              }`}
              className="w-full h-full bg-cover rounded-lg mb-3 hover:opacity-90"
            />
            <h1 className="text-xl font-bold mb-1">{value.fields.title}</h1>
            <p className="text-sm">{value.fields.excerpt}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
