export interface CityLink {
  label: string
  href: string
}

// Source of truth for city/location links used across the site
export const cityLinks: CityLink[] = [
  { label: "Rockwall", href: "/rockwall-windows" },
  { label: "Plano", href: "/plano-windows" },
  { label: "McKinney", href: "/mckinney-windows" },
  { label: "Allen", href: "/allen-windows" },
  { label: "North Richardson", href: "/north-richardson-windows" },
]

