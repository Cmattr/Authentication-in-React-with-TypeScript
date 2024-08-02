// src/App.tsx
import React from 'react';
import Login from './components/Login';
import TokenDisplay from './components/GetToken';

const App: React.FC = () => {
    return (
        <div>
            <Login />
            <TokenDisplay />
        </div>
    );
};

export default App;

