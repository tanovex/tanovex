import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AffiliateAd } from '../types'
import { dataService } from '../services/dataService'

export const useAdsStore = defineStore('ads', () => {
  const currentAd = ref<AffiliateAd | null>(null)
  const allAds = ref<AffiliateAd[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const loadRandomAd = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const ad = await dataService.getRandomAffiliateAd()
      currentAd.value = ad
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load ad'
      console.error('Failed to load random ad:', err)
    } finally {
      isLoading.value = false
    }
  }

  const loadAllAds = async () => {
    if (allAds.value.length > 0) return // Already loaded
    
    isLoading.value = true
    error.value = null
    
    try {
      const ads = await dataService.getAffiliateAds()
      allAds.value = ads
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load ads'
      console.error('Failed to load all ads:', err)
    } finally {
      isLoading.value = false
    }
  }

  const refreshAd = async () => {
    await loadRandomAd()
  }

  return {
    currentAd,
    allAds,
    isLoading,
    error,
    loadRandomAd,
    loadAllAds,
    refreshAd
  }
})
