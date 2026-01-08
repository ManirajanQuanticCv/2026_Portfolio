// app/events/page.tsx
import React from "react";
import TimelineHorizontal from "../components/TimelineHorizontal";
import { journeyData } from "../data/journeyData";

export default function EventsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black mb-4">
        Every day is a chance to learn
        </h1>
        <p className="text-lg text-gray-600 dark:text-black-400">
        From small experiments to big ideas, this is my journey
        </p>
      </div>

      {/* Horizontal Timeline */}
      <TimelineHorizontal data={journeyData} />
    </section>
  );
}
