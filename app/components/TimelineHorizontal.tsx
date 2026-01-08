"use client";

import React from "react";

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  image?: string;
  link?: string; // 🔗 Optional link
}

interface TimelineHorizontalProps {
  data: JourneyItem[];
}

const TimelineHorizontal: React.FC<TimelineHorizontalProps> = ({ data }) => {
  // Sort newest year first
  const sortedData = [...data].sort((a, b) => Number(b.year) - Number(a.year));

  // Card colors per year
  const yearColors: Record<string, string> = {
    "2025": "bg-[#f5f5f7] border-black text-black",
    "2024": "bg-[#f5f5f7] border-black text-black",
    "2023": "bg-[#f5f5f7] border-black text-black",
    "2022": "bg-[#f5f5f7] border-black text-black",
    "2021": "bg-[#f5f5f7] border-black text-black",
    "2020": "bg-[#f5f5f7] border-black text-black",
    "2019": "bg-[#f5f5f7] border-black text-black",
    "2018": "bg-[#f5f5f7] border-black text-black",
  };

  const yearLabelColors: Record<string, { text: string; border: string }> = {
    "2025": { text: "text-black", border: "border-teal-800" },
    "2024": { text: "text-black", border: "border-lime-700" },
    "2023": { text: "text-black", border: "border-orange-400" },
    "2022": { text: "text-black", border: "border-purple-400" },
    "2021": { text: "text-black", border: "border-lime-400" },
    "2020": { text: "text-black", border: "border-indigo-400" },
    "2019": { text: "text-black", border: "border-pink-400" },
    "2018": { text: "text-black", border: "border-cyan-400" },
  };

  let lastYear: string | null = null;

  return (
    <div className="relative w-full flex overflow-x-auto py-16 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <div className="flex space-x-3 px-10 min-w-max relative">
        {sortedData.map((item, index) => {
          const showYear = item.year !== lastYear;
          lastYear = item.year;

          const colorClasses =
            yearColors[item.year] || "bg-gray-100 border-gray-300 text-gray-700";
          const labelColor =
            yearLabelColors[item.year] || { text: "text-gray-700", border: "border-gray-400" };
          const textColor = colorClasses.match(/text-[\w-]+/)?.[0] || "text-gray-700";

          return (
            <div key={index} className="relative flex-shrink-0 w-[280px] md:w-[370px]">
              {showYear && (
                <div className="absolute -top-16 left-0 text-center">
                  <h3 className={`text-5xl font-extrabold ${labelColor.text}`}>{item.year}</h3>
                </div>
              )}

              {/* Wrap the entire card in a single <a> if it has a link */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`relative h-[400px] md:h-[500px] 
                      border p-3 shadow-lg cursor-pointer
                      hover:shadow-xl hover:scale-105 transition-all duration-300 ${colorClasses}`}
                  >
                    <div className="flex flex-col h-full">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 md:h-60 object-cover mb-6"
                        />
                      )}
                      <div className="flex flex-col flex-1 relative text-center">
                        <h4 className={`text-2xl font-semibold mb-4 ${textColor}`}>{item.title}</h4>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">{item.description}</p>

                        {/* "Learn more" now just a styled text inside the card */}
                        <div className="absolute bottom-0 right-0 text-blue-600 font-medium">
                          Learn more →
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  className={`relative h-[400px] md:h-[500px] 
                    border rounded-xl p-3 shadow-lg cursor-pointer
                    hover:shadow-xl hover:scale-105 transition-all duration-300 ${colorClasses}`}
                >
                  <div className="flex flex-col h-full">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-60 object-cover rounded-lg mb-6"
                      />
                    )}
                    <div className="flex flex-col flex-1 relative text-center">
                      <h4 className={`text-2xl font-semibold mb-4 ${textColor}`}>{item.title}</h4>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">{item.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Horizontal line behind cards */}
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-300 dark:bg-gray-700 -z-10"></div>
      </div>
    </div>
  );
};

export default TimelineHorizontal;
