import { FastForward } from "@mui/icons-material";
import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowDown } from "react-icons/Io";
import Peoplebox from "./box/Peoplebox";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Peoples() {
  const [picture, setPicture] = useState(0);
  const data = [
    {
      img: "/girl1.jpg",
    },
    {
      img: "/boy1.jpg",
    },
    {
      img: "/girl2.jpg",
    },
    {
      img: "/boy2.jpg",
    },

    {
      img: "/girl3.jpg",
    },
    {
      img: "/girl5.jpg",
    },
    {
      img: "/girl6.jpg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: "slide-1.jpg",
      title: "Slide 1",
      description: "Description for slide 1",
    },
    {
      id: 2,
      image: "slide-2.jpg",
      title: "Slide 2",
      description: "Description for slide 2",
    },
    {
      id: 3,
      image: "slide-3.jpg",
      title: "Slide 3",
      description: "Description for slide 3",
    },
    {
      id: 4,
      image: "slide-4.jpg",
      title: "Slide 4",
      description: "Description for slide 4",
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div
      id="shadow"
      className="bord[100px] rounded-[20px] lg:w-[100%] md:w-[100%] w-[95%] py-5 my-1 h-[370px] mb-[50px]"
    >
      <div className=" flex items-center">
        <div className="mb-1 text-secondary ml-8 text-[20px] font-bold ">
          People
        </div>
        <div className="flex px-5 items-center">
          <div className="py-3 text-gray-700 text-[13px] font-bold">
            Frequents Collaborators
          </div>
          {/* <div className=" text-[10px]">
            <IoIosArrowDown className="text-secondary mt-[2px] px-1 " size={22} />
          </div> */}
        </div>
      </div>
      <Carousel className="px-[2px]" responsive={responsive}>
        {data.map((x) => (
          <Peoplebox key={x} data={x}/>
        ))}
      </Carousel>
    </div>
  );
}
