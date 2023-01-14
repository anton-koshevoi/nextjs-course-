import React from "react";
import { PostItem } from "./PostItem";
import classes from "./PostsGrid.module.css";

export function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
