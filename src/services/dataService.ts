import type { AffiliateAd, Property, DigitalProduct, MediaItem } from '../types'

// Import JSON data directly
import affiliateAdsData from '../data/affiliateAds.json'
import propertiesData from '../data/properties.json'
import digitalProductsData from '../data/digitalProducts.json'
import mediaItemsData from '../data/mediaItems.json'

// Base service class with common functionality
class DataService {
  // Simulate network delay for better UX demo
  private async simulateDelay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async getAffiliateAds(): Promise<AffiliateAd[]> {
    await this.simulateDelay()
    return affiliateAdsData as AffiliateAd[]
  }

  async getRandomAffiliateAd(): Promise<AffiliateAd> {
    const ads = await this.getAffiliateAds()
    const randomIndex = Math.floor(Math.random() * ads.length)
    return ads[randomIndex]
  }

  async getProperties(): Promise<Property[]> {
    await this.simulateDelay()
    return propertiesData as Property[]
  }

  async getRandomProperty(): Promise<Property> {
    const properties = await this.getProperties()
    const randomIndex = Math.floor(Math.random() * properties.length)
    return properties[randomIndex]
  }

  async getDigitalProducts(): Promise<DigitalProduct[]> {
    await this.simulateDelay()
    return digitalProductsData as DigitalProduct[]
  }

  async getRandomDigitalProduct(): Promise<DigitalProduct> {
    const products = await this.getDigitalProducts()
    const randomIndex = Math.floor(Math.random() * products.length)
    return products[randomIndex]
  }

  async getMediaItems(): Promise<MediaItem[]> {
    await this.simulateDelay()
    return mediaItemsData as MediaItem[]
  }

  async getRandomMediaItem(): Promise<MediaItem> {
    const items = await this.getMediaItems()
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
  }
}

// Export singleton instance
export const dataService = new DataService()
