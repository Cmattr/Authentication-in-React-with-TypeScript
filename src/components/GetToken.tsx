import React from 'react';

const TokenDisplay: React.FC = () => {
    const token = sessionStorage.getItem('jwtToken_key');

    return (
        <div>
            <h2>Token Information</h2>
            {token ? <p>Token: {token}</p> : <p>No token found</p>}
        </div>
    );
};

export default TokenDisplay;