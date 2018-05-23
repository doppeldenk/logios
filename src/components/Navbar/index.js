import React from 'react';
import { Link } from 'react-router-dom';

const navbar = [
  { name: 'Dashboard', link: 'dashboard' },
  { name: 'Users', link: 'users' },
];

const Navbar = () => (
  <ul className="list-group">
    {
      navbar.map(item => (
        <li className="list-group-item" key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))
    }
  </ul>
);

export default Navbar;
