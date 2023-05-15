import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoMatch from "./assets/modules/NoMatch";
import Default from "./assets/modules/Default";

import "./dist/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
