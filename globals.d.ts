interface Post {
    id: string;
    slug: string;
    excerpt: string;
    title: string;
    content: string;
    author: {
        node: { name: string };
    }
}

