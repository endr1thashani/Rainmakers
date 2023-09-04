import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from './pages/MainPage'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
