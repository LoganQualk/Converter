import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <h1>This is my converter</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/CSGO">CSGO</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;