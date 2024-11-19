import React, { useState } from "react";

const App = () => {
    const [message, setMessage] = useState("");

    const fetchMessage = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/1");
            const data = await response.json();
            setMessage(JSON.stringify(data));
        } catch (error) {
            setMessage("Error fetching data");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to Registration App</h1>
            <button onClick={fetchMessage}>Fetch Registration</button>
            <p>{message}</p>
        </div>
    );
};

export default App;
