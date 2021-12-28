import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Post() {
  const { query } = useRouter();
  const { data } = useQuery(gql`
    query {
        post(id: "${query.slug}" idType: SLUG) {
            title
            content
            author {
                node {
                    name
                }
            }
        }

    }
    
    `);
  const post: Post = data?.post;
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.author.node.name}</p>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </article>
  );
}
