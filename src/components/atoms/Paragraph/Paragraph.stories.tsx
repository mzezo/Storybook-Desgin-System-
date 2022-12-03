import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Paragraph } from './Paragragh'
import { ParagraphProps } from './Paragraph.d';

export default {
    title: 'Atoms/Paragraph',
    component: Paragraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //   backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args: ParagraphProps) => <Paragraph {...args} />;

export const Paragraphs = Template.bind({});

Paragraphs.args = {
    content: 'Hello Storybook',
    fontFamily: 'Lato , sans-serif',
    textAlign: 'center'
};