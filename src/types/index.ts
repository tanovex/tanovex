export interface AffiliateAd {
  id: number
  title: string
  description: string
  image: string
  price: string
  originalPrice: string
  discount: string
  cta: string
  badge: string
  category: string
  rating: number
  features: string[]
}

export interface Realtor {
  name: string
  phone: string
  email: string
  avatar: string
}

export interface Property {
  id: number
  title: string
  description: string
  image: string
  price: string
  originalPrice: string
  discount: string
  bedrooms: number
  bathrooms: number
  sqft: number
  location: string
  propertyType: string
  yearBuilt: number
  features: string[]
  realtor: Realtor
}

export interface DigitalProduct {
  id: number
  title: string
  description: string
  image: string
  price: string
  originalPrice: string
  discount: string
  category: string
  version: string
  downloads: number
  rating: number
  features: string[]
  requirements: string[]
  lastUpdated: string
}

export interface MediaItem {
  id: number
  title: string
  description: string
  image: string
  alt: string
  category: string
  tags: string[]
  photographer: string
  likes: number
  views: number
}
