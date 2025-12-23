import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../../features/layout/Layout";
import Home from "../../pages/home/Home";
import Privacy from "../../pages/privacy/Privacy";
import Shop from "../../pages/shop/Shop";
import Intro from "../../pages/intro/Intro";
import History from "../../pages/history/History";
import Controllers from "../../pages/controllers/Controllers";
import Db from "../../pages/db/Db";
import Middleware from "../../pages/middleware/Middleware";
import Storage from "../../pages/storage/Storage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/Intro" element={<Intro />} />
                    <Route path="/Privacy" element={<Privacy />} />
                    <Route path="/History" element={<History />} />
                    <Route path="/Controllers" element={<Controllers />} />
                    <Route path="/Db" element={<Db />} />
                    <Route path="/Middleware" element={<Middleware />} />
                    <Route path="/Storage" element={<Storage />} />
                    <Route path="/Shop" element={<Shop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
