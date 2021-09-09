import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import RandomUser from "./components/randomUser/RandomUser";

function App() {
  const [tempUser, setTempUser] = useState();
  const [addUser, setAddUser] = useState("");

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
      <RandomUser user={tempUser} getProfileData={getTempUser} />
    </div>
  );
}

export default App;
