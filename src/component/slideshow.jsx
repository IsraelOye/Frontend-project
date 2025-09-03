import Air from "../assets/Airplane.png";
import Ship from "../assets/ship.jpg";
import Van from "../assets/van.jpg";
import { useState, useEffect } from "react";

function HeroSlideshow() {
  // 1. List of images for the slideshow
  const slides = [Air, Ship, Van];

  // 2. Track the current image index
  const [current, setCurrent] = useState(0);

  // 3. Change image automatically every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // loop back to start
    }, 3000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden mt-16 sm:mt-18 md:mt-22 lg:mt-28 xl:mt-33">
      {/* 4. Loop through images and show only the active one */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* 5. Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 6. Text on top of slideshow */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-15">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 md:mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-20 text-center md:text-left">
          Secure And Trusted <span className="text-orange-700">Logistics</span>{" "}
          <br className="hidden md:block" />
          <span className="block md:inline">Services!</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-center md:text-left max-w-2xl">
          Delivering excellence across air, sea, and land.
        </p>
      </div>
    </div>
  );
}

export default HeroSlideshow;