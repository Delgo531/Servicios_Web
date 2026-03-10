import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shop Utez</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productos" className="nav-link" >Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Conocenos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" >login</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Shop-utez
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;