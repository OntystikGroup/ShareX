import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col p-8 rounded-xl border border-teal-600 border-solid shadow-sm max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="w-8"
    />
    <h3 className="mt-6 text-xl font-bold leading-8 text-stone-200 max-md:max-w-full">
      {title}
    </h3>
    <p className="mt-4 text-base leading-6 text-zinc-400 max-md:max-w-full">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: "/like.svg",
      title: "Доступность на разных платформах",
      description:
        "Наши услуги доступны на всех устройствах: настольных компьютерах, планшетах и смартфонах. Работайте без преград и всегда оставайтесь в курсе.",
    },
    {
      icon: "/web.svg",
      title: "Настраиваемые шаблоны",
      description:
        "Создавайте индивидуальные шаблоны для повторяющихся задач или проектов, экономьте время и обеспечивайте единообразие. Настройте наши услуги под ваши уникальные потребности.",
    },
    {
      icon: "/flag.svg",
      title: "Безопасное облачное хранение",
      description:
        "Ваши данные надежно хранятся в облаке. Получайте доступ к информации с любого устройства в любое время, не беспокоясь о потере важных данных.",
    },
    {
      icon: "/loading.svg",
      title: "Сотрудничество в реальном времени",
      description:
        "Бесшовное сотрудничество с вашей командой в реальном времени на совместных проектах и задачах.",
    },
    {
      icon: "/hash.svg",
      title: "Организация на базе ИИ",
      description:
        "Наши функции организации на базе ИИ категоризируют и приоритизируют ваши задачи, облегчая поиск нужной информации в нужное время.",
    },
    {
      icon: "/branch.svg",
      title: "Интеграции",
      description:
        "Подключайте наши услуги к вашим любимым инструментам продуктивности, таким как Google Drive, Trello и Slack. Оптимизируйте рабочий процесс, синхронизируя данные на разных платформах и улучшая сотрудничество.",
    },
  ];

  return (
    <section id="features" className="flex justify-center items-center self-stretch px-16 py-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-6xl max-md:max-w-full">
        <div className="flex justify-center items-center px-16 text-center max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[788px]">
            <h2 className="text-5xl font-bold bg-clip-text bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] leading-[57.6px] text-stone-200 max-md:max-w-full max-md:text-4xl">
              Откройте силу ИТ-аутсорсинга
            </h2>
            <p className="self-center mt-6 text-base leading-6 text-zinc-400 w-[410px]">
              Наши услуги включают инновационные функции, предназначенные для революционизации вашей работы, сотрудничества и организации.
            </p>
          </div>
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
