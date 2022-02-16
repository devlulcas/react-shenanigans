import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogLayout from "./layouts/Blog";
import Root from "./layouts/Root";
import AnimePhrase from "./pages/AnimePhrases";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import UserBlog from "./pages/UserBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />

          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path="/blog/:user" element={<UserBlog />} />
          </Route>

          <Route path="/animephrase" element={<AnimePhrase />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
