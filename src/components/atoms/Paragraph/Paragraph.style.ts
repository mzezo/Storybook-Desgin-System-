import React from 'react';
import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';

export const TextWrapper = styled('p')(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
);