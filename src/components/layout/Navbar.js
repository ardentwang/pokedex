import { Routes, Route, Link } from "react-router"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="header">
            <nav className="links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/gen1" className="nav-link">Gen 1</Link>
                <Link to="/gen2" className="nav-link">Gen 2</Link>
                <Link to="/gen3" className="nav-link">Gen 3</Link>
                <Link to="/gen4" className="nav-link">Gen 4</Link>
                <Link to="/gen5" className="nav-link">Gen 5</Link>
                <Link to="/gen6" className="nav-link">Gen 6</Link>
                <Link to="/gen7" className="nav-link">Gen 7</Link>
                <Link to="/gen8" className="nav-link">Gen 8</Link>
                <Link to="/gen9" className="nav-link">Gen 9</Link>
            </nav>
        </div>
    )
}

export default Navbar