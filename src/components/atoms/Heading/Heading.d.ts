import { ReactNode } from "react";

export interface HeadingProps {
    content: string;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontFamily?: string;
    fontSize?: number | string;
    fontWeight?: string;
    textAlign?: 'center' | 'left' | 'right';
    lineHeight?: number | string;
    letterSpacing?: number | string;
}