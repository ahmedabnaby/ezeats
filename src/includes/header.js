import React from 'react'
import { CartCount } from '../components/CartCount';
export const Navbar = () => {
    return (
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary" /> <a href="#" className="text-white">123 Street, New York</a></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary" /><a href="#" className="text-white">Email@Example.com</a></small>
                    </div>
                    <div className="top-link pe-2">
                        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="/" className="navbar-brand">
                        <img src='img/logo.svg' className='logo' />
                    </a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary" />
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="shop.html" className="nav-item nav-link">Shop</a>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary" /></button>
                            <a href="/cart" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x" />
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>
                                    <CartCount/>
                                </span>
                            </a>
                            <a href="#" className="my-auto">
                                <i className="fas fa-user fa-2x" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );

}