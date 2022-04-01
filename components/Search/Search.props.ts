import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";

export interface SearchProps
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    children: ReactNode;
    onsubmit: (data: string) => void;
  }
