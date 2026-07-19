import { ReactNode } from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ServiceCard({
  number,
  title,
  subtitle,
  children,
}: ServiceCardProps) {
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
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <p className="text-7xl font-black text-[#C9A22720] mb-6">
        {number}
      </p>

      {subtitle && (
        <p className="font-racing text-2xl tracking-[0.35em] text-[#C9A227] mb-3 text-center">
          {subtitle}
        </p>
      )}

      <h3 className="font-racing text-3xl mb-6 text-center">
        {title}
      </h3>

      {children}
    </div>
  );
}