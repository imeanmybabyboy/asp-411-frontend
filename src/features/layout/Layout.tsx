import { Link, Outlet } from "react-router-dom";
import "./ui/Layout.css";

export default function Layout() {
    const authSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data = new FormData(e.target as HTMLFormElement);
        console.log(data.get("user-login"), data.get("user-password"));
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            ASP_PV411
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark"
                                        to="/Intro"
                                    >
                                        Intro
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-dark"
                                        to="/History"
                                    >
                                        History
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-item nav-link text-dark"
                                        to="/Privacy"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-item nav-link text-dark"
                                        to="/Controllers"
                                    >
                                        <i className="bi bi-sign-intersection-y"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-item nav-link text-dark"
                                        to="/Db"
                                    >
                                        <i className="bi bi-database"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-item nav-link text-dark"
                                        to="/Middleware"
                                    >
                                        <i className="bi bi-arrow-bar-right"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-item nav-link text-dark"
                                        to="/Storage"
                                    >
                                        <i className="bi bi-file-earmark-arrow-up"></i>
                                    </Link>
                                </li>
                            </ul>

                            {/* @if (isAuthenticated)
                            {
                                if (roleId == "Admin")
                                {
                                    <a className="nav-link p-2"
                                    title="Admin panel"
                                    asp-controller="Admin"
                                    asp-action="Index">
                                        <i className="bi bi-speedometer2"></i>
                                    </a>
                                }

                                <a className="nav-link p-2"
                                title="Мій кошик"
                                asp-controller="Cart"
                                asp-action="Index">
                                    <i className="bi bi-cart"></i>
                                </a>

                                <div className="nav-item">
                                    <a className="nav-link text-dark" title="Private info" asp-area="" asp-controller="User" asp-action="Private">
                                        Private page
                                    </a>
                                </div>

                                <div className="d-flex gap-2 align-items-center">
                                    <a asp-controller="User" asp-action="Profile" className="border border-2 border-warning rounded-circle d-flex align-items-center justify-content-center nav-link"
                                    title="@userTitle"
                                    style="width: 35px; height: 35px">
                                        @(userLetter!.ToUpper())
                                    </a>

                                    <a href="?logout"
                                    className="btn btn-outline-secondary"
                                    title="Вихід з авторизованого режиму">
                                        <i className="bi bi-box-arrow-left"></i>
                                    </a>
                                </div>
                            }
                            else
                            {
                                @* Button trigger modal *@
                                <a asp-controller="User" asp-action="SignUp" className="btn btn-outline-secondary me-3">
                                    <i className="bi bi-person-plus"></i>
                                </a>

                                @* Button trigger modal *@
                                <button type="button" className="btn btn-outline-secondary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#authModal">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                </button>
                            } */}
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#authModal"
                            >
                                <i className="bi bi-box-arrow-in-right"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="border-top footer text-muted">
                <div className="container">
                    &copy; 2025 - ASP_PV411 - <Link to="Privacy">Privacy</Link>
                </div>
            </footer>

            <div
                className="modal fade"
                id="authModal"
                tabIndex={-1}
                aria-labelledby="authModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="authModalLabel"
                            >
                                Вхід до сайту
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form id="auth-form" onSubmit={authSubmit}>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="login-addon"
                                    >
                                        <i className="bi bi-key"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control "
                                        name="user-login"
                                        placeholder="Login"
                                        aria-label="Login"
                                        aria-describedby="login-addon"
                                        value="Admin"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="user-password-addon"
                                    >
                                        <i className="bi bi-lock"></i>
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control "
                                        name="user-password"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="user-password-addon"
                                        value="Admin"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Скасувати
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                form="auth-form"
                            >
                                Вхід
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
