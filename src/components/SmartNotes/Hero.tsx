import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-14 w-full max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1100px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base leading-6 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-6xl font-bold tracking-tight bg-clip-text bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] leading-[63px] text-stone-200 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Профессиональный ИТ-аутсорсинг <br /> для вашего бизнеса
              </h1>
              <p className="mt-4 text-zinc-400 max-md:max-w-full">
                Доверьте свои ИТ-задачи нам и сосредоточьтесь на развитии вашего бизнеса.
              </p>
              <form className="flex gap-5 justify-center self-start py-1.5 pr-1.5 pl-6 mt-12 rounded-lg border border-teal-600 border-solid bg-stone-200 max-md:flex-wrap max-md:pl-5 max-md:mt-10">
                <label htmlFor="email-input" className="sr-only">
                  Введите ваш email
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Введите ваш email"
                  className="flex-1 my-auto text-zinc-800 bg-transparent border-none"
                  aria-label="Введите ваш email"
                />
                <button
                  type="submit"
                  className="flex gap-2 justify-center px-6 py-4 text-center rounded-lg bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-zinc-950 max-md:px-5"
                >
                  <span className="my-auto">Начать сотрудничество</span>
                  <img
                    loading="lazy"
                    src="/arrow.svg"
                    alt=""
                    className="shrink-0 w-6"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/hero.svg"
              alt="SmartNotes interface preview"
              className="grow w-full aspect-[0.75] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
