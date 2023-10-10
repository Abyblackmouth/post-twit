import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Postlist from "./pages/postList";
import PostEdit from "./pages/postEdit";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Postlist />} />
                </Route>
                <Route path="postlist/edit/" element={<MainLayout />} >
                    <Route path=":id" element={<PostEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}