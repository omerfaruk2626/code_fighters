import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';






const Header = () => {

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
                        <li className="nav-item">
                            <Link to="/" className="nav-link active fw-bold fs-5">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active fw-bold fs-5">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active fw-bold fs-5">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Sections" className="nav-link active fw-bold fs-5">Projects</Link>
                        </li>
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
