import React, { ReactNode } from "react";
import { HeadingWrapper } from './Heading.style'
import { HeadingProps } from './Heading.d';

const Heading: React.FC<HeadingProps> = ({ content, ...props }) => {

  return <HeadingWrapper {...props}>{content}</HeadingWrapper>;
};

export default Heading;