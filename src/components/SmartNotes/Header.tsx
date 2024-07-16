"use client"
import React from "react";

const Header: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = "https://t.me/sarsen_ss";
  };
  return (
    <header className="flex gap-5 justify-between items-center self-stretch px-20 py-6 w-full border-b border-teal-600 border-solid bg-zinc-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 justify-center self-stretch my-auto">
        <img
          loading="lazy"
          src="/sharex.svg"
          alt="ShareX"
          className="shrink-0 aspect-square fill-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] h-16 bg-teal-500 rounded-xl"
        />
      </div>
      <nav className="flex gap-5 justify-between self-stretch my-auto text-base leading-6 whitespace-nowrap text-stone-200">
        <a href="#features">Особенности</a>
        <a href="#faq">FAQ</a>
        <a href="#cta">Поддержка</a>
      </nav>
      <button onClick={handleButtonClick} className="flex gap-2 justify-center items-center self-stretch px-6 py-4 text-base leading-6 text-right rounded-lg bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-zinc-950 max-md:px-5">
        <span className="my-auto">Начать работу</span>
        <img
          loading="lazy"
          src="/arrow.svg"
          alt=""
          className="shrink-0 w-6"
        />
      </button>
    </header>
  );
};

export default Header;
