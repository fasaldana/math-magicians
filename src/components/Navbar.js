import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-container">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </div>
  );
}
