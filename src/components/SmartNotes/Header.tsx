'use client';
import React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Button from "./Button";

const Header: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = "https://t.me/sarsen_ss";
  };

  return (
    <header className="py-2 sticky top-0 z-50 w-full bg-zinc-950 shadow-sm transition-shadow duration-300 data-[scrolled=true]:shadow-md border-b border-teal-600 border-solid">
      <div className="container flex h-16 py-2 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img
            loading="lazy"
            src="/sharex.svg"
            alt="ShareX"
            className="shrink-0 aspect-square fill-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] h-16 rounded-xl"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-stone-200">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
            Особенности
          </Link>
          <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
            FAQ
          </Link>
          <Link href="#cta" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
            Поддержка
          </Link>
        </nav>
        <Button
          onClick={handleButtonClick}
          className="hidden md:flex gap-2 justify-center items-center px-6 py-4 text-base leading-6 rounded-lg bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-zinc-950"
        >
          <span className="my-auto">Начать работу</span>
          <img loading="lazy" src="/arrow.svg" alt="" className="shrink-0 w-6" />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="small" className="md:hidden text-stone-200 border-stone-200">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden bg-zinc-950 text-stone-200">
            <div className="grid gap-4">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                Особенности
              </Link>
              <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                FAQ
              </Link>
              <Link href="#cta" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                Поддержка
              </Link>
              <Button
                onClick={handleButtonClick}
                className="flex gap-2 justify-center items-center px-6 py-4 text-base leading-6 rounded-lg bg-[linear-gradient(234deg,#AAD9D1_0%,#017373_125.68%)] text-zinc-950"
              >
                <span className="my-auto">Начать работу</span>
                <img loading="lazy" src="/arrow.svg" alt="" className="shrink-0 w-6" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

function MenuIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
