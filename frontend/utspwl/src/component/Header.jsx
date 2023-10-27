import React from 'react';

function Header() {
    return (
        <header className="px-3 py-2 border-bottom text-white mb-3 fixed-top" style={{ backgroundColor: 'crimson' }}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <img className="img-fluid" width="60" src="https://uts-pwl.fitrailyasa.site/assets/img/logo.png" alt="Logo" />
                    <div className="d-none d-lg-block">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mx-3 justify-content-center mb-md-0">
                            <li><a href="https://uts-pwl.fitrailyasa.site/produk" className="nav-link px-3 text-white fw-bold fs-5">Home</a></li>
                            <li><a href="https://uts-pwl.fitrailyasa.site/admin/produk" className="nav-link px-3 text-white fw-bold fs-5">Produk</a></li>
                            <li><a href="https://uts-pwl.fitrailyasa.site/admin/kategori" className="nav-link px-3 text-white fw-bold fs-5">Kategori</a></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href="#" className="nav-link px-2 text-white fw-bold">
                            <i className="fa-solid fa-shopping-cart fs-4"></i>
                        </a>
                        <a href="https://uts-pwl.fitrailyasa.site/profile/1" className="ml-4 border rounded-circle nav-link px-2 text-white fw-bold d-none d-lg-block">
                            <i className="fa-solid fa-user fs-4 px-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
