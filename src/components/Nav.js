import {Link } from 'react-router-dom';

const Nav=()=>{
  const auth = localStorage.getItem("user");
 return (
    <div>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to="/">Product</Link></li>
        <li className='nav-li'><Link to="/add">Add Product</Link></li>
        <li className='nav-li'><Link to="/update">Update Product</Link></li>
        <li className='nav-li'><Link to="/profile">Profile</Link></li>
        <li>{auth ? <Link to="/logout">Logout</Link> : 
        <Link to="/SignUp">Sign Up</Link>}</li>
      </ul>
    </div>
  );
}
export default Nav;