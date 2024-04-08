import axios from 'axios';
import { BACKEND_BASE_URL } from './config.js';

function App() {
    axios.get(BACKEND_BASE_URL).then(res => {
        console.log(res.data);
    });

    return <div>Testing </div>;
}

export default App;
