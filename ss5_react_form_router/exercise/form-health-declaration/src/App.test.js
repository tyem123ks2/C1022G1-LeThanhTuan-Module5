import { render, screen } from '@testing-library/react';
import App from './App';
import FormHealth from "./App";

test('renders learn react link', () => {
  render(<FormHealth />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
