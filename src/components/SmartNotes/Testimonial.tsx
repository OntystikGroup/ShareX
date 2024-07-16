import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  company,
}) => {
  return (
    <figure className="flex flex-col items-center mt-16 max-md:mt-10">
      <img
        loading="lazy"
        src="/quote.svg"
        alt=""
        className="aspect-[1.59] fill-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] w-[38px]"
      />
      <blockquote className="text-2xl font-bold tracking-tight leading-9 text-center text-stone-200 w-[472px] max-md:max-w-full">
        {quote}
      </blockquote>
      <figcaption className="flex gap-4 justify-center items-start px-20 pt-8 max-w-full text-base leading-6 w-[472px] max-md:flex-wrap max-md:px-5">
        <cite className="text-stone-200">{author}</cite>
        <span className="text-neutral-500">{company}</span>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
