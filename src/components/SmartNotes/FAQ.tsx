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
        className={`flex gap-5 justify-between px-8 py-4 w-full text-xl font-bold leading-7 text-left rounded-lg border border-teal-600 border-solid ${
          isOpen ? "bg-stone-200 text-zinc-950" : "text-stone-200"
        } max-md:flex-wrap max-md:px-5`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
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
          className="shrink-0 w-8"
        />
      </button>
      {isOpen && (
        <div className="p-8 mt-2 text-base leading-6 rounded-lg border border-teal-600 border-solid bg-stone-200 text-zinc-800 max-md:p-5">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Что такое ИТ-аутсорсинг?",
      answer:
        "ИТ-аутсорсинг — это передача ИТ-задач и функций стороннему поставщику для оптимизации работы и снижения затрат.",
    },
    {
      question: "Как начать работать с нашей компанией?",
      answer:
        "Начать работать с нами просто! Посетите наш сайт, зарегистрируйтесь на бесплатную консультацию и начните изучать наши услуги. Наша интуитивно понятная платформа и обширные материалы помогут вам начать.",
    },
    {
      question: "Какие ключевые преимущества ИТ-аутсорсинга?",
      answer:
        "ИТ-аутсорсинг предлагает множество преимуществ, включая реальное время сотрудничества, организацию на базе ИИ, настраиваемые шаблоны, безопасное облачное хранение и интеграции с популярными инструментами продуктивности.",
    },
    {
      question: "Сколько стоит ИТ-аутсорсинг?",
      answer:
        "Мы предлагаем гибкие тарифные планы, подходящие для различных потребностей. Посетите наш раздел 'Цены' для получения подробной информации о наших планах для индивидуальных пользователей, команд и предприятий.",
    },
    {
      question: "Для кого предназначен ИТ-аутсорсинг?",
      answer:
        "ИТ-аутсорсинг предназначен для индивидуальных пользователей, команд и предприятий, которые хотят улучшить свои ИТ-процессы, организацию и сотрудничество. Особенно полезен для студентов, профессионалов, исследователей и менеджеров проектов.",
    },
  ];

  return (
    <section id="faq" className="flex justify-center items-center self-stretch px-16 py-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col my-4 max-w-full w-[800px]">
        <h2 className="text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] leading-[57.6px] text-stone-200 max-md:max-w-full max-md:text-4xl">
          Часто задаваемые вопросы
        </h2>
        <p className="mt-6 text-base leading-6 text-center text-zinc-400 max-md:max-w-full">
          Мы собрали список наиболее часто задаваемых вопросов о наших услугах
          ИТ-аутсорсинга, чтобы помочь вам получить необходимую информацию. Если у вас есть другие вопросы, не стесняйтесь обращаться в нашу службу поддержки.
        </p>
        <div className="mt-20 max-md:mt-10">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
