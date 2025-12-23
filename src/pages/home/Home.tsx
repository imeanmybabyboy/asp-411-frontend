import { Link } from "react-router-dom";
import "./ui/Home.css";

export default function Home() {
    return (
        <>
            <div className="text-center">
                <h1 className="display-4">
                    Розробка веб-додатків з використанням технології ASP.NET
                    Core
                </h1>
                <p>
                    Learn about{" "}
                    <a href="https://learn.microsoft.com/aspnet/core">
                        building Web apps with ASP.NET Core
                    </a>
                    .
                </p>
            </div>

            <h2>Зміст</h2>

            <div className="list-group">
                <Link
                    className="list-group-item list-group-item-action"
                    to="/Intro"
                >
                    Вступ до ASP
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/History"
                >
                    Історія ASP
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/Controllers"
                >
                    <i className="bi bi-sign-intersection-y"></i> Контролери
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/Db"
                >
                    <i className="bi bi-database"></i> База даних. Контекст
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/Middleware"
                >
                    <i className="bi bi-arrow-bar-right"></i> Middleware.
                    Утримання авторизації
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/Storage"
                >
                    <i className="bi bi-file-earmark-arrow-up"></i> Завантаження
                    та збереження файлів
                </Link>

                {/* </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="Razor"
                >
                    Синтаксис Razor
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="IoC"
                >
                    Інверсія управління. Сервіси
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="IoCHomework"
                >
                    Інверсія управління. Д/З
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="Services"
                >
                    Services. 04.11 Homework
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="Forms"
                >
                    Форми 1. Передача даних до сервера
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="FormsHomework"
                >
                    Форми. Практика
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="FormModels"
                >
                    Форми 2. Моделі форм
                </a>
                <a
                    className="list-group-item list-group-item-action"
                    asp-action="Controllers"
                    title="Контролери"
                >
                    <i className="bi bi-sign-intersection-y"></i> Контролери
                </a>

                <a
                    className="list-group-item list-group-item-action"
                    asp-action="ControllersHomework"
                >
                    <i className="bi bi-sign-intersection-y"></i> Контролери.
                    Практичне 13.11
                </a>

                <a
                    className="list-group-item list-group-item-action"
                    title="База даних. Контекст"
                    asp-action="Db"
                >
                    <i className="bi bi-database"></i> База даних. Контекст
                </a>

                <a
                    className="list-group-item list-group-item-action"
                    title="Middleware"
                    asp-action="Middleware"
                >
                    <i className="bi bi-arrow-bar-right"></i> Middleware.
                    Утримання авторизації
                </a>

                <a
                    className="list-group-item list-group-item-action"
                    asp-action="Storage"
                >
                    <i className="bi bi-file-earmark-arrow-up"></i> Завантаження
                    та збереження файлів
                </a>

                <a
                    className="list-group-item list-group-item-action"
                    asp-action="Templates"
                >
                    <i className="bi bi-tools"></i> Display Templates: шаблони
                    відображення
                </a> */}

                <Link
                    className="list-group-item list-group-item-action"
                    to="/Shop"
                >
                    <i className="bi bi-cart-check"></i> Проєкт: крамниця
                </Link>
            </div>
        </>
    );
}
