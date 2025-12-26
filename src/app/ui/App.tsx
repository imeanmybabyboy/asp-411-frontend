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
import AppContext from "../../features/context/AppContext";
import { useState } from "react";
import type IUser from "../../entities/user/model/IUser";
import Profile from "../../pages/profile/Profile";
import Group from "../../pages/group/Group";
import NotFound from "../../pages/not_found/NotFound";

export default function App() {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="Intro" element={<Intro />} />
                        <Route path="Privacy" element={<Privacy />} />
                        <Route path="History" element={<History />} />
                        <Route path="Controllers" element={<Controllers />} />
                        <Route path="Db" element={<Db />} />
                        <Route path="Middleware" element={<Middleware />} />
                        <Route path="Storage" element={<Storage />} />
                        <Route path="Shop" element={<Shop />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Group/:slug" element={<Group />} />
                        
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
