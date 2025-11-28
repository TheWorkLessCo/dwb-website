import Image from "next/image"

export default function ImageBridge() {
  return (
    <section
      data-inserted="image-bridge-v1"
      aria-labelledby="image-bridge-heading"
      className="w-full bg-transparent mt-12 sm:mt-16 lg:mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 h-48 md:h-56 lg:h-64">
          <Image
            src="/img/reviews-bridge.jpg"
            alt="Dallas Window Butler project gallery — real install example"
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
