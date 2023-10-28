import React from 'react';

function Footer() {
    return (
        <footer className="px-3 py-2 d-block d-lg-none border-top text-white mt-3 fixed-bottom" style={{ backgroundColor: 'crimson' }}>
            <div className="container">
                <div className="d-flex">
                    <ul className="nav col-12 align-items-center justify-content-between">
                        <li><a href="https://uts-pwl.fitrailyasa.site/produk" className="nav-link px-2 text-white fw-bold"><i className="fa-solid fa-house fs-4"></i></a></li>
                        <li><a href="https://uts-pwl.fitrailyasa.site/admin/produk" className="nav-link px-2 text-white fw-bold"><i className="fa-solid fa-box fs-4"></i></a></li>
                        <li><a href="https://uts-pwl.fitrailyasa.site/admin/kategori" className="nav-link px-2 text-white fw-bold"><i className="fa-solid fa-tag fs-4"></i></a></li>
                        <li><a href="https://uts-pwl.fitrailyasa.site/profile/1" className="nav-link px-2 text-white fw-bold"><i className="fa-solid fa-user fs-4"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
