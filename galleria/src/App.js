import Preview from "./components/preview/Preview.component";
import Slide from "./components/slide/slide.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Preview />} />
          <Route path="/slide/:paintingTitle" element={<Slide />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
