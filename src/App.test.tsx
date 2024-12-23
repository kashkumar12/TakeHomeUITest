import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Adds custom matchers like `toBeInTheDocument`
import App from './App';

test('renders Hello World text', () => {
  render(<App />);
  const helloWorldElement = screen.getByText("app");
  expect(helloWorldElement).toBeInTheDocument(); // Use the global `expect`
});
