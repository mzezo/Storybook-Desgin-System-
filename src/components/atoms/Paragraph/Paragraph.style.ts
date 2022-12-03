import React from 'react';
import styled from 'styled-components';
import {
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';

export const TextWrapper = styled('p')(
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
);