import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

// SVG Chevron matching the brand accent color
const defaultChevron = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231F6FB2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='9 18 15 12 9 6'></polyline></svg>";

export default function Logo({ className = '', isDarkBg = false, chevronIcon = defaultChevron }) {
  return (
    <Link
      to="/"
      className={`flex flex-col items-start shrink-0 leading-tight group ${className}`}
    >
      <div className="flex items-center uppercase tracking-tighter">
        <span
          style={{ color: isDarkBg ? "#FFFFFF" : "#0B1F33" }}
          className="font-bold text-xl md:text-2xl"
        >
          MERIT
        </span>

        <span className="bg-gradient-to-r from-[#1F6FB2] to-[#7dd3fc] bg-clip-text text-transparent font-bold text-xl md:text-2xl ml-2 capitalize">
          Consulting
        </span>

        <img
          src={chevronIcon}
          alt=""
          className="ml-1 h-[18px] md:h-[22px] w-auto object-contain self-center mt-1"
        />
      </div>

      <span
        style={{ color: "#9CA3AF" }}
        className="text-[10px] md:text-[11px] font-medium tracking-tight -mt-1 ml-0.5"
      >
        Intelligent Systems. Delivered.
      </span>
    </Link>
  );
}
