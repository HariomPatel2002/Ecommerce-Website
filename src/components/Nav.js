import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
 return (
    <div>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to="/">Product</Link></li>
        <li className='nav-li'><Link to="/add">Add Product</Link></li>
        <li className='nav-li'><Link to="/update">Update Product</Link></li>
        <li className='nav-li'><Link to="/Logout">Logout</Link></li>
        <li className='nav-li'><Link to="/profile">Profile</Link></li>
        <li className='nav-li'><Link to="/SignUp">SignUp</Link></li>
      </ul>
    </div>
  );
}
export default Nav;