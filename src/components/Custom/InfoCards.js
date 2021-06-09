import React from 'react';

function InfoCards({ children, icolor }) {
    return (
        <div className='info-card' style={{ backgroundColor: icolor, }}>
            <h1 className='info-text'>{children}</h1>
        </div>
    );
}

export default InfoCards;