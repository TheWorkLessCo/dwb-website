import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">Go Home</Link>
          </Button>

          <div className="text-sm text-gray-500">
            <p className="mb-2">Looking for our service areas?</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/rockwall-windows" scroll={true} className="text-blue-600 hover:underline">
                Rockwall
              </Link>
              <Link href="/mckinney-windows" scroll={true} className="text-blue-600 hover:underline">
                McKinney
              </Link>
              <Link href="/allen-windows" scroll={true} className="text-blue-600 hover:underline">
                Allen
              </Link>
              <Link href="/plano-windows" scroll={true} className="text-blue-600 hover:underline">
                Plano
              </Link>
              <Link href="/north-richardson-windows" scroll={true} className="text-blue-600 hover:underline">
                North Richardson
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
