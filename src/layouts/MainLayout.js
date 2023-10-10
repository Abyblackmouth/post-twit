import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TodoPost from "../components/PostItem";
import PostBrowser from "../components/PostBrowser";

export default function MainLayout() {
    return (
        <React.Fragment>
            <div className="MainLayout">
            <header>
                    <Navbar />
                </header>
                <aside>
                    <Sidebar />
                </aside>
                <main>
                    <PostBrowser/>
                </main>
            </div>
        </React.Fragment>
    );
}