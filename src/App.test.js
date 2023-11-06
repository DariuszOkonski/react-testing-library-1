import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/My First App/i);
  expect(titleElement).toBeInTheDocument();
});

test('can receive a new user and show it on a list', () => {
  // render(<App />);
  // const nameInput = screen.getByRole('textbox', {
  //   name: /name/i,
  // });
  // const emailInput = screen.getByRole('textbox', {
  //   name: /email/i,
  // });
  // const button = screen.getByRole('button');
  // user.click(nameInput);
  // user.keyboard('jane');
  // user.click(emailInput);
  // user.keyboard('jane@jane.com');
  // user.click(button);
  // // screen.debug();
  // const name = screen.getByRole('cell', { name: 'jane' });
  // const email = screen.getByRole('cell', { name: 'jane@jane.com' });
  // expect(name).not.toBeInTheDocument();
  // expect(email).not.toBeInTheDocument();
});
