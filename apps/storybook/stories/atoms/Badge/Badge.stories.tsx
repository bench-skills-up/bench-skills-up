import { Meta, StoryObj } from "@storybook/react";
import { Badge as BadgeDemo, DefaultProps } from "./Badge.demo";
import { Badge } from "@bench-skills-up/ui-components";
import type { BadgeProps } from "@bench-skills-up/ui-components";
import documentation from "./Badge.mdx";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    docs: { page: documentation },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "error", "warning", "info"],
      description: "The visual style of the badge",
    },
    badgeContent: {
      control: "text",
      description: "The content displayed inside the badge",
    },
    color: {
      control: { type: "color" },
      description: "Custom background color for the badge",
    },
    showZero: {
      control: { type: "boolean" },
      description: "Whether to show the badge when content is zero",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: "Default",
  args: {
    ...DefaultProps,
    badgeContent: "New",
    variant: "default",
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge badgeContent="New" variant="default" />`,
      },
    },
  },
  render: (args: BadgeProps) => <BadgeDemo {...args} />,
};
