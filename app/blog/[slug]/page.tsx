import type { Metadata } from "next"
import { blogPosts } from "./blogPosts"
import { BlogPostContent } from "./BlogPostContent"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post Not Found | Dallas Window Butler Blog",
    }
  }

  return {
    title: `${post.title} | Dallas Window Butler Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
      url: `https://dallaswindowbutler.com/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://dallaswindowbutler.com/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostContent slug={params.slug} />
}
