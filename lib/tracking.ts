export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  page_path?: string
}

export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") return {}

  const urlParams = new URLSearchParams(window.location.search)
  const params: UTMParams = {
    page_path: window.location.pathname + window.location.search,
  }

  // Capture UTM parameters
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
  utmKeys.forEach((key) => {
    const value = urlParams.get(key)
    if (value) {
      params[key as keyof UTMParams] = value
    }
  })

  return params
}

export function appendUTMToFormData(formData: FormData): FormData {
  const utmParams = getUTMParams()

  Object.entries(utmParams).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value)
    }
  })

  return formData
}

export function getTrackingAttributes(source: string) {
  return {
    "data-source": source,
    "data-offer": "100off-per-window",
    "data-city": "rockwall",
  }
}
