// src/components/ui/Card.tsx
import { cn } from "@/app/lib/utils";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}


const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        " rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;

