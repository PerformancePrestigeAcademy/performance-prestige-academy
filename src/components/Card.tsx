import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
        bg-dark-card
        service-card
        gold-border
        rounded-2xl
        h-56
        p-8
        flex
        flex-col
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {children}
    </div>
  );
}