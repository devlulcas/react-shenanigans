import "./styles.css";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { Post as PostModel } from "../../model/Post";

export default function Blog() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    const posts = await PostModel.getPostsFromApi();
    setPosts(posts);
    setLoading(false);
  }

  const displayPosts = posts.map((post) => {
    return <Post isUser={false} post={post} />;
  });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="blog-container">
      {loading ? <Spinner /> : displayPosts}
    </section>
  );
}
