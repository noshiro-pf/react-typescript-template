import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

describe(App, () => {
  test('renders the greeting text', () => {
    const container = document.createElement('div');

    const root = createRoot(container);

    React.act(() => {
      root.render(<App />);
    });

    expect(container.textContent).toBe('Hello, React!');
  });
});
