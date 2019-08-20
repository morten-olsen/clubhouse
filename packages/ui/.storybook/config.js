import { configure } from '@storybook/react';


function loadStories() {
  const req = require.context('../src', true, /.stories.tsx?$/);
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);