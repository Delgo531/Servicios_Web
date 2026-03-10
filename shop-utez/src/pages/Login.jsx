import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {

    const navigate = useNavigate();

    const iniciarSesion = () => {
        console.log("Iniciando sesion...");

        localStorage.setItem("tokenAuth", "Hash123456789");
        localStorage.setItem("isAuth", "true");

        setIsAuthenticated(true);

        navigate("/auth");
    }

    return (
        <>
            <div className="container mt-4">
                <h1>Login</h1>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                </div>

                <button className="btn btn-primary mt-3" onClick={iniciarSesion}>
                    Iniciar sesión
                </button>
            </div>
        </>
    );
}

export default Login;