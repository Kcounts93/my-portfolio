import React from "react";

const BentoGrid = ({ images }) => {
  const gridSpans = [
    "col-start-2 col-span-2 row-span-1", // Image 1
    "col-span-1 row-span-1", // Image 2
    "col-start-2 col-span-1 row-start-2 row-span-1", // Image 3
    "col-span-2 row-span-1", // Image 4
  ];
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`overflow-hidden rounded-lg ${gridSpans[index] || ""}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
