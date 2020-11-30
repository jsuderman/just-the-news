import React from 'react';
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__top">
                <img 
                className="header__img"
                src="data:image/png;base64,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"
                alt="header"
                />
            </div>
            <div className="header__bottom">
                <h2 className="header__text">All the news... from all angles</h2>
            </div>
        </div>
    )
}

export default Header
