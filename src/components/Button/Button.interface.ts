import { ReactNode } from "react";

export interface ButtonProps {
  style?: "flat" | "outline" | "text";
  bgColor?: string;
  color?: string;
  children: ReactNode;
  onClick: () => void;
}
