import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../pages/Home';
import Calculator from '../Calculator';

it('renders in an expected way', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Navbar in an expected way', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
