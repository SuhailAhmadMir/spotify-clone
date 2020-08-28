import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log("TOKKEN >>>>", hash);
    const _token = hash.access_token;
    console.log(_token);

    if (_token) {
      return setToken(_token);
    }
  }, []);
  return (
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
