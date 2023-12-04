import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useTranslation } from "react-i18next";

export default function Navbar() {

    const navigate = useNavigate();


    const { t, i18n } = useTranslation();

    const isLoggedIn = !!localStorage.getItem("accessToken")

    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pauliaus Blogas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/*<Link className="nav-link" to={"products"}>Produktai</Link>*/}
                            <NavLink to={""} className={({ isActive }) => isActive ? "active-red nav-link" : "nav-link"}>Planetos</NavLink>
                        </li>
                        {isLoggedIn ?
                            <>
                               {/* <li className="nav-item">
                                    <Link className="nav-link" to={"todos"}>Užduotys</Link>
                                    <NavLink to={"home/todos"} className={({ isActive }) => isActive ? "active-red nav-link" : "nav-link"}>Užduotys</NavLink>
                                </li>*/}
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="btn btn-warning ml-auto">Logout</button>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <NavLink to={"login"} className={({ isActive }) => isActive ? "active-red nav-link" : "nav-link"}>Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"register"} className={({ isActive }) => isActive ? "active-red nav-link" : "nav-link"}>Signup</NavLink>
                                </li>
                            </>
                        }

                    </ul>


                    <div className="d-flex gap-3" style={{ marginLeft: "auto" }}>
                        <div style={{cursor:"pointer"}} onClick={() => i18n.changeLanguage("en")}>EN</div>
                        <div style={{cursor:"pointer"}} onClick={() => i18n.changeLanguage("lt")}>LT</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}