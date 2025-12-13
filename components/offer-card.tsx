"use client"

import { Card } from "@/components/ui/card"
import { getTrackingAttributes } from "@/lib/tracking"

interface OfferCardProps {
  imageSrc?: string
  tel?: string
  telDisplay?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  showPhoneCta?: boolean
  className?: string
}

export function OfferCard({
  imageSrc = "/images/design-mode/image.jpg.png",
  tel = "+14696408551",
  telDisplay = "(469) 640-8551",
  primaryCtaLabel = "CLAIM MY DISCOUNT",
  primaryCtaHref = "#quote",
  showPhoneCta = true,
  className = "",
}: OfferCardProps) {
  const trackingAttrs = getTrackingAttributes("offer-card")

  return (
    <Card
      className={`w-full max-w-md mx-auto rounded-xl shadow-2xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/80 border-0 overflow-hidden ${className}`}
    >
      <div className="p-0">
        <div
          className="offer-visual relative overflow-hidden"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            margin: "0",
            padding: "0",
            borderBottom: "0",
            minHeight: "unset",
            height: "clamp(260px, 45vw, 420px)",
            aspectRatio: "16/9",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          }}
          role="img"
          aria-label="Dallas Window Butler special offer"
        />

        <div
          className="offer-cta-group offer-card-body px-6 pb-6"
          style={{
            marginTop: "-12px",
            paddingTop: "0",
            gap: "8px",
            rowGap: "8px",
            display: "flex",
            flexDirection: "column",
            borderTop: "none",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href={primaryCtaHref}
              role="button"
              {...trackingAttrs}
              data-tier="5-10"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#049BF2] hover:bg-[#049BF2]/90 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {primaryCtaLabel}
            </a>
            {showPhoneCta && (
              <a
                href={`tel:${tel}`}
                role="button"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#049BF2] bg-transparent border-2 border-[#049BF2] hover:bg-[#049BF2] hover:text-white rounded-lg transition-colors duration-200"
              >
                Call {telDisplay}
              </a>
            )}

            {/* Fine Print */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
              Min. 5 windows. Not combinable. Limited time.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .offer-visual {
          margin: 0 !important;
          padding: 0 !important;
          border-bottom: 0 !important;
        }

        .offer-cta-group {
          margin-top: -12px !important;
          padding-top: 0 !important;
          row-gap: 8px !important;
          gap: 8px !important;
          border-top: none !important;
        }

        .offer-card-body,
        .offer-card-body > * {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        .offer-card-body,
        .offer-cta-group,
        .offer-card-body > .stack,
        .offer-card-body > .grid {
          row-gap: 0 !important;
          grid-row-gap: 0 !important;
        }

        @media (max-width: 640px) {
          .offer-visual {
            height: clamp(220px, 55vw, 360px) !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .offer-cta-group {
            margin-top: -12px !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </Card>
  )
}
