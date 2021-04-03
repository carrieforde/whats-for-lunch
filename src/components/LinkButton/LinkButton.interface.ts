import { ReactNode } from "react";

export interface LinkButtonProps {
  href: string;
  style: "flat" | "outline" | "text";
  type?: "tel" | "mailto";
  children: ReactNode;
  bgColor?: string;
  color?: string;
}
