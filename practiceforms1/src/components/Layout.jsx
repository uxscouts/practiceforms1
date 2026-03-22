// components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {/* The Outlet renders the matched child route's component */}
      <Outlet /> 
    </>
  );
};
export default Layout;
