"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { scrollToTop } from "@/utils/domManipulation";

export interface CarouselItem {
  title: string;
  description: string;
  image?: StaticImageData;
}

export interface CarouselProps {
  data: CarouselItem[];
}

export default function Carousel({ data }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    scrollToTop();
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    scrollToTop();
  };

  return (
    <div className="carousel">
      <div className="flex items-center justify-center mb-4">
        {data.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-2 rounded-full cursor-pointer border border-stone-950 ${
              currentIndex === index ? "bg-stone-900" : "bg-stone-400"
            }`}
            onClick={() => {
              setCurrentIndex(index);
            }}
          ></span>
        ))}
      </div>
      <div className="relative">
        <div className="flex justify-between items-center absolute w-full h-full text-4xl font-bold">
          <button
            className="fixed lg:absolute left-0 top-1/2 transform -translate-y-1/2 p-4"
            onClick={prevCard}
          >
            &lt;
          </button>
          <button
            className="fixed lg:absolute right-0 top-1/2 transform -translate-y-1/2 p-4"
            onClick={nextCard}
          >
            &gt;
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-sm w-11/12 md:w-10/12 lg:min-h-[26rem]">
            <h2 className="text-xl font-bold mb-4">
              {data[currentIndex].title}
            </h2>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
              <p className="md:mr-16 whitespace-pre-line">
                {data[currentIndex].description}
              </p>
              {data[currentIndex].image && (
                <Image
                  className="w-36 h-36 md:w-60 md:h-60 mt-12 xl:mt-0"
                  src={data[currentIndex].image as StaticImageData}
                  alt={`Card ${currentIndex + 1}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
