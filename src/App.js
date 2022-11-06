import { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Savepro from "./components/Savepro";

import { userAuthContext } from "./Context/userAuthContext";


function App() {
  const [showProfile, setShowProfile] = useState("");
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [userpassword, setUserpassword] = useState("");


  return (
    <section>
      <userAuthContext.Provider
        value={{ username, setUsername, usermail, setUsermail, userpassword, setUserpassword, setShowProfile }}
      >
        {showProfile ? <Savepro /> : <Login />}
      </userAuthContext.Provider>
    </section>
  );
}

export default App;
