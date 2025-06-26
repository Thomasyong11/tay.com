"use client";
import { useState } from "react";
import { ExperienceData } from "../../data/experience";

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ExperienceData : ExperienceData.slice(0, 3);

  return (
    <div className="mt-16">
      <ol className="relative border-s border-gray-200">
        {visible.map((item) => (
          //  ✅ parentheses → implicit return
          <li key={item.id} className="mb-10 ms-4">
            <div
              className={`absolute w-3 h-3 ${item.dotColor} rounded-full mt-1.5 -start-1.5 border`}
            />
            <div className="flex items-center gap-2">
              <span className="text-md font-medium text-gray-900">
                {item.role}
              </span>
              <span className="inline-block text-xs uppercase rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                {item.year}
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-500">{item.place}</p>
          </li>
        ))}
      </ol>

      {ExperienceData.length > 3 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="hover:underline text-sm"
          aria-label="Read more"
        >
          Read more
        </button>
      )}
    </div>
  );
}
