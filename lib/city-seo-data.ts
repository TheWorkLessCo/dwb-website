export interface CityData {
  name: string
  slug: string
  state: string
  neighborhoods: string[]
  landmarks: string[]
  localIssues: string[]
  testimonials: Array<{
    name: string
    text: string
    rating: number
  }>
  images: {
    hero: string
    alt: string
  }
  uniqueContent?: {
    localizedText: string
    geoTaggedImage?: {
      src: string
      alt?: string
    }
  }
}

export const cityData: Record<string, CityData> = {
  rockwall: {
    name: "Rockwall",
    slug: "rockwall",
    state: "TX",
    neighborhoods: ["The Shores", "Chandlers Landing", "Heath Golf & Yacht Club", "Rockwall Commons", "Buffalo Creek"],
    landmarks: ["Lake Ray Hubbard", "The Harbor District", "Rockwall Square"],
    localIssues: ["Intense summer heat", "UV damage", "Lake humidity causing fogged glass"],
    testimonials: [
      {
        name: "Sarah M.",
        text: "The team replaced all 12 windows in our Shores home. Professional, clean, and the energy savings are incredible!",
        rating: 5,
      },
      {
        name: "Mike R.",
        text: "Our lake house windows were constantly fogging. Dallas Window Butler fixed everything in one day with zero mess.",
        rating: 5,
      },
      {
        name: "Jennifer L.",
        text: "From quote to completion, the process was seamless. Our Chandlers Landing home looks amazing with the new windows.",
        rating: 5,
      },
    ],
    images: {
      hero: "/modern-home-windows-rockwall-texas-lakefront.jpg",
      alt: "Energy-efficient window replacement in Rockwall, TX near Lake Ray Hubbard",
    },
  },
  mckinney: {
    name: "McKinney",
    slug: "mckinney",
    state: "TX",
    neighborhoods: [
      "Historic Downtown McKinney",
      "Stonebridge Ranch",
      "Adriatica Village",
      "Craig Ranch",
      "US-75 corridor",
      "Highway 380 corridor",
    ],
    landmarks: [
      "Historic Downtown McKinney Square",
      "Stonebridge Ranch",
      "Adriatica Village",
      "Craig Ranch",
      "US-75 & Highway 380 growth corridors",
    ],
    localIssues: [
      "Historic window preservation vs modern efficiency needs",
      "HOA compliance requirements in master-planned communities",
      "Balancing period-appropriate aesthetics with energy performance",
      "Rapid growth area window upgrade standards",
    ],
    testimonials: [
      {
        name: "Margaret W.",
        text: "Our historic home near McKinney Square needed windows that preserved the character while improving efficiency. Dallas Window Butler found the perfect balance!",
        rating: 5,
      },
      {
        name: "Thomas R.",
        text: "Living in Stonebridge Ranch, our HOA has strict guidelines. The team ensured our new windows met all requirements while delivering superior performance.",
        rating: 5,
      },
      {
        name: "Jennifer M.",
        text: "Our Craig Ranch home needed modern efficiency without losing curb appeal. Professional installation and the windows look absolutely perfect!",
        rating: 5,
      },
    ],
    images: {
      hero: "/historic-home-windows-mckinney-texas-downtown-squa.jpg",
      alt: "Window replacement in McKinney, TX Historic Downtown and Stonebridge Ranch",
    },
  },
  allen: {
    name: "Allen",
    slug: "allen",
    state: "TX",
    neighborhoods: [
      "Watters Creek",
      "Twin Creeks",
      "Bethany Lakes",
      "Raintree Village",
      "Fairview Creek",
      "Allen Station",
    ],
    landmarks: [
      "Watters Creek at Montgomery Farm",
      "Allen Event Center",
      "Allen Station Park",
      "Twin Creeks Golf Club",
      "Celebration Park",
    ],
    localIssues: [
      "Master-planned community HOA requirements",
      "Energy efficiency needs in newer developments",
      "Heat gain from large windows in modern homes",
      "Maintaining curb appeal in upscale neighborhoods",
    ],
    testimonials: [
      {
        name: "Jessica T.",
        text: "Our Watters Creek home needed windows that matched the community standards. Dallas Window Butler delivered exactly what we needed with perfect installation!",
        rating: 5,
      },
      {
        name: "Michael D.",
        text: "Living in Twin Creeks, we wanted energy-efficient windows that looked great. The team was professional and the results exceeded our expectations.",
        rating: 5,
      },
      {
        name: "Lisa K.",
        text: "The large windows in our Allen home were letting in too much heat. The new Low-E windows made a huge difference in comfort and energy bills.",
        rating: 5,
      },
    ],
    images: {
      hero: "/modern-home-windows-allen-texas-watters-creek.jpg",
      alt: "Professional window replacement in Allen, TX Watters Creek and Twin Creeks areas",
    },
  },
  plano: {
    name: "Plano",
    slug: "plano",
    state: "TX",
    neighborhoods: ["West Plano", "East Plano", "Legacy West", "Willow Bend", "Preston Ridge", "Plano ISD area"],
    landmarks: [
      "Legacy West",
      "The Shops at Willow Bend",
      "Arbor Hills Nature Preserve",
      "Historic Downtown Plano",
      "Collin Creek Mall area",
    ],
    localIssues: [
      "Aging windows in established neighborhoods",
      "Energy efficiency upgrades for older homes",
      "HOA compliance in master-planned communities",
      "Heat management in large suburban homes",
    ],
    testimonials: [
      {
        name: "Robert S.",
        text: "Our West Plano home had original windows from the 90s. Dallas Window Butler's replacement transformed our home's efficiency and appearance!",
        rating: 5,
      },
      {
        name: "Amanda P.",
        text: "Living near Legacy West, we needed windows that matched our neighborhood's upscale look. The installation was flawless and the quality is outstanding.",
        rating: 5,
      },
      {
        name: "David M.",
        text: "The team handled our Willow Bend home perfectly. Professional service, clean installation, and our energy bills dropped significantly.",
        rating: 5,
      },
    ],
    images: {
      hero: "/suburban-home-windows-plano-texas-legacy-west.jpg",
      alt: "Energy-efficient window installation in Plano, TX Legacy West and Willow Bend",
    },
  },
  "north-richardson": {
    name: "North Richardson",
    slug: "north-richardson",
    state: "TX",
    neighborhoods: [
      "Canyon Creek",
      "Northrich",
      "Richardson Heights",
      "Cottonwood Creek",
      "Spring Valley",
      "Arapaho Station",
    ],
    landmarks: [
      "CityLine development",
      "Richardson Civic Center",
      "Cottonwood Park",
      "Spring Valley Road corridor",
      "Arapaho Road business district",
    ],
    localIssues: [
      "Urban density requiring noise reduction windows",
      "Mixed housing ages needing different solutions",
      "Energy efficiency in high-rise and townhome developments",
      "Balancing modern efficiency with established neighborhood character",
    ],
    testimonials: [
      {
        name: "Karen L.",
        text: "Our North Richardson townhome faced a busy street. The new windows cut noise dramatically while improving our home's energy efficiency!",
        rating: 5,
      },
      {
        name: "James W.",
        text: "Living near CityLine, we needed windows that worked with our modern home's design. Dallas Window Butler delivered exactly what we envisioned.",
        rating: 5,
      },
      {
        name: "Maria C.",
        text: "The team understood our Canyon Creek neighborhood's character. Professional installation and the windows look perfect with our home's style.",
        rating: 5,
      },
    ],
    images: {
      hero: "/urban-home-windows-north-richardson-texas-cityline.jpg",
      alt: "Modern window replacement in North Richardson, TX CityLine and Canyon Creek areas",
    },
  },
}
