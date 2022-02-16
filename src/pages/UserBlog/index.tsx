import "./styles.css";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { Post as PostModel } from "../../model/Post";
import { useParams } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";

export default function UserBlog() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [authorName, setAuthorName] = useState("");

  const [loading, setLoading] = useState(true);
  const { user } = useParams();
  const userId = parseInt(user || "1");

  async function getUserPosts() {
    const posts = await PostModel.getPostsFromApiByAuthor(userId);
    setPosts(posts);
    const uppercaseAuthorName = posts[0].author.name.toUpperCase();
    setAuthorName(uppercaseAuthorName);
    setLoading(false);
  }

  const displayPosts = posts.map((post) => {
    return <Post isUser={true} post={post} />;
  });

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <>
      <h1 className="profile-title">PERFIL DO USUÁRIO - {authorName}</h1>
      <ProfilePicture userId={userId} />
      <section className="blog-container blog-container--short">
        {loading ? <Spinner /> : displayPosts}
      </section>
    </>
  );
}
