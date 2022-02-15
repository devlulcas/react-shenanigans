import React from "react";
import { Post as PostModel } from "../../model/Post";
import "./styles.css";

type PostProps = {
  post: PostModel;
};

export default function Post({ post }: PostProps) {
  return (
    <article className="card">
      <div>
        <img src="https://via.placeholder.com/150/92c952" alt="" />
      </div>
      <h3>{post.title.toUpperCase()}</h3>
      <p>{post.body}</p>
    </article>
  );
}
