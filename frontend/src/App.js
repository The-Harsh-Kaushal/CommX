import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LogSign/Login";
import MainContainer from "./components/MainContainer";
import Welcome from "./components/Welcome";
import CreateGroup from "./components/CreateGroup";
import WorkArea from "./components/WorkArea";
import User from "./components/User";
import Group from "./components/Group";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const DarkMode = useSelector((state) => state.themekey);
  return (
    <div className={"App " + (DarkMode ? "" : "dark")}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="app" element={<MainContainer />}>
          <Route path="" element={<Welcome />} />
          <Route path="Create-Group" element={<CreateGroup />} />
          <Route path="ChatArea" element={<WorkArea />} />
          <Route path="User" element={<User />} />
          <Route path="groups" element={<Group />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
