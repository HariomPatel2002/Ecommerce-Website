import {Link, useNavigate } from 'react-router-dom';

const Nav=()=>{
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/SignUp');
    }
 return (
    <div>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to="/">Product</Link></li>
        <li className='nav-li'><Link to="/add">Add Product</Link></li>
        <li className='nav-li'><Link to="/update">Update Product</Link></li>
        <li className='nav-li'><Link to="/profile">Profile</Link></li>
        <li>{auth ? <Link onClick={logout} to="/logout">Logout</Link> : 
        <Link to="/SignUp">Sign Up</Link>}</li>
        <li  className='nav-li'><Link to ="/login">Login</Link></li>
      </ul>
    </div>
  );
}
export default Nav;