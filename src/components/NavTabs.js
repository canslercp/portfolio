import React from 'react';

// Useing object destructuring to pluck off variables from the props object and assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top nav-custom">
            <div className="container-fluid">
                {/* link to home page */}
                <a className="navbar-brand name-title"
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                >CORBIN + CANSLER</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="offcanvas offcanvas-end navTabs" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigate</h5> */}
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <ul className="navbar-nav offcanvas-body">
                        <li className="nav-item">
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                aria-current={currentPage === 'About' ? 'page' : null}
                                data-bs-dismiss="offcanvas"
                            >About</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#projects"
                                onClick={() => handlePageChange('Projects')}
                                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                aria-current={currentPage === 'Projects' ? 'page' : null}
                                data-bs-dismiss="offcanvas"
                            >Projects</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                aria-current={currentPage === 'Projects' ? 'page' : null}
                                data-bs-dismiss="offcanvas"
                            >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavTabs;