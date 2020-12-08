import React from 'react';

const Navbar = ({ totalCounters }) => {
        return (
                <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                                <span className="navbar-brand" href="#">
                                        Navbar <span className="badge badge-pill m-2 badge-secondary">{ totalCounters }</span>
                                </span>
                        </div>
                </nav>
        );
}

export default Navbar;