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
  subheadline?: string
  uniqueContent?: {
    localizedText: string
    geoTaggedImage?: {
      src: string
      alt?: string
    }
  }
  // New fields for enhanced local SEO
  distanceFromHQ: {
    miles: number
    drivingMinutes: number
  }
  rightForYouTiles?: {
    tile1?: { title: string; description: string }
    tile2?: { title: string; description: string }
    tile3?: { title: string; description: string }
  }
  projectShowcases?: Array<{
    neighborhood: string
    projectType: "window-replacement" | "glass-repair" | "patio-door"
    beforeImage: string
    afterImage: string
    caption: string
    windowCount?: number
  }>
  assignedTech?: {
    name: string
    title: string
    yearsExperience: number
    livesIn?: string
  }
  cityFaqs?: Array<{
    question: string
    answer: string
  }>
}

export const cityData: Record<string, CityData> = {
  rockwall: {
    name: "Rockwall",
    slug: "rockwall",
    state: "TX",
    subheadline: "Energy-efficient window replacement and expert glass repair for lakeside homes. No pressure, just professional results.",
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
    distanceFromHQ: {
      miles: 30,
      drivingMinutes: 35,
    },
    rightForYouTiles: {
      tile1: {
        title: "Lakeside Homes Built 1990-2010",
        description: "Original builder windows letting lake humidity compromise your comfort? We specialize in The Shores and Chandlers Landing upgrades.",
      },
      tile2: {
        title: "Foggy Lake Views?",
        description: "Failed seals blocking your Lake Ray Hubbard views? We restore crystal-clear visibility—glass-only or full frame replacement.",
      },
      tile3: {
        title: "Storm Season Ready",
        description: "Texas storms test your windows every year. Modern impact-resistant glass protects your lakefront investment.",
      },
    },
    cityFaqs: [
      {
        question: "Do you work on lakefront properties in Rockwall?",
        answer: "Absolutely. We specialize in lakefront homes around Lake Ray Hubbard, including The Shores, Chandlers Landing, and Heath. We understand the unique challenges lake humidity presents—from accelerated seal failure to moisture intrusion—and we use materials specifically designed to withstand these conditions.",
      },
      {
        question: "How do you handle HOA requirements in Rockwall neighborhoods?",
        answer: "Many Rockwall communities like The Shores and Chandlers Landing have specific architectural guidelines. We work directly with your HOA requirements and can provide documentation showing our windows meet community standards before installation begins.",
      },
    ],
    // TODO: Add actual before/after photos from Rockwall jobs
    projectShowcases: [
      {
        neighborhood: "The Shores",
        projectType: "window-replacement",
        beforeImage: "/images/projects/rockwall-shores-before.jpg",
        afterImage: "/images/projects/rockwall-shores-after.jpg",
        caption: "Full home window replacement with Low-E glass for lake humidity protection",
        windowCount: 12,
      },
      {
        neighborhood: "Chandlers Landing",
        projectType: "glass-repair",
        beforeImage: "/images/projects/rockwall-chandlers-before.jpg",
        afterImage: "/images/projects/rockwall-chandlers-after.jpg",
        caption: "IG unit replacement to restore crystal-clear lake views",
        windowCount: 4,
      },
    ],
    // TODO: Update with actual team member info
    assignedTech: {
      name: "Nate",
      title: "Owner & Lead Installer",
      yearsExperience: 10,
      livesIn: "Princeton",
    },
  },
  mckinney: {
    name: "McKinney",
    slug: "mckinney",
    state: "TX",
    subheadline: "Specializing in historic-appropriate upgrades and HOA-compliant window replacement for McKinney families.",
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
    distanceFromHQ: {
      miles: 12,
      drivingMinutes: 15,
    },
    rightForYouTiles: {
      tile1: {
        title: "Historic Downtown Character",
        description: "Need windows that honor your McKinney Square home's heritage while delivering modern efficiency? We match period-appropriate styles.",
      },
      tile2: {
        title: "Stonebridge & Craig Ranch HOAs",
        description: "Strict HOA guidelines? We handle the paperwork and ensure your new windows meet every community requirement.",
      },
      tile3: {
        title: "380 Corridor New Builds",
        description: "Builder-grade windows already failing? Upgrade to premium efficiency without voiding your home warranty.",
      },
    },
    cityFaqs: [
      {
        question: "Can you match historic window styles for older McKinney homes?",
        answer: "Yes. For homes near Historic Downtown McKinney Square, we offer windows that replicate traditional divided-light patterns and profiles while providing modern Low-E glass and weatherstripping. You get the historic look with contemporary energy performance.",
      },
      {
        question: "How do you handle Stonebridge Ranch HOA approvals?",
        answer: "We're familiar with Stonebridge Ranch's architectural review process. We can provide spec sheets, color samples, and any documentation your HOA requires before you submit for approval—saving you time and ensuring no surprises.",
      },
    ],
  },
  allen: {
    name: "Allen",
    slug: "allen",
    state: "TX",
    subheadline: "Premium energy-efficient windows tailored for Allen's modern master-planned communities and families.",
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
    distanceFromHQ: {
      miles: 18,
      drivingMinutes: 22,
    },
    rightForYouTiles: {
      tile1: {
        title: "Watters Creek & Twin Creeks",
        description: "Large picture windows making your AC work overtime? We install solar-control glass that keeps the view while cutting heat gain.",
      },
      tile2: {
        title: "10-15 Year Old Homes",
        description: "Builder-grade windows showing their age? Fogged glass and drafts are signs it's time to upgrade to premium efficiency.",
      },
      tile3: {
        title: "Allen ISD Family Homes",
        description: "Quieter, more comfortable rooms for homework and sleep. Our dual-pane windows reduce outside noise significantly.",
      },
    },
    cityFaqs: [
      {
        question: "Do you serve the Watters Creek and Twin Creeks areas?",
        answer: "Yes, we work extensively in Allen's master-planned communities including Watters Creek, Twin Creeks, Bethany Lakes, and surrounding neighborhoods. We're familiar with the architectural styles and HOA requirements common to these areas.",
      },
      {
        question: "My Allen home has very large windows—can you replace oversized units?",
        answer: "Absolutely. Large picture windows and floor-to-ceiling glass are common in Allen's newer homes. We custom-order units to exact specifications and have the equipment and expertise to handle oversized installations safely.",
      },
    ],
  },
  plano: {
    name: "Plano",
    slug: "plano",
    state: "TX",
    subheadline: "Luxury window solutions and efficient glass repair for Plano's upscale residences and established subdivisions.",
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
    distanceFromHQ: {
      miles: 25,
      drivingMinutes: 30,
    },
    rightForYouTiles: {
      tile1: {
        title: "80s & 90s Plano Homes",
        description: "Original aluminum or wood windows from when your home was built? It's time for modern vinyl that never needs painting.",
      },
      tile2: {
        title: "West Plano Luxury Upgrades",
        description: "Upgrading to match your neighborhood's standards? Premium finishes and custom colors to complement upscale homes.",
      },
      tile3: {
        title: "Legacy West Area",
        description: "New construction settling in? We fix builder-grade issues and upgrade to performance glass that lasts.",
      },
    },
    cityFaqs: [
      {
        question: "Do you work in West Plano and the Legacy West area?",
        answer: "Yes, we serve all of Plano including West Plano, Legacy West, Willow Bend, Preston Ridge, and East Plano. Our team is familiar with the mix of established homes and newer construction throughout the city.",
      },
      {
        question: "My Plano home has original 1990s windows—is replacement worth it?",
        answer: "Almost certainly yes. Windows from the 90s lack modern Low-E coatings and argon gas fills that dramatically improve energy efficiency. Most Plano homeowners see significant energy savings and improved comfort after replacement, plus you eliminate maintenance on aging wood or aluminum frames.",
      },
    ],
  },
  "north-richardson": {
    name: "North Richardson",
    slug: "north-richardson",
    state: "TX",
    subheadline: "High-performance window replacement featuring urban noise reduction and modern efficiency for Richardson homes.",
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
    distanceFromHQ: {
      miles: 32,
      drivingMinutes: 38,
    },
    rightForYouTiles: {
      tile1: {
        title: "Busy Street Noise",
        description: "Living near Spring Valley or Arapaho Road? Our laminated glass windows dramatically reduce traffic noise for peaceful interiors.",
      },
      tile2: {
        title: "CityLine Area Modern Homes",
        description: "Contemporary townhome or condo? We offer sleek profiles and custom finishes that complement modern architecture.",
      },
      tile3: {
        title: "Canyon Creek Classics",
        description: "Established 70s-80s homes with original windows? Upgrade to efficient vinyl while preserving your neighborhood's character.",
      },
    },
    cityFaqs: [
      {
        question: "Do you offer noise-reducing windows for busy Richardson streets?",
        answer: "Yes. For homes near Spring Valley Road, Arapaho, or the CityLine area, we recommend laminated glass options that significantly reduce outside noise. The STC (Sound Transmission Class) rating on these windows can cut perceived noise by 50% or more compared to standard dual-pane glass.",
      },
      {
        question: "Can you work on townhomes and condos in Richardson?",
        answer: "Absolutely. We work with many townhome and condo owners in the CityLine area and throughout North Richardson. We coordinate with HOAs and property managers as needed, and our installation methods are designed to minimize disruption to neighboring units.",
      },
    ],
  },
}
