import { Link } from "react-router-dom";
function NavbarAuth() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand">Shop Utez</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/auth">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/auth/users">Usuarios</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link to="/login">Logout</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default NavbarAuth;