"use client"; // Ensure this runs on the client-side

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselItem {
  src: string;
  alt: string;
}

interface CarouselWrapperProps {
  items?: CarouselItem[];
}

export function CarouselWrapper({ items = [] }: CarouselWrapperProps) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No hay items que mostrar</p>;
  }

  return (
    <Carousel>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
