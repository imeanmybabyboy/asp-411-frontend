import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../../features/layout/Layout";
import Home from "../../pages/home/Home";
import Privacy from "../../pages/privacy/Privacy";
import Shop from "../../pages/home/Home";
import AppContext from "../../features/context/AppContext";
import { useState } from "react";
import type IUser from "../../entities/user/model/IUser";
import Profile from "../../pages/profile/Profile";
import Group from "../../pages/group/Group";
import NotFound from "../../pages/not_found/NotFound";

export default function App() {
    const [user, setUser] = useState<IUser | null>(null);
    const request = (url: string, init?: RequestInit, isFullRest?: boolean) => new Promise(
        (resolve, reject) => {
            if (url.startsWith("api://")) {
                url = url.replace("api://", "https://localhost:7012/")
            }

            fetch(url, init)
            .then(r => {
                if (r.status !== 200) {
                    r.text().then(reject)
                }
                else {
                    const ct = r.headers.get("Content-Type");
                    if (!/^application\/json(; .+)?$/.test(ct ?? "")) {
                        reject("Unsupported Content-Type: " + ct)
                    }
                    else {
                        r.json()
                        .then(j => resolve(isFullRest ? j : j.data))
                    }
                }
            })
        }
    );

    return (
        <AppContext.Provider value={{ user, setUser, request }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="Privacy" element={<Privacy />} />
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
