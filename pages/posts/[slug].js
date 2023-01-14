import Head from "next/head";
import { Fragment } from "react";
import { PostContent } from "../../components/Posts/PostDetails/PostContent";
import { getPostData, getPostsFiles } from "../../lib/postsUtil";

export default function PostDetailPage(props) {
  const { post } = props;

  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return { props: { post: postData }, revalidate: 600 };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
