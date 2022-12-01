import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps, APPEARANCES } from "./Button.d"

export default {
    title: 'Atoms/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    //   backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    appearance: APPEARANCES.PRIMARY,
    children: 'Button',
}

export const Secondary = Template.bind({});
Secondary.args = {
    appearance: APPEARANCES.SECONDARY,
    children: 'Button',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    appearance: APPEARANCES.TERTIARY,
    children: 'Button',
}

export const Outline = Template.bind({});
Outline.args = {
    appearance: APPEARANCES.OUTLINE,
    children: 'Button',
}

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    appearance: APPEARANCES.PRIMARY_OUTLINE,
    children: 'Button',
}

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
    appearance: APPEARANCES.SECONDARY_OUTLINE,
    children: 'Button',
}


