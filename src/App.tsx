import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Root from "./layouts/Root";
import AnimePhrase from "./pages/AnimePhrases";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/animephrase" element={<AnimePhrase />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
