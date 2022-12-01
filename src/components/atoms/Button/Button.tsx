import { FC, Fragment } from "react";
import { StyledButton, ButtonLink } from "./Button.style"
import { ButtonProps } from "./Button.d"
import React from "react";

export const applyStyle = (ButtonWrapper: any) => {
    return (
      ButtonWrapper &&
      StyledButton.withComponent(({ containsIcon, isLoading, isUnclickable, ...rest }) => (
        <ButtonWrapper {...rest} />
      ))
    );
  };

export const Button:FC<ButtonProps> = ({
    isDisabled,
    isLoading,
    loadingText,
    isLink,
    children,
    ButtonWrapper,
    ...props
  }) => {
    const buttonInner = (
      <Fragment>
        {isLoading ? <>{loadingText || 'Loading...'}</> : children}
      </Fragment>
    );
  
    const StyledButtonWrapper = React.useMemo(() => applyStyle(ButtonWrapper), [ButtonWrapper]);
  
    let SelectedButton = StyledButton;
    if (ButtonWrapper) {
      SelectedButton = StyledButtonWrapper;
    } else if (isLink) {
      SelectedButton = ButtonLink;
    }
  
    return (
      <SelectedButton isLoading={isLoading} disabled={isDisabled} {...props}>
        {buttonInner}
      </SelectedButton>
    );
  }