"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarouselComponent: React.FC<any> = (props) => {
  const slides = Array.from(Array(5).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <section className="embla">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container">
          {slides.map((index) => (
            <div key={index} className="embla__slide">
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselComponent;
