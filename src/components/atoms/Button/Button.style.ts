import styled from 'styled-components';
import { SIZES, typography, APPEARANCES } from './Button.d'
import { darken, rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import theme from '../../../themes/default.theme';

export const StyledButton = styled.button<any>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${props => (props.size === SIZES.SMALL ? '8px 16px' : '13px 20px')};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;
  font-size: ${props => (props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;
  ${props =>
    !props.isLoading &&
    `
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }
      &:active {
        transform: translate3d(0, 0, 0);
      }
      &:focus {
        box-shadow: ${themeGet('color.2', '#FF4785')} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${themeGet('color.2', '#FF4785')} 0 8px 18px 0px;
      }
    `}
  
  svg {
    height: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
    width: ${props => (props.size === SIZES.SMALL ? '14' : '16')}px;
    vertical-align: top;
    margin-right: ${props => (props.size === SIZES.SMALL ? '4' : '6')}px;
    margin-top: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
    margin-bottom: ${props => (props.size === SIZES.SMALL ? '-1' : '-2')}px;
    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }
  ${props =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}
  ${props =>
    props.isUnclickable &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}
  ${props =>
    props.isLoading &&
    `
      cursor: progress !important;
      opacity: 0.7;
      &:hover {
        transform: none;
      }
    `}
  ${props =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? '7' : '12'}px;
    `}
  ${props =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${theme.colors.primary};
      color: ${theme.colors.lightest};
      ${!props.isLoading &&
        `
          &:hover {
            background: ${ darken(0.20, theme.colors.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${theme.colors.primary} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${theme.colors.primary} 0 8px 18px 0px;
          }
        `}
    `}
  ${props =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
      background: ${theme.colors.secondary};
      color: ${theme.colors.lightest};
      ${!props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, theme.colors.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(theme.colors.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(theme.colors.secondary, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}
  ${props =>
    props.appearance === APPEARANCES.TERTIARY &&
    `
      background: ${theme.colors.tertiary};
      color: ${theme.colors.darkest};
      ${!props.isLoading &&
        `
          &:hover {
            background: ${darken(0.05, theme.colors.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(theme.colors.tertiary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(theme.colors.tertiary, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}
  ${props =>
    props.appearance === APPEARANCES.OUTLINE &&
    `
      box-shadow: ${theme.colors.medium} 0 0 0 1px inset;
      color: ${theme.colors.dark};
      background: transparent;
      ${!props.isLoading &&
        `
          &:hover {
            box-shadow: ${theme.colors.mediumdark} 0 0 0 1px inset;
          }
          &:active {
            background: ${theme.colors.medium};
            box-shadow: ${theme.colors.medium} 0 0 0 1px inset;
            color: ${theme.colors.darkest};
          }
          &:focus {
            box-shadow: ${theme.colors.medium} 0 0 0 1px inset, ${rgba(
              theme.colors.secondary,
          0.4
        )} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${theme.colors.medium} 0 0 0 1px inset, ${rgba(
              theme.colors.secondary,
          0.2
        )} 0 8px 18px 0px;
          }
        `};
    `};
    ${props =>
      props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
      `
        box-shadow: ${theme.colors.primary} 0 0 0 1px inset;
        color: ${theme.colors.primary};
        &:hover {
          box-shadow: ${theme.colors.primary} 0 0 0 1px inset;
          background: transparent;
        }
        &:active {
          background: ${theme.colors.primary};
          box-shadow: ${theme.colors.primary} 0 0 0 1px inset;
          color: ${theme.colors.lightest};
        }
        &:focus {
          box-shadow: ${theme.colors.primary} 0 0 0 1px inset, ${theme.colors.primary} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${theme.colors.primary} 0 0 0 1px inset, ${theme.colors.primary} 0 8px 18px 0px;
        }
      `};
    ${props =>
      props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
      `
        box-shadow: ${theme.colors.secondary} 0 0 0 1px inset;
        color: ${theme.colors.secondary};
        &:hover {
          box-shadow: ${theme.colors.secondary} 0 0 0 1px inset;
          background: transparent;
        }
        &:active {
          background: ${theme.colors.secondary};
          box-shadow: ${theme.colors.secondary} 0 0 0 1px inset;
          color: ${theme.colors.lightest};
        }
        &:focus {
          box-shadow: ${theme.colors.secondary} 0 0 0 1px inset,
            ${rgba(theme.colors.secondary, 0.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${theme.colors.secondary} 0 0 0 1px inset,
            ${rgba(theme.colors.secondary, 0.2)} 0 8px 18px 0px;
        }
      `};
`;

export const ButtonLink = StyledButton.withComponent('a');

