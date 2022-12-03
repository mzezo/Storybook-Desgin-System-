import React, { ReactNode } from "react";
import { TextWrapper } from './Paragraph.style'
import { ParagraphProps } from './Paragraph.d';

export const Paragraph: React.FC<ParagraphProps> = ({ content, ...props }) => {

  return <TextWrapper {...props}>{content}</TextWrapper>;
};
