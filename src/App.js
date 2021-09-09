import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import RandomUser from "./components/randomUser/RandomUser";

function App() {
  const [tempUser, setTempUser] = useState();

  useEffect(() => {
    getTempUser();
  }, []);

  const getTempUser = () => {
    axios
      .get(`https://randomuser.me/api/`)
      // .then((res) => console.log(res))
      .then((res) => setTempUser(res.data.results[0]));
  };

  // console.log(tempUser);
  return (
    <div className="App">
      <RandomUser tempUser={tempUser} />
    </div>
  );
}

export default App;
