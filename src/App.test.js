import { fireEvent, getByTestId, getByText, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders Sign in with google', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign in with google/i);  
  expect(linkElement).toBeInTheDocument();  
});

test('navigate to Home page',()=>{
  render(<App />);
  fireEvent.click(screen.getByText(/home/i),new MouseEvent('click'))
  const element = screen.getByTestId('homePageDiv')  
  expect(element).toBeInTheDocument();
})
