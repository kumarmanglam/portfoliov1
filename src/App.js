import Homepage from "./components/pages/Homepage";
import Reactprojects from "./components/pages/Reactprojects";
import Uiprojects from "./components/pages/Uiprojects";
import Vanillaprojects from "./components/pages/Vanillaprojects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ReactProjects" element={<Reactprojects />} />
        <Route path="/UIprojects" element={<Uiprojects />} />
        <Route path="/Vanillaprojects" element={<Vanillaprojects />} />
      </Routes>
    </div>
  );
}

export default App;
