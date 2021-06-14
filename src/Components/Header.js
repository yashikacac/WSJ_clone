import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div class='user'>
            <ul>
                <li>
                    <span className="Header">Subscribe</span>

                </li>
                <li>
                    <span className="Line"></span>
                </li>
                <li>
                    <span className="Header">Sign In</span>
                </li>
            </ul>
        </div>
    )
}