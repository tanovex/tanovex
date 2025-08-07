import { useAdsStore } from '../stores/adsStore'
import { usePropertiesStore } from '../stores/propertiesStore'
import { useDigitalProductsStore } from '../stores/digitalProductsStore'
import { useMediaStore } from '../stores/mediaStore'

// Composable for ads functionality
export function useAds() {
  const store = useAdsStore()
  
  return {
    currentAd: store.currentAd,
    isLoading: store.isLoading,
    error: store.error,
    loadRandomAd: store.loadRandomAd,
    refreshAd: store.refreshAd,
    loadAllAds: store.loadAllAds,
    allAds: store.allAds
  }
}

// Composable for properties functionality
export function useProperties() {
  const store = usePropertiesStore()
  
  return {
    currentProperty: store.currentProperty,
    isLoading: store.isLoading,
    error: store.error,
    loadRandomProperty: store.loadRandomProperty,
    loadAllProperties: store.loadAllProperties,
    allProperties: store.allProperties
  }
}

// Composable for digital products functionality
export function useDigitalProducts() {
  const store = useDigitalProductsStore()
  
  return {
    currentProduct: store.currentProduct,
    isLoading: store.isLoading,
    error: store.error,
    loadRandomProduct: store.loadRandomProduct,
    loadAllProducts: store.loadAllProducts,
    allProducts: store.allProducts
  }
}

// Composable for media functionality
export function useMedia() {
  const store = useMediaStore()
  
  return {
    currentItem: store.currentItem,
    isLoading: store.isLoading,
    error: store.error,
    loadRandomItem: store.loadRandomItem,
    loadAllItems: store.loadAllItems,
    allItems: store.allItems
  }
}
