/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import projectsData from '../../helper/projects.json';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS dosyasını ekleyin
import 'bootstrap/dist/css/bootstrap.min.css';






const Header = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Projeleri JSON dosyasından al
        setProjects(projectsData.projects);
    }, []);

    return (
        <nav className="navbar bg-secondary navbar-expand-lg ">
            <div className="container-fluid d-flex justify-content-space-evenly" style={{ width: '100%' }}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a href="/" className="nav-link active fw-bold fs-5">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="about" className="nav-link active fw-bold fs-5">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="contact" className="nav-link active fw-bold fs-5">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active fw-bold fs-5 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu">
                                {projects.map(project => (
                                            <tr className="align-middle" key={project.section_id}>
                                                <td className="align-middle text-start"><a href="Sections" className="dropdown-item">{project.title}</a></td>
                                                <td className="align-middle text-end pe-0"><button className="btn btn-sm btn-light">+</button></td>
                                            </tr>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link">+Add</a></li>
                    </ul>
                </div>
                <div className="navbar-form">
                    <form className="d-flex search" role="search" id="searchForm">
                        <input className="form-control me-2" id="input" type="search" placeholder="Name"
                            aria-label="Search" />
                        <button className="btn btn-light" type="submit" id="search">Search</button>
                    </form>
                </div>
            </div>
        </nav >
    );
}

export default Header;
