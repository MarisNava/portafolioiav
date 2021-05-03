import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './LogoUP-02.png';
import user from './user-03.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={logo} alt="Logo" width="225px" height="75px"/>
            </div>
                <a href="/" >Portafolio</a>
                <a href="/" >Mis Proyectos</a>
                <a href="/" >Subir Proyectos</a>
                <a href="/" >Iniciar Sesión</a>
            <div className="user">
                <img src={user} width="63px" height="66px"/>
            </div>
        </nav>
    );
}
 
export default Navbar;