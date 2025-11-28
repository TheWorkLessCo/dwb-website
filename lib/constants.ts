// Dallas Window Butler - Company Information & Constants

export const COMPANY_INFO = {
  name: "Dallas Window Butler",
  tagline: "The Best Replacement Windows in Rockwall, TX",
  phone: "469-640-8551",
  email: "info@dallaswindowbutler.com",
  address: {
    rockwall: "Rockwall, TX",
    princeton: "Princeton, TX",
  },
  hours: {
    weekdays: "9am - 5pm Mon-Fri",
    saturday: "9am - 1pm Sat",
    sunday: "Closed Sunday",
  },
  purpose:
    "To let our light shine before others, so that they may see our good works and give glory to our Father who is in heaven.",
  purposeSource: "Adapted from Matthew 5:16",
} as const

export const CONTACT_NUMBERS = {
  main: "469-640-8551",
  princeton: "469-640-8551",
} as const

export const CONTACT_INFO = {
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: COMPANY_INFO.address,
  hours: COMPANY_INFO.hours,
} as const

export const SPECIAL_OFFERS = {
  buyMore: {
    title: "BUY MORE GET MORE SALE!",
    offer5: "Buy 5 WINDOWS, Get $500 OFF!",
    offer10: "Buy 10 WINDOWS, Get $1,000 OFF!",
    discounts: "Ask about Our Senior & Military Discounts",
  },
  financing: {
    title: "0% INTEREST FOR 18 MONTHS",
    description:
      "Unlock great financing for your window and door project! Choose 0% interest for 18 months* or a low-interest 180 month* option with easy monthly payments. Act now for hassle-free pre-approval!",
  },
} as const

export const BRAND_PARTNERS = ["Provia", "Pella", "Cardinal", "Vistamark", "Sunpro"] as const

export const REVIEW_PLATFORMS = {
  google: { rating: 4.9, reviews: 153 },
  yelp: { rating: 4.9, reviews: 42 },
  angi: { rating: 4.8, reviews: 43 },
} as const
