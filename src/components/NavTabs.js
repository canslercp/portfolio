import React from 'react';

// Useing object destructuring to pluck off variables from the props object and assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {/* link to home page */}
                <a className="navbar-brand"
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                >CORBIN+CANSLER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                aria-current={currentPage === 'About' ? 'page' : null}
                            >-About</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                aria-current={currentPage === 'Projects' ? 'page' : null}
                            >×Projects</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                aria-current={currentPage === 'Projects' ? 'page' : null}
                            >÷Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavTabs;