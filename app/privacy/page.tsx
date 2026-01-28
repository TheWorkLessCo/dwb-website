import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Dallas Window Butler",
  description:
    "Privacy policy for Dallas Window Butler. Learn how we collect, use, and protect your personal information.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://dallaswindowbutler.com/privacy",
  },
}

export default function PrivacyPage() {
  const lastUpdated = "January 27, 2026"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00152e] mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none prose-headings:text-[#00152e] prose-a:text-[#049bf2]">
            <p className="lead text-lg text-slate-600">
              Dallas Window Butler (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Request a quote or consultation</li>
              <li>Contact us via phone, email, or contact forms</li>
              <li>Schedule an appointment</li>
              <li>Sign up for our newsletter</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Home address</li>
              <li>Project details and preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about
              your device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and perform services</li>
              <li>Communicate about your project</li>
              <li>Send follow-up communications and service reminders</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations (e.g., scheduling software)</li>
              <li>Professional advisors (accountants, attorneys) as needed</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information. However, no method of transmission over the Internet is
              100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your
              experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices of these external sites and encourage you to review
              their privacy policies.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will
              be indicated by the &quot;Last updated&quot; date at the top of this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@dallaswindowbutler.com">info@dallaswindowbutler.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+14696408551">(469) 640-8551</a>
              </li>
              <li>
                <strong>Address:</strong> 112 Nathan Dr., Princeton, TX 75407
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t">
              <Link
                href="/"
                className="text-[#049bf2] hover:underline font-medium"
              >
                &larr; Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
