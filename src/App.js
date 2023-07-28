import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import { useState } from "react";
import { myContext } from "./Components/Context";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  const [user, setUser] = useState([]);

  const [login, setLogin] = useState(false);

  return (
    <div>
      <myContext.Provider value={{ user, setUser, login, setLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
