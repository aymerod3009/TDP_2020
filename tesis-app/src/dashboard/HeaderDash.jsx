import React from 'react'

export const HeaderDash = () => {
    return (
        <div>

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu"  role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a  className="nav-link">Home</a>
                    </li>
                </ul>
            
            </nav>

        </div>
    )
}
