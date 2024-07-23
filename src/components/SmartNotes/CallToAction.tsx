import React from "react";
import Button from "./Button";

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="flex justify-center self-stretch pb-10 px-4 mt-16 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-8 max-md:flex-col max-md:gap-0 w-full max-w-screen-lg">
        <div className="flex flex-col w-[63%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col justify-end self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl bg-clip-text bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] leading-[58px] text-stone-200 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Откройте полный потенциал ИТ-аутсорсинга
            </h2>
            <p className="mt-6 text-base leading-6 text-zinc-400 max-md:max-w-full">
              Готовы оптимизировать свои рабочие процессы и повысить продуктивность? Начните использовать наши услуги ИТ-аутсорсинга уже сегодня и ощутите преимущества профессиональной поддержки.
            </p>
            <Button className="mt-8">
              <span className="my-auto">Начать работу</span>
              <img
                loading="lazy"
                src="/arrow_black.svg"
                alt=""
                className="shrink-0 w-8"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-8 w-[37%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="/hero2.svg"
            alt="Интерфейс SmartNotes"
            className="w-full aspect-[0.75] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
