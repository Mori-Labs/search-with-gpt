import React from 'react';
import './Header.css';  
import icon128 from './assets/icon128.png';
import icon16 from './assets/icon16.png';
const Header = () => {

    const buttonClick = () => {
        window.open('https://www.github.com/Mori-Labs/search-with-gpt', '_blank');
    }
    return (
        <header className="header">
            <div className="header-container">
                <div className="left-section">
                    <img
                        src={icon128}
                        alt="Icon"
                        className="icon"
                    />
                    <h1 className="title">Search with GPT</h1>
                </div>
                <button onClick={buttonClick} className="header-button">Get Extension</button>
                </div>
        </header>
    );
};

export default Header;
