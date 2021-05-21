import axios from "axios";
import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results));
  }, []);

  return (
    <div className="App">
      <div className="User">
        {user?.map((item) => (
          <Users item={item} />
        ))}
      </div>
      <button
        className="random"
        onClick={() => {
          axios
            .get("https://randomuser.me/api/")
            .then((res) => setUser(res.data.results));
        }}
      >
        Random User
      </button>
    </div>
  );
}

export default App;
