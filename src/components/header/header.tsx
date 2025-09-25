import "./header.scss";

import { Link } from "wouter";
import { useState } from "react";

export default function Header() {

    const [isOpen, setOpen] = useState<boolean>(false);

    const handleSetModal = () => {
        setOpen(!isOpen);
    }

    return (
        <header className="Header">
            <div className="header-container">
                <h1 className="logo">FoodLab</h1>
                <div className="header-link">
                    <ul className="list-link">
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/recepts">Recepts</Link></li>
                        <li><Link className="link" to="/foodlist">Favorite</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                    </ul>
                </div>
                <button onClick={() => handleSetModal()} className="ham-menu">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    )}
                </button>
            </div>

            <div className={`nav-menu-for-mobile ${isOpen ? "show" : "hide"}`}>
                <nav>
                    <Link onClick={() => handleSetModal()} className="mobile-link" to="/">Home</Link>
                    <Link onClick={() => handleSetModal()} className="mobile-link" to="/recepts">Recepts</Link>
                    <Link onClick={() => handleSetModal()} className="mobile-link" to="/about">About</Link>
                    <Link onClick={() => handleSetModal()} className="mobile-link" to="/foodlist">Favorite</Link>
                </nav>
            </div>
        </header>
    )
}