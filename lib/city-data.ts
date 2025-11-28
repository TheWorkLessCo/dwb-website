export interface CityData {
  name: string
  state: string
  slug: string
  description: string
  commonIssues: string[]
  testimonials: Array<{
    name: string
    location: string
    text: string
    rating: number
    image?: string
  }>
}

export const cityData: Record<string, CityData> = {
  rockwall: {
    name: "Rockwall",
    state: "TX",
    slug: "rockwall",
    description:
      "Rockwall is known for its beautiful lakefront properties and growing neighborhoods. Many homes here face unique challenges with lake humidity affecting window seals and older construction needing energy efficiency upgrades.",
    commonIssues: [
      "drafty homes near the lake",
      "fogged IG units from humidity",
      "older neighborhood windows",
      "new build warranty issues",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        location: "Rockwall, TX",
        text: "Dallas Window Butler replaced 12 windows in our lakefront home. The difference in energy efficiency is amazing, and no more condensation issues!",
        rating: 5,
        image: "/woman-homeowner.jpg",
      },
      {
        name: "Mike Chen",
        location: "Rockwall, TX",
        text: "Professional installation, fair pricing, and they cleaned up perfectly. Our home looks and feels so much better.",
        rating: 5,
        image: "/man-homeowner.jpg",
      },
      {
        name: "Lisa Martinez",
        location: "Rockwall, TX",
        text: "They replaced just the glass units in our bay windows - saved us thousands compared to full replacement. Highly recommend!",
        rating: 5,
        image: "/woman-homeowner-2.jpg",
      },
    ],
  },
  forney: {
    name: "Forney",
    state: "TX",
    slug: "forney",
    description:
      "Forney is one of the fastest-growing cities in Texas, with many new construction homes and established neighborhoods. We help homeowners with both warranty issues on newer builds and upgrades for older properties.",
    commonIssues: [
      "new construction warranty claims",
      "builder-grade window upgrades",
      "older home energy efficiency",
      "storm damage repairs",
    ],
    testimonials: [
      {
        name: "David Wilson",
        location: "Forney, TX",
        text: "Our builder windows were failing after just 3 years. Dallas Window Butler handled everything with the warranty and upgraded us to better quality.",
        rating: 5,
        image: "/man-homeowner-3.jpg",
      },
      {
        name: "Jennifer Adams",
        location: "Forney, TX",
        text: "Fast, professional service. They replaced our front windows and the curb appeal improvement is incredible.",
        rating: 5,
        image: "/woman-homeowner-3.jpg",
      },
      {
        name: "Robert Taylor",
        location: "Forney, TX",
        text: "Great experience from quote to completion. Our energy bills have dropped significantly since the installation.",
        rating: 5,
        image: "/man-homeowner-4.jpg",
      },
    ],
  },
}
