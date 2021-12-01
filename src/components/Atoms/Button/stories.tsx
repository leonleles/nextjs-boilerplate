import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Basic: Story = ({ label, args }) => (
  <Button {...args}>{label}</Button>
);
Basic.args = { label: 'Texto' };
