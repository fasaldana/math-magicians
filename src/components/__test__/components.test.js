import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../pages/Home';
import Calculator from '../Calculator';
import Quote from '../pages/Quote';

it('renders in an expected way', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Navbar in an expected way', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Quotepage in an expected way', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('User performs math operation on calculator', () => {
  const { container } = render(<Calculator />);
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('x'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('='));
  expect(container.querySelector('.number-inp').value).toBe('15');
});
