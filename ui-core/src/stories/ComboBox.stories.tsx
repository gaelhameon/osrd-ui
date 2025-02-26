import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import '@osrd-project/ui-core/dist/theme.css';

import { ComboBox } from '../components/inputs/ComboBox';

type Suggestion = { id: string; label: string };

const suggestions = [
  { id: '1', label: 'Manuel' },
  { id: '2', label: 'Manuela' },
  { id: '3', label: 'Manuella' },
] as Suggestion[];

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  args: {
    small: false,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    onSelectSuggestion: () => {},
    getSuggestionLabel: (option) => (option as Suggestion).label,
    suggestions: suggestions,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  title: 'core/ComboBox',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {
  args: {
    label: 'Your name',
    type: 'text',
    defaultValue: '',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Your name',
    type: 'text',
    value: suggestions[0], // Use a suggestion from the suggestions array
  },
};

export const Disabled: Story = {
  args: {
    label: 'Your name',
    type: 'text',
    disabled: true,
  },
};

export const Hint: Story = {
  args: {
    label: 'Your name',
    type: 'text',
    hint: 'You can type Manu to have suggestions',
  },
};

export const RequiredInput: Story = {
  args: {
    label: 'Your name',
    type: 'text',
    required: true,
  },
};

export const LoadingInput: Story = {
  args: {
    label: 'Name',
    type: 'text',
    required: true,
    statusWithMessage: {
      status: 'loading',
    },
  },
};

export const SmallInput: Story = {
  args: {
    label: 'Name',
    type: 'text',
    required: true,
    small: true,
  },
};

export const WithoutSuggestions: Story = {
  args: {
    label: 'Your name',
    type: 'text',
    suggestions: [],
  },
};
