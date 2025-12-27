import { Link, Outlet } from "react-router-dom";
import "./ui/Layout.css";
import AppContext from "../context/AppContext";
import { useContext, useRef } from "react";
import Base64 from "../../shared/base64/Base64";

export default function Layout() {
    const { user, setUser } = useContext(AppContext)!;
    const closeModalRef = useRef<HTMLButtonElement>(null);

    const authSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data = new FormData(e.target as HTMLFormElement);
        console.log(data.get("user-login"), data.get("user-password"));

        const formData = new FormData(e.target as HTMLFormElement);

        const login = formData.get("user-login");
        const password = formData.get("user-password");

        if (login !== null && password !== null) {
            let invalid = login.toString().length === 0;

            const loginCont = (e.target as HTMLElement).querySelector(
                "div:nth-child(1)"
            );

            if (loginCont !== null) {
                if (invalid) {
                    let loginInvalid =
                        loginCont.querySelector(".invalid-feedback");

                    if (!loginInvalid) {
                        loginInvalid = document.createElement("div");
                        loginInvalid.textContent = "Необхідно зазначити логін!";
                        loginInvalid.classList.add("invalid-feedback");

                        loginCont.append(loginInvalid);
                    }
                    let input = loginCont.querySelector("input");

                    if (input !== null) {
                        input.classList.add("is-invalid");
                        input.classList.remove("is-valid");
                    }
                    return;
                } else {
                    let input = loginCont.querySelector("input");

                    if (input !== null) {
                        input.classList.add("is-valid");
                        input.classList.remove("is-invalid");
                    }
                }
            }

            invalid = password.toString().length === 0;
            const passwordCont = (e.target as HTMLElement).querySelector(
                "div:nth-child(2)"
            );

            if (passwordCont !== null) {
                if (invalid) {
                    let passwordInvalid =
                        passwordCont.querySelector(".invalid-feedback");

                    if (!passwordInvalid) {
                        passwordInvalid = document.createElement("div");
                        passwordInvalid.textContent =
                            "Необхідно зазначити пароль!";
                        passwordInvalid.classList.add("invalid-feedback");

                        passwordCont.append(passwordInvalid);
                    }
                    let input = passwordCont.querySelector("input");

                    if (input !== null) {
                        input.classList.add("is-invalid");
                        input.classList.remove("is-valid");
                    }
                    return;
                } else {
                    let input = passwordCont.querySelector("input");

                    if (input !== null) {
                        input.classList.add("is-valid");
                        input.classList.remove("is-invalid");
                    }
                }
            }
        }

        // RFC 7617
        // https://datatracker.ietf.org/doc/html/rfc7617

        const userPass = login + ":" + password;
        const basicCredentials = Base64.encode(userPass);

        fetch("https://localhost:7012/User/ApiAuthenticate", {
            method: "GET",
            headers: {
                Authorization: "Basic " + basicCredentials,
            },
        }).then((r) => {
            if (r.status >= 400) {
                r.text().then((error) => {
                    let modalFooter = document.querySelector(".modal-footer");
                    if (!modalFooter) return;

                    let errorCont = modalFooter.querySelector(".alert-danger");

                    if (error === "") {
                        errorCont?.remove();
                        return;
                    }
                    errorCont?.remove();

                    const newErrorCont = document.createElement("div");
                    newErrorCont.classList.add("alert", "alert-danger", "text-truncate")
                    newErrorCont.style.width = "fit-content";
                    newErrorCont.style.maxWidth = "250px";
                    newErrorCont.style.padding = "6px";
                    newErrorCont.title = error;
                    newErrorCont.textContent = error;

                    modalFooter.prepend(newErrorCont);
                });
            } else {
                r.json().then((j) => setUser(j));
                closeModalRef.current?.click();
            }
        });
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            ASP_PV411
                        </Link>
                        <Link to="/Profile">Мій профіль</Link>
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
                            {user === null ? (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#authModal"
                                    >
                                        <i className="bi bi-box-arrow-in-right"></i>
                                    </button>
                                </>
                            ) : (
                                <div className="d-flex align-items-center gap-2">
                                    <Link to="/Profile">
                                        <button className="btn btn-outline-success">
                                            {user.name.charAt(0)}
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => setUser(null)}
                                        className="btn btn-outline-success"
                                    >
                                        <i className="bi bi-box-arrow-in-left"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="border-top footer text-muted mt-4">
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
                                ref={closeModalRef}
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
