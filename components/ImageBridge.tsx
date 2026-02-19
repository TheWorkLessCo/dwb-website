import Image from "next/image"

interface ImageBridgeProps {
  citySlug?: string
}

// City-specific images mapping
const cityImages: Record<string, { src: string; alt: string }> = {
  rockwall: {
    src: "https://dallaswindowbutler.b-cdn.net/why-choose-vinyl-YZ9xjaKZN0F0KXed.avif",
    alt: "Window installation in Rockwall, TX — lakefront home project",
  },
  mckinney: {
    src: "https://dallaswindowbutler.b-cdn.net/why-choose-vinyl-YZ9xjaKZN0F0KXed.avif",
    alt: "Window replacement in McKinney, TX — historic area project",
  },
  allen: {
    src: "https://dallaswindowbutler.b-cdn.net/why-choose-vinyl-YZ9xjaKZN0F0KXed.avif",
    alt: "Window installation in Allen, TX — Watters Creek area project",
  },
  plano: {
    src: "https://dallaswindowbutler.b-cdn.net/why-choose-vinyl-YZ9xjaKZN0F0KXed.avif",
    alt: "Window replacement in Plano, TX — West Plano home project",
  },
  "north-richardson": {
    src: "https://dallaswindowbutler.b-cdn.net/why-choose-vinyl-YZ9xjaKZN0F0KXed.avif",
    alt: "Window installation in North Richardson, TX — CityLine area project",
  },
}

const defaultImage = {
  src: "https://dallaswindowbutler.b-cdn.net/why-choose-vinyl-YZ9xjaKZN0F0KXed.avif",
  alt: "Dallas Window Butler project gallery — real install example",
}

export default function ImageBridge({ citySlug }: ImageBridgeProps) {
  // Use city-specific image if available and the file exists, otherwise fall back to default
  const imageData = citySlug && cityImages[citySlug] ? cityImages[citySlug] : defaultImage

  return (
    <section
      data-inserted="image-bridge-v1"
      aria-labelledby="image-bridge-heading"
      className="w-full bg-transparent mt-12 sm:mt-16 lg:mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 h-72 md:h-80 lg:h-96">
          <Image
            src={imageData.src}
            alt={imageData.alt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            priority={false}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
