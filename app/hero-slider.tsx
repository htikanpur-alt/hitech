"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/products/detergent-needles-pack-banner-1600x500.jpg", alt: "Lite detergent needles with a Hi-Tech Industries product pack", title: "Detergent Needles" },
  { src: "/products/colour-salt-speckles-banner-1600x500.jpg", alt: "Colour salt speckles in blue, orange, yellow, pink, green and red", title: "Colour Salt Speckles" },
  { src: "/products/industrial-fragrance-banner-1600x500.jpg", alt: "Lite industrial fragrances for home care and cleaning products", title: "Industrial Fragrance" },
  { src: "/products/ribbon-mixer-1600x500.jpg", alt: "Hi-Tech Engineering 500 kilogram ribbon mixer", title: "Ribbon Mixer" },
  { src: "/products/sigma-mixer-1600x500.jpg", alt: "Hi-Tech Engineering sigma mixer", title: "Sigma Mixer" },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index: number) => setActiveSlide((index + slides.length) % slides.length);

  return (
    <div className="hero-slider" aria-label="Hi-Tech product showcase">
      {slides.map((slide, index) => (
        <div className={`hero-slide ${index === activeSlide ? "hero-slide-active" : ""}`} key={slide.src} aria-hidden={index !== activeSlide}>
          <Image src={slide.src} alt={slide.alt} fill sizes="100vw" priority={index === 0} />
        </div>
      ))}
      <div className="hero-slider-controls">
        <button className="slider-arrow" type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous slide">‹</button>
        <div className="slider-dots" role="tablist" aria-label="Product showcase slides">
          {slides.map((slide, index) => <button className={index === activeSlide ? "slider-dot active" : "slider-dot"} type="button" key={slide.src} onClick={() => showSlide(index)} aria-label={`Show ${slide.title} slide`} aria-selected={index === activeSlide} role="tab" />)}
        </div>
        <button className="slider-arrow" type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next slide">›</button>
      </div>
    </div>
  );
}
