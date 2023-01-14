import { Fragment } from "react";
import Head from "next/head";
import { getFeaturedPosts } from "../lib/postsUtil";
import { Hero } from "../components/HomePage/Hero";
import { FeaturedPosts } from "../components/HomePage/FeaturedPosts";

export default function HomePage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Anton&apos;s Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts }, revalidate: 600 };
}
