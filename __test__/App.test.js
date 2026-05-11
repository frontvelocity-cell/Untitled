import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders DXB VIP Lounge Service', () => {
  render(<App />);
  const linkElement = screen.getByText(/DXB VIP Lounge Service/i);
  expect(linkElement).toBeInTheDocument();
});