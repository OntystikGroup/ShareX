"use client"
import React from 'react';

interface PlanProps {
  name: string;
  icon: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const Plan: React.FC<PlanProps> = ({ name, icon, price, period, features, buttonText, isPopular }) => (
  <div className={`flex flex-col px-8 py-10 mx-auto w-full rounded-xl border-2 border-teal-600 border-solid ${isPopular ? 'bg-zinc-950' : 'bg-neutral-100'} max-md:px-5 max-md:mt-10`}>
    <div className="flex gap-2 text-sm leading-5 text-teal-600">
      <img loading="lazy" src={icon} alt="" className="shrink-0 aspect-square w-[25px]" />
      <div className="flex-1 my-auto">{name}</div>
    </div>
    <div className="flex gap-1 mt-8">
      <div className={`text-5xl font-bold leading-[57.6px] ${isPopular ? 'text-neutral-100' : 'text-zinc-950'} max-md:text-4xl`}>
        {price}
      </div>
      <div className={`flex-1 self-end mt-6 text-base leading-6 ${isPopular ? 'text-teal-600' : 'text-zinc-800'}`}>
        {period}
      </div>
    </div>
    {features.map((feature, index) => (
      <div key={index} className={`flex gap-2 mt-4 text-base leading-6 ${isPopular ? 'text-zinc-400' : 'text-zinc-800'}`}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f736db4ae9a2bcebe2932a073757a255466dd09219d31c20c304449d1047eb92?apiKey=4ba47913d9a146748073b7201a6fb4a1&" alt="" className="shrink-0 aspect-[1.41] fill-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] w-[17px]" />
        <div>{feature}</div>
      </div>
    ))}
    <button className={`flex gap-2 justify-center px-16 py-4 mt-8 text-lg leading-7 rounded-lg border border-teal-600 border-solid ${isPopular ? 'bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-zinc-950' : 'bg-stone-200 text-zinc-950'} max-md:px-5`}>
      <div>{buttonText}</div>
      <img loading="lazy" src={isPopular ? "https://cdn.builder.io/api/v1/image/assets/TEMP/864c31dc5729d7bf63736cd91b60d6c92d93b3eb6e457fcb05ab753c28157da1?apiKey=4ba47913d9a146748073b7201a6fb4a1&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/289330111ec9f73a5a7d6c68ff582fb05d0a3312859045d23c563ffa3dd263b9?apiKey=4ba47913d9a146748073b7201a6fb4a1&"} alt="" className="shrink-0 border border-solid aspect-square stroke-[1px] w-[27px]" />
    </button>
    <div className="self-center mt-2 text-xs leading-5 text-neutral-500">No credit card required</div>
  </div>
);

const PricingPlans: React.FC = () => {
  const plans = [
    {
      name: "Individual Plan",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/28e20a17f1c1b88262e0bd1b765af62ba2692ffb6468d985c53fb4c141bf4a3b?apiKey=4ba47913d9a146748073b7201a6fb4a1&",
      price: "$9.99",
      period: "/ month",
      features: [
        "Real-time collaboration",
        "AI-powered organization",
        "Customizable templates",
        "5GB cloud storage",
        "Basic integrations"
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Team Plan",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/822d2cd3f26cd6595d0c9cb23bff59cbf229116ea64cd94c5df2169f659aab9b?apiKey=4ba47913d9a146748073b7201a6fb4a1&",
      price: "$19.99",
      period: "/ month",
      features: [
        "Everything in the Individual Plan",
        "Unlimited cloud storage",
        "Advanced integrations",
        "Team management and permissions",
        "Shared templates and note libraries"
      ],
      buttonText: "Start Free Trial",
      isPopular: true
    },
    {
      name: "Enterprise Plan",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/493ec7960c1f5e2f5608a01ac11990e884d0eec846b57b3147131cac3735a6a0?apiKey=4ba47913d9a146748073b7201a6fb4a1&",
      price: "Custom",
      period: "",
      features: [
        "Everything in the Team Plan",
        "Dedicated account manager",
        "Enterprise-grade security",
        "Customized onboarding",
        "Advanced analytics"
      ],
      buttonText: "Contact support"
    }
  ];

  return (
    <section className="flex justify-center items-center self-stretch px-16 py-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col my-4 w-full max-w-6xl max-md:max-w-full">
        <h2 className="text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] leading-[57.6px] text-stone-200 max-md:max-w-full max-md:text-4xl">
          Pricing & Plans
        </h2>
        <p className="self-center mt-6 text-base leading-6 text-center text-zinc-400 w-[426px] max-md:max-w-full">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        <div className="flex justify-center items-center px-2.5 mt-10 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-3.5 items-center max-w-full w-[318px]">
            <span className="self-stretch my-auto text-lg leading-7 text-stone-200">Monthly</span>
            <label className="flex flex-col justify-center self-stretch cursor-pointer">
              <div className="flex flex-col justify-center items-start py-1.5 rounded-2xl border border-emerald-200 border-solid bg-zinc-400 max-md:pr-5">
                <div className="shrink-0 bg-white rounded-full h-[21px] w-[21px] transition-transform duration-300 ease-in-out transform translate-x-0"></div>
              </div>
              <input type="checkbox" className="sr-only" aria-label="Toggle yearly pricing" />
            </label>
            <span className="self-stretch my-auto text-lg leading-7 text-zinc-400">Yearly</span>
            <div className="justify-center self-stretch px-4 py-2 my-auto text-sm leading-5 text-center bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] rounded-[40px] text-zinc-950">
              Save 25%
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 max-md:max-w-full">
          {plans.map((plan, index) => (
            <Plan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;