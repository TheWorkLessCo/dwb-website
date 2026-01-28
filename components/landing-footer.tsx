import Link from "next/link"
import Image from "next/image"

export function LandingFooter() {
  const servicesItems = [
    { name: "Window Replacement", href: "/services/window-replacement" },
    { name: "Glass / IG Unit Repair", href: "/services/glass-repair" },
    { name: "Patio Doors", href: "/services/patio-doors" },
    { name: "Solar Screens", href: "/services/solar-screens" },
    { name: "Blinds & Shades", href: "/services/blinds-shades" },
    { name: "Motorized Patio Shades", href: "/services/motorized-patio-shades" },
    { name: "Motorized Awnings", href: "/services/motorized-awnings" },
    { name: "Waterproofing & Sealing", href: "/services/waterproofing-sealing" },
  ]

  const serviceAreas = [
    { name: "Rockwall", href: "/rockwall-windows" },
    { name: "McKinney", href: "/mckinney-windows" },
    { name: "Allen", href: "/allen-windows" },
    { name: "Plano", href: "/plano-windows" },
    { name: "North Richardson", href: "/north-richardson-windows" },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#00152e] text-white py-8">
      {/* Gradient background - matches About page hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152e] via-[#001a3a] to-[#00152e]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#049bf2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#049bf2]/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-x-12 mb-8">
          {/* Brand Block - Logo and Company Name */}
          <div className="flex flex-col items-start gap-2" aria-label="Dallas Window Butler brand">
            <Image
              src="/images/dwb-logo-footer-white.png"
              alt="Dallas Window Butler logo — window & door replacement in DFW"
              width={240}
              height={48}
              className="h-10 w-auto md:h-28"
            />
            <div className="leading-tight">
              <div className="uppercase tracking-wider text-white/90 text-xs md:text-sm font-thin">Dallas</div>
              <div className="uppercase text-white font-semibold text-base md:text-lg">Window Butler LLC.</div>
            </div>
          </div>

          {/* NAP (Name, Address, Phone) */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact</h3>
            <p className="text-gray-300 text-sm">
              112 Nathan Dr.
              <br />
              Princeton, TX 75407
            </p>
            <p className="text-gray-300 text-sm">
              <a href="tel:+14696408551" className="hover:text-[#049BF2] transition-colors">
                (469) 640-8551
              </a>
            </p>
            <div className="mt-3 text-sm text-gray-300 leading-relaxed">
              <p className="font-semibold text-white mb-1">Hours:</p>
              <p>Mon–Fri: 9am–5pm</p>
              <p>Sat: 9am–1pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="flex flex-col gap-2">
              {servicesItems.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-gray-300 hover:text-[#049BF2] transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Services Areas</h3>
            <div className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="text-gray-300 hover:text-[#049BF2] transition-colors text-sm"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/blog" className="text-gray-300 hover:text-[#049BF2] transition-colors">
                Blog
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-[#049BF2] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#049BF2] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 Dallas Window Butler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
