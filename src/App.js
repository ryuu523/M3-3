import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Start from "./pages/Start";
import AuthLayout from "./components/AuthLayout";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import Clear from "./pages/Clear";
import Select from "./pages/Select";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Start />} ></Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="select" element={<Select />} />
          <Route path="profile" element={<Profile />} />
          <Route path="game" element={<Game />} />
          <Route path="clear" element={<Clear />} />
        </Route>
        <Route path="*" element={<Start />} />
      </Routes>
    </Router>

  );
}

export default App;
