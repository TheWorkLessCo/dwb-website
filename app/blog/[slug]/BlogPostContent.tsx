"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "./blogPosts"

export function BlogPostContent({ slug }: { slug: string }) {
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[400px] lg:h-[500px]">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <button
                className="flex items-center gap-2 hover:text-brand-blue transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      url: window.location.href,
                    })
                  }
                }}
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-200">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Ready to Get Started?</h3>
              <p className="text-gray-600">
                Contact Dallas Window Butler for a free consultation and expert advice on your window and door needs.
              </p>
              <a
                href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get free quote from Dallas Window Butler"
              >
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8">
                  Get My Free Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Back to Blog Link (Bottom) */}
          <div className="mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
