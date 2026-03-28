// components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

import { Navbar, Nav } from 'reactstrap';


import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <>
    {/*
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
*/}
        <nav>
          <ul className="menu-container">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/booking">Booking</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    <hr />
      {/* The Outlet renders the matched child route's component */}
      <div className="container">
        <Outlet /> 
      </div>
    </>
  );
};
export default Layout;



