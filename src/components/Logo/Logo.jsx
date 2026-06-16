import React from 'react';
import { Link } from 'react-router-dom';
import chevronIcon from '../../assets/chevron.png';
import './Logo.css';

const Logo = ({ className = "", isDarkBg = false, ...props }) => {
  return (
    <Link
      to="/"
      className={`flex flex-col items-start shrink-0 leading-tight group ${className}`}
      style={{ width: 'max-content' }}
      {...props}
    >
      <div className="flex items-center uppercase tracking-tighter" style={{ whiteSpace: 'nowrap' }}>
        <span
          style={{ color: isDarkBg ? "#FFFFFF" : "#0B1F33" }}
          className="font-bold text-xl md:text-2xl transition-colors duration-300"
        >
          MERIT
        </span>

        <span className="bg-gradient-to-r from-[#1F6FB2] to-[#7dd3fc] bg-clip-text text-transparent font-bold text-xl md:text-2xl ml-2 capitalize">
          Consulting
        </span>

        <img
          src={chevronIcon}
          alt=""
          className="ml-1 h-[18px] md:h-[22px] w-auto object-contain self-center mt-1 group-hover:translate-x-1 transition-transform"
        />
      </div>

      <span
        style={{
          color: isDarkBg ? "rgba(255,255,255,0.7)" : "#5A6A85",
          alignSelf: 'flex-start', // Forces it to the left edge
          textAlign: 'left',       // Ensures text starts at the left
          whiteSpace: 'nowrap'     // Prevents tagline from wrapping
        }}
        className="ml-0 w-full text-[10px] md:text-[11px] font-medium tracking-tight mt-1 transition-colors duration-300"
      >
        Intelligent Systems. Delivered.
      </span>
    </Link>
  );
};

export default Logo;
