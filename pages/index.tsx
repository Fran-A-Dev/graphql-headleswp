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
      <ul>
        {posts?.map((post) => (
          <li>
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
