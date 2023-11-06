import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
}

test('render one row per user', () => {
  renderComponent();

  //find all the rows in the table
  // this line will display testing url, ctrl + click on it
  // screen.logTestingPlaygroundURL();

  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render one row per user version 2', () => {
  // const users = [
  //   { name: 'jane', email: 'jane@jane.com' },
  //   { name: 'sam', email: 'sam@sam.com' },
  // ];
  // render(<UserList users={users} />);
  const { users } = renderComponent();

  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  // const users = [
  //   { name: 'jane', email: 'jane@jane.com' },
  //   { name: 'sam', email: 'sam@sam.com' },
  // ];
  // render(<UserList users={users} />);
  const { users } = renderComponent();

  // screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
