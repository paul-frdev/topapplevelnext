import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  tag: "sm" | "md" | "xl";
  children: ReactNode;
}
