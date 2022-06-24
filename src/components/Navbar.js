import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navBar padding">
      <div>
        <h1>
          Bookstore CMS
        </h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <IoMdContact className='navBarIcon'/>
    </nav>
  );
};
export default Navbar;
