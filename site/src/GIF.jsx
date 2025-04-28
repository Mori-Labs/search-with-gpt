import React from 'react';
import rec1 from './assets/rec1.gif';
import rec2 from './assets/rec2.gif';

const GIF = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'auto', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <img src={rec2} alt="rec1" style={{ maxWidth: '100%', height: 'auto' }} />
                <p> Select any text, right-click, and click on the 'Search with GPT' extension in the popup.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={rec1} alt="rec2" style={{ maxWidth: '100%', height: 'auto' }} />
                <p> The quick view of the extension displaying recent searches.</p>
            </div>
        </div>
    );
};

export default GIF;
