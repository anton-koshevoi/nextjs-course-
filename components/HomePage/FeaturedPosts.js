import React from "react";
import { PostsGrid } from "../Posts/PostsGrid";
import classes from "./FeaturedPosts.module.css";

export function FeaturedPosts(props) {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
