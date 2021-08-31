import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from './robleup.png';
import user from './user-03.png';

const Navbar = () => {
    return (
        <nav className="navbar">
                <img align="left" src={logo} alt="Logo" width="216px" height="134px"/>
                <Link to="/" >Portafolio</Link>
                <Link to="/" >Mis Proyectos</Link>
                <Link to="/" >Subir Proyectos</Link>
                <Link to="/Login" >Iniciar Sesión</Link>
                <Link to="/Login">
                <img id="user"src={user} width="63px" height="66px"/>
                </Link>
                
        </nav>
    );
}
 
export default Navbar;