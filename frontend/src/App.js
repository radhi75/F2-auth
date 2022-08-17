import { Route, Routes } from "react-router-dom";
import Privateroute from "./PrivateRoutes/Privateroute";
import "./App.css";
import Login from "./Components/Login";
import Navigtion from "./Components/Navigtion";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Alerterrors from "./Components/Alerterrors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Get_current } from "./redux/Action/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_current());
  }, []);
  return (
    <div className="App">
      <Navigtion />
      <Alerterrors />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Privateroute>
              <Profile></Profile>
            </Privateroute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
