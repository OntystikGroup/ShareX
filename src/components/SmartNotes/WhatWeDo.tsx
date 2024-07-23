import { SVGProps } from "react";

export default function WhatWeDo() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
              Что Мы Можем Сделать
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-lg lg:text-xl">
              Наша IT-аутсорсинговая компания предлагает широкий спектр услуг, чтобы помочь вам достичь ваших цифровых целей.
            </p>
          </div>
        </div>
        <div className="mt-10 mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-teal-700 hover:text-white">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <GlobeIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground md:text-xl">
                Веб-сайты
              </h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Мы создаем пользовательские веб-сайты, которые являются отзывчивыми, удобными для пользователя и оптимизированными для поисковых систем.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-teal-700 hover:text-white">
            <div className="flex items-center gap-4">
              <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
                <WebcamIcon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground md:text-xl">
                Чат-боты
              </h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Наши чат-боты могут автоматизировать поддержку клиентов, генерацию лидов и другие бизнес-процессы.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-teal-700 hover:text-white">
            <div className="flex items-center gap-4">
              <div className="bg-muted rounded-md p-3 flex items-center justify-center">
                <ShoppingBagIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground md:text-xl">
                Интернет-магазины
              </h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Мы можем создавать решения для электронной коммерции, которые являются безопасными, масштабируемыми и оптимизированными для конверсий.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-teal-700 hover:text-white">
            <div className="flex items-center gap-4">
              <div className="bg-card rounded-md p-3 flex items-center justify-center">
                <TextIcon className="h-6 w-6 text-card-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground md:text-xl">
                Telegram Боты
              </h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Наши боты для Telegram могут автоматизировать различные задачи, от поддержки клиентов до распространения контента.
            </p>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-teal-700 hover:text-white">
            <div className="flex items-center gap-4">
              <div className="bg-accent rounded-md p-3 flex items-center justify-center">
                <SmartphoneIcon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground md:text-xl">
                Мини-Приложения
              </h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Мы можем создавать легковесные, мобильные мини-приложения, которые легко интегрируются в ваши существующие платформы.
            </p>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-teal-700 hover:text-white">
            <div className="flex items-center gap-4">
              <div className="bg-success rounded-md p-3 flex items-center justify-center">
                <CodeIcon className="h-6 w-6 text-success-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground md:text-xl">
                Пользовательское ПО
              </h3>
            </div>
            <p className="text-zinc-400 text-sm md:text-base">
              Мы можем создавать пользовательские программные решения, адаптированные к вашим специфическим бизнес-потребностям.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function ShoppingBagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}


function SmartphoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function TextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


function WebcamIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="m12 18 1 4" />
    </svg>
  )
}
