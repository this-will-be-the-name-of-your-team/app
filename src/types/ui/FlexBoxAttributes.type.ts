import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface RowAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
}

export interface ColumnAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
}
