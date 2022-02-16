import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post as PostModel } from "../../model/Post";
import "./styles.css";

type PostProps = {
  post: PostModel;
  isUser: boolean;
};

export default function Post({ post, isUser }: PostProps) {
  const [src, setSrc] = useState(`https://picsum.photos/id/${post.id}/200/200`);

  const placeholderImage = "https://http.cat/404.jpg";

  const userPosts = (
    <Link className="card-link" to={`${post.userId}`}>
      Mais de {post.author.name}
    </Link>
  );

  const comments = (
    <Link className="card-link" to={`${post.id}`}>
      Comentários
    </Link>
  );

  return (
    <article className="card">
      {!isUser ? userPosts : ""}
      
      <div className="image-container">
        <img
          onError={() => setSrc(placeholderImage)}
          src={src}
          alt="post image"
        />
      </div>
      <h3>{post.title.toUpperCase()}</h3>
      <p>{post.body}</p>
      <p>
        Por: {post.author.name}. Vulgo: {post.author.username}
      </p>
      
      {isUser ? comments : ""}
    </article>
  );
}
