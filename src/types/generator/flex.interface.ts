import { CSSProperties } from "styled-components";

export interface FlexProps {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}
