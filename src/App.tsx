import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogLayout from "./layouts/Blog";
import Root from "./layouts/Root";
import NotFound from "./pages/404";
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
            <Route path=":user" element={<UserBlog />} />
          </Route>

          <Route path="/animephrase" element={<AnimePhrase />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
