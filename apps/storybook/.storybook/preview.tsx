import React from "react";
import tokens from "@bench-skills-up/theme-tokens";
import { Preview } from "@storybook/react";
// import { I18nProvider } from "react-i18next";
// import i18n from "../i18n";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Global locale for components",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      item: [
        { value: "en", title: "English" },
        { value: "es", title: "Spanish" },
        { value: "fr", title: "French" },]
    },
  },
  mode: {
    name: "Mode",
    description: "Global theme mode for components",
    defaultValue: "light",
    toolbar: {
      item: [
        { value: "light", title: "Light Mode" },
        { value: "dark", title: "Dark Mode" },
      ],
    },
  },
  brand: {
    name: "Brand",
    description: "Global brand for components",
    defaultValue: "primary",
    toolbar: {
      item: ['primary', 'secondary', 'premium']
    },
  },
};

const preview: Preview = {
  decorators: [(Story, context) => {
    const { mode } = context.globals;
    const backgroundColor = mode === 'dark' ? tokens.colors.darkBackground : tokens.colors.lightBackground;
    // const brandColor = tokens.colors[brand] || tokens.colors.primary;
    return (
      <div style={{ backgroundColor, padding: '20px' }}>
        <Story />
      </div>
    );
  }],
}

export default preview



