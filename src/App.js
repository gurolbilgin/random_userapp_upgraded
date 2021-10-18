import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import RandomUser from "./components/randomUser/RandomUser";

function App() {
  const [tempUser, setTempUser] = useState([]);

  useEffect(() => {
    getTempUser();
  }, []);

  const getTempUser = () => {
    axios
      .get(`https://randomuser.me/api/`)
      // .then((res) => console.log(res))
      .then((res) => setTempUser(res.data.results[0]));
  };

  return (
    <div className="App">
      <RandomUser user={tempUser} getTempUser={getTempUser} />
    </div>
  );
}

export default App;
