import { ReactNode } from "react";

interface ServiceCardProps {
  children: ReactNode;
}

export default function ServiceCard({ children }: ServiceCardProps) {
  return (
    <div
      className="
        bg-dark-card
        service-card
        gold-border
        rounded-2xl
        p-8
        flex
        flex-col
        h-full
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {children}
    </div>
  );
}