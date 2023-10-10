import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TodoPost from "../components/PostItem";
import PostBrowser from "../components/PostBrowser";
import Offcanvas from "../components/Offcanvas";

export default function MainLayout() {
    return (

        <React.Fragment>
            <Offcanvas/>
            <div className="mainLayout">
            <div className="main-container">
                <PostBrowser/>  
            </div>
            </div>
        </React.Fragment>
    );
}