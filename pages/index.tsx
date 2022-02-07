import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export default function Home() {
  const { data } = useQuery(gql`
    query {
      posts {
        nodes {
          id
          title
          slug
          excerpt
        }
      }
    }
  `);

  const posts: Array<Post> = data?.posts?.nodes;

  return (
    <div>
      <h1>Hello Wolrd</h1>
      <h2>Black Diamond rules</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.slug}`}>
              <a href={`/${post.slug}`}>
                <h2>{post.title}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://graceerixon.wpengine.com/graphql");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
