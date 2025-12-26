import { useContext, useEffect } from "react";
import "./ui/Profile.css";
import AppContext from "../../features/context/AppContext";
import { useNavigate } from "react-router-dom";
import NotFound from "../not_found/NotFound";

export default function Profile() {
    const { user } = useContext(AppContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate("/");
        }
    }, [user]);
    return (
        <>
            <div className="text-center">
                <h1 className="display-4">Кабінет користувача</h1>
            </div>
            {user === null ? (
                <NotFound />
            ) : (
                // col col-sm-12 offset-sm-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-5 offset-xl-1 col-xxl-4 offset-xxl-2 ------------------ class for div
                // |
                <div className="col col-sm-5 m-auto">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Назва</th>
                                <th className="d-flex justify-content-between align-items-end">
                                    Значення
                                    <button
                                        id="btn-profile-edit"
                                        title="Редагувати дані"
                                        type="button"
                                        className="btn btn-outline-warning shadow-none"
                                    >
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Ім'я</td>
                                <td data-profile-editable="Name">
                                    {user.name}
                                </td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td data-profile-editable="Email">
                                    {user.email}
                                </td>
                            </tr>
                            <tr>
                                <td>Логін</td>
                                <td data-profile-editable="Login">
                                    {user.login}
                                </td>
                            </tr>
                            <tr style={{ display: "none" }} data-profile-hidden>
                                <td>Пароль</td>
                                <td data-profile-editable="Password"></td>
                            </tr>

                            <tr
                                style={
                                    user.birthdate !== null
                                        ? { display: "flex-row" }
                                        : { display: "none" }
                                }
                                data-profile-hidden
                            >
                                <td>
                                    Дата народження <br /> Див.{" "}
                                    <a
                                        target="_blank"
                                        href="https://forum.knime.com/t/writing-a-flexible-date-format-handling-workflow/32165"
                                    >
                                        формати часу
                                    </a>{" "}
                                </td>
                                <td data-profile-editable="Birthdate">
                                    {new Intl.DateTimeFormat("uk-UA", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    }).format(new Date(user.birthdate))}
                                </td>
                            </tr>
                            <tr
                                style={
                                    user.phone !== null
                                        ? { display: "flex-row" }
                                        : { display: "none" }
                                }
                                data-profile-hidden
                            >
                                <td>Номер телефону</td>
                                <td data-profile-editable="Phone">
                                    {user.phone}
                                </td>
                            </tr>

                            <tr>
                                <td>Дата реєстрації</td>
                                <td>
                                    {new Intl.DateTimeFormat("uk-UA", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }).format(new Date(user.registerAt))}
                                </td>
                            </tr>

                            <tr>
                                <td>Роль (права)</td>
                                <td>
                                    {user.role.canCreate > 0 ? (
                                        <b>C</b>
                                    ) : (
                                        <s>C</s>
                                    )}
                                    {user.role.canRead > 0 ? (
                                        <b>R</b>
                                    ) : (
                                        <s>R</s>
                                    )}
                                    {user.role.canUpdate > 0 ? (
                                        <b>U</b>
                                    ) : (
                                        <s>U</s>
                                    )}
                                    {user.role.canDelete > 0 ? (
                                        <b>D</b>
                                    ) : (
                                        <s>D</s>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}
