import React from "react"
import { useState } from 'react'
import "../index.css"

const navItems = [
    { item: "Home", icon: "" },
    { item: "Explore", icon: "" },
    { item: "Notifications", icon: "" },
    { item: "Messages", icon: "" },
    { item: "Bookmarks", icon: "" },
    { item: "Lists", icon: "" },
    { item: "Profile", icon: "" },
    { item: "More", icon: "" }
]


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-inner">
                <header className="sidebar-header">
                    <button
                        type="button"
                        className="sidebar-burger"
                        onClick={() => setIsOpen(!isOpen)}>
                        <span>
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </header>
                <nav className="sidebar-menu">
                    {navItems.map((item, index) => {
                        return (
                            <button key={index} className="sidebar-button">
                                <span>{item.icon}</span>
                                <p className="sidebar-icon">{item.item}</p>
                            </button>
                        )
                    })} <button className="twitt-button"></button>
                </nav>
            </div>
            <button className="twitt-button"></button>
        </aside>
    )
}