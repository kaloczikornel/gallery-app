import axios from 'axios';
import { BACKEND_BASE_URL } from './config.js';
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    axios.get(`${BACKEND_BASE_URL}/users`).then(res => {
        setUsers(res.data);
    });

    return (
        <>
            <div>Testing </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
