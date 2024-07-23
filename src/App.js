import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import './loginpage.css'
function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic validation; modify as needed
        if (username && password) {
            setIsLoggedIn(true);
        }
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <div id="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <QuizComponent />
            )}
        </div>
    );
}

export default App;
