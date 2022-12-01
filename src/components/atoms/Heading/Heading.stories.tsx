import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'
import { HeadingProps } from './Heading.d'

export default {
    title: 'Atoms/Heading',
    component: Heading,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  } as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args: HeadingProps) => <Heading {...args} />;

export const Headings = Template.bind({});

Headings.args = {
  as: 'h2',
  content: 'Hello Storybook',
};
