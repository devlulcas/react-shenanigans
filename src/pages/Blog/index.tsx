import Title from "../../components/Title";
import "./styles.css";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { Post as PostModel } from "../../model/Post";

export default function Blog() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const data = await fetch(url).then((response) => response.json());
    const posts = PostModel.streamList(data);

    setPosts(posts);
    setLoading(false);
  }

  const displayPosts = posts.map((post) => {
    return <Post post={post} />;
  });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <section className="blog">
        <Title>BLOG</Title>

        <section className="blog-container">
          {loading ? <Spinner /> : displayPosts}
        </section>
      </section>
    </>
  );
}
