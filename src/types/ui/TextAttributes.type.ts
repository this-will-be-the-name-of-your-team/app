import { font } from "@/styles/generator/font";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

type Font = keyof typeof font;

export interface TextAttribute {
  fontType: Font;
  color?: CSSProperties["color"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  children: ReactNode;
}
