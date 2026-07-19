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
        p-8
        h-full
        flex
        flex-col
      "
    >
      {children}
    </div>
  );
}