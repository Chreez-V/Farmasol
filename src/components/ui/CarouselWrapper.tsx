"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselItemProps {
  src: string;
  alt: string;
}

interface CarouselWrapperProps {
  items?: CarouselItemProps[];
}

export function CarouselWrapper({ items = [] }: CarouselWrapperProps) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No hay items que mostrar</p>;
  }

  return (
    <div className=" relative w-full mx-auto">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent className="flex gap-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-3/8 md:basis-1/3 lg:basis-1/6 px-2"
            >
              <div className="bg-white shadow-lg rounded-lg p-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
