"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const skills = [
  { name: "Python", icon: "/skills/python.png" },
  { name: "R", icon: "/skills/R.png" },
  { name: "C++", icon: "/skills/C++.png" },
  { name: "OpenCV", icon: "/skills/OpenCV.png" },
  { name: "YOLO", icon: "/skills/yolo.png" },
  { name: "TensorFlow", icon: "/skills/tensorflow.png" },
  { name: "PyTorch", icon: "/skills/PyTorch1.png" },
  { name: "SQL", icon: "/skills/sql.png" },
  { name: "Pandas", icon: "/skills/pandas.png" },
  { name: "Numpy", icon: "/skills/Numpy.png" },
  { name: "Matplotlib", icon: "/skills/matplotlib.png" },
  { name: "MongoDB", icon: "/skills/mongodb.png" },
  { name: "Raspberry Pi", icon: "/skills/Raspberry_Pi.png" },
  { name: "Arduino", icon: "/skills/Arduino.png" },
  { name: "Nvidia", icon: "/skills/nvidia.png" },
  { name: "Ubuntu", icon: "/skills/Ubuntu.png" },
  { name: "Tableau", icon: "/skills/Tableau.png" },
];

export default function SkillsMarquee() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden py-30 bg-[#f5f5f7] relative">

      {/* Moving Track */}
      <div
        ref={trackRef}
        className={`flex absolute left-0 top-10 animate-seamless ${
          hoverIndex !== null ? "[animation-play-state:paused]" : ""
        }`}
      >

        {/* Original list */}
        <div className="flex">
          {skills.map((s, i) => (
            <SkillItem
              key={i}
              s={s}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
              index={i}
            />
          ))}
        </div>

        {/* Duplicate list for seamless loop */}
        <div className="flex">
          {skills.map((s, i) => (
            <SkillItem
              key={"dup-" + i}
              s={s}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillItem({
  s,
  index,
  hoverIndex,
  setHoverIndex,
}: any) {
  return (
    <div
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
      className="flex flex-col items-center mx-6 flex-shrink-10 transition-all duration-300 cursor-pointer h-32 justify-between"
    >
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center">
        <Image
          src={s.icon}
          alt={s.name}
          width={48}
          height={48}
          className={`object-contain transition-transform duration-300 ${
            hoverIndex === index ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      {/* Skill Text */}
      <span
        className={`text-base text-gray-700 transition-opacity duration-300 ${
          hoverIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        {s.name}
      </span>
    </div>
  );
}
