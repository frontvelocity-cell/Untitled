import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../src/components/NotFound';

const NotFoundWithRouter = () => (
  <BrowserRouter>
    <NotFound />
  </BrowserRouter>
);

test('renders 404 error page', () => {
  render(<NotFoundWithRouter />);
  
  expect(screen.getByText('404')).toBeInTheDocument();
  expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  expect(screen.getByText('Go Home')).toBeInTheDocument();
});