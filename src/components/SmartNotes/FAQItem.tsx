"use client"
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-5">
      <button
        className={`flex gap-5 justify-between px-8 py-4 w-full text-xl font-bold leading-7 text-left rounded-lg border border-teal-600 border-solid transition-colors duration-300 ease-in-out ${
          isOpen ? "bg-stone-200 text-zinc-950" : "bg-transparent text-stone-200 hover:bg-stone-100 hover:text-black"
        } max-md:flex-wrap max-md:px-5`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <span className="my-auto max-md:max-w-full">{question}</span>
        <img
          loading="lazy"
          src={
            isOpen
              ? "/arrow_right.svg"
              : "/arrow.svg"
          }
          alt={isOpen ? "Collapse" : "Expand"}
          className={`shrink-0 w-8 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${question}`}
          className="p-8 mt-2 text-base leading-6 rounded-lg border border-teal-600 border-solid bg-stone-200 text-zinc-800 transition-opacity duration-300 ease-in-out max-md:p-5"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
