"use client";
import { useState } from "react";

interface SelectClientProps {
  options: string[];
  defaultSelection: string;
}

export default function SelectClient({
  defaultSelection,
  options,
}: SelectClientProps) {
  const [selectedOption, setSelectedOption] =
    useState<string>(defaultSelection);
  return (
    <div className="cursor-pointer border-b border-[#919d86] bg-[#c4c7b3] px-4 py-3 md:px-6">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="cursor-pointer bg-[#c4c7b3] text-xs outline-none md:text-base"
      >
        {options.map((option, i) => (
          <option key={option + i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
