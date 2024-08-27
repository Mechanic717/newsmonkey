import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ height: '80px', padding: '1rem' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#" style={{ fontSize: '1.5rem' }}>NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{ fontSize: '1.25rem' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" style={{ fontSize: '1.25rem' }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Business" style={{ fontSize: '1.25rem' }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Health" style={{ fontSize: '1.25rem' }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science" style={{ fontSize: '1.25rem' }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sports" style={{ fontSize: '1.25rem' }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Technology" style={{ fontSize: '1.25rem' }}>Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
