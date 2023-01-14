import { Fragment } from "react";
import Head from "next/head";
import { AllPosts } from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../lib/postsUtil";

export default function AllPostsPage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { posts: allPosts } };
}
