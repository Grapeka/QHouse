import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useState, useEffect } from "react";
import axios from "axios";
import uri from "./components/config";
import Edit from "./pages/Edit/Edit";

function App() {
  const [username, setUsername] = useState()

  useEffect(() => {
    let url = uri + '/auth/login'
    axios.defaults.withCredentials = true;

    axios
      .get(url)
      .then((res) => {
        if (res.data.loggedIn == true) {
          let username = res.data.username
          setUsername(username)
        }
      });

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home username={username} setUsername={setUsername} />} />
          <Route path="/admin" element={<Login username={username} setUsername={setUsername} />} />
          {username && <Route path="/edit" element={<Edit />} />}
          <Route exact path='*' element={<Home username={username} setUsername={setUsername} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;