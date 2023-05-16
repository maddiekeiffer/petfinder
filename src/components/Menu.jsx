import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/search'>Search</Link>
            </li>
            <li>
                <Link to='/saved'>Saved</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu;