import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../src/components/FAQ';

test('renders FAQ title', () => {
  render(<FAQ />);
  const title = screen.getByText(/QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS/i);
  expect(title).toBeInTheDocument();
});

test('toggles FAQ item on click', () => {
  render(<FAQ />);
  const firstQuestion = screen.getByText(/Does making a booking with Al Majlis guarantee/i);
  
  fireEvent.click(firstQuestion);
  
  const answer = screen.getByText(/Yes, making a confirmed booking/i);
  expect(answer).toBeInTheDocument();
});