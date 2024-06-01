import { HTMLAttributes } from "react";

export interface ModalLayoutProptypes extends HTMLAttributes<HTMLDivElement> {
  animationState: boolean;
  brightness?: string;
  blur?: string;
  children: React.ReactNode;
}
