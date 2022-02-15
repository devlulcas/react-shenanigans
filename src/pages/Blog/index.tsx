import Title from "../../components/Title";
import "./styles.css";
import Post from "../../components/Post";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [seePost, setSeePost] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [seePost]);

  return (
    <>
      <section className="blog">
        <Title>BLOG</Title>
        <button onClick={() => setSeePost(true)}>Ver postagens</button>

        <section className="blog-container">
          {posts.map((post) => {
            return <Post />;
          })}
        </section>
      </section>
    </>
  );
}
