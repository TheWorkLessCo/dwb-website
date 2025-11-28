import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dallas Window Butler Blog | Expert Window Tips & Home Insights",
  description:
    "Stay informed with Dallas Window Butler. Discover tips, guides, and updates on windows, doors, and home efficiency from trusted local pros.",
  keywords:
    "window tips, home improvement blog, energy efficient windows, Dallas home tips, window replacement guide, glass repair advice",
  openGraph: {
    title: "Dallas Window Butler Blog | Expert Window Tips & Home Insights",
    description: "Discover tips, guides, and updates on windows, doors, and home efficiency from trusted local pros.",
    url: "https://dallaswindowbutler.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://dallaswindowbutler.com/blog",
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "5-signs-replace-windows",
      title: "5 Signs It's Time to Replace Your Windows",
      preview:
        "Drafty rooms, rising energy bills, and condensation between panes are all red flags. Learn when it's time to upgrade your windows for better comfort and efficiency.",
      image: "/modern-home-windows-exterior.jpg",
      date: "March 15, 2024",
    },
    {
      slug: "energy-efficient-glass-texas",
      title: "Why Energy-Efficient Glass Pays for Itself in Texas Heat",
      preview:
        "Texas summers are brutal on your cooling costs. Discover how Low-E glass and proper window selection can dramatically reduce your energy bills year-round.",
      image: "/energy-efficient-window-glass-sunlight.jpg",
      date: "March 10, 2024",
    },
    {
      slug: "understanding-low-e-glass",
      title: "Understanding Low-E Glass: What Every Homeowner Should Know",
      preview:
        "Low-E coatings are a game-changer for home comfort and efficiency. We break down what Low-E glass is, how it works, and why it matters for your home.",
      image: "/low-e-glass-coating-technology.jpg",
      date: "March 5, 2024",
    },
    {
      slug: "vinyl-vs-aluminum-windows",
      title: "How to Choose Between Vinyl and Aluminum Windows",
      preview:
        "Both materials have their strengths. Learn the pros and cons of vinyl versus aluminum window frames to make the best choice for your home and budget.",
      image: "/vinyl-and-aluminum-window-frames-comparison.jpg",
      date: "February 28, 2024",
    },
    {
      slug: "patio-door-upgrades-home-value",
      title: "Patio Door Upgrades That Add Value to Your Home",
      preview:
        "Upgrading your patio doors improves curb appeal, energy efficiency, and resale value. Explore the best options for maximizing your home's potential.",
      image: "/modern-patio-sliding-doors-home.jpg",
      date: "February 20, 2024",
    },
    {
      slug: "dallas-window-butler-difference",
      title: "The Dallas Window Butler Difference: Service That Lasts a Lifetime",
      preview:
        "Family-owned, locally trusted, and committed to excellence. Discover what sets Dallas Window Butler apart and why homeowners choose us for their window and door needs.",
      image: "/professional-window-installation-service.jpg",
      date: "February 15, 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">Dallas Window Butler Blog</h1>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
              Expert tips, product insights, and homeowner advice from your local window, glass, and door professionals.
            </p>
            <div className="pt-4">
              <a
                href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get free quote from Dallas Window Butler"
              >
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8"
                  data-source="blog-hero"
                >
                  Get My Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feed Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Posts</h2>
            <p className="text-xl text-gray-600">Stay informed with expert advice and industry insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-brand-blue font-semibold">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.preview}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Upgrade Your Home?</h2>
          <p className="text-xl text-white/90 mb-6">
            Get expert advice and a free consultation from Dallas Window Butler today.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/765818e4-20d7-4c73-8ea5-113760712b29/public/work_request/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule free consultation with Dallas Window Butler"
          >
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 px-8" data-source="blog-final">
              Schedule Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
