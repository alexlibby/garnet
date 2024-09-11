/** @type { import('@storybook/svelte').Preview } */

const preview = {
  parameters: {
    controls: {},
    badgesConfig: {
      Alpha: {
        title: "Alpha",
        styles: {
          backgroundColor: "yellow",
          borderColor: "#ffbf00",
          color: "#000000",
        },
      },
    },
  },
};

export default preview;
