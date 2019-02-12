import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/" className="menu-link">Main list</Link>
                        </li>
                        <li>
                            <Link to="/record" className="menu-link">Add record</Link>
                        </li>
                        <li>
                            <Link to="/report" className="menu-link">Report</Link>
                        </li>
                        <li>
                            <Link to="/filters" className="menu-link">Filter</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
