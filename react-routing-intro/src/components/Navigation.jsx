import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <Link to={'/'}>Inicio</Link>
                    {/* <NavLink to={'/'} className={({ isActive }) => isActive && "selected"}>Inicio</NavLink> */}
                </li>
                <li>
                    <Link to={'/sobre-mi'}>Sobre mi</Link>
                </li>
                <li>
                    <Link to={'/proyectos'}>Proyectos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar