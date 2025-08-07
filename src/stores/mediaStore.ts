import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MediaItem } from '../types'
import { dataService } from '../services/dataService'

export const useMediaStore = defineStore('media', () => {
  const currentItem = ref<MediaItem | null>(null)
  const allItems = ref<MediaItem[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const loadRandomItem = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const item = await dataService.getRandomMediaItem()
      currentItem.value = item
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load media item'
      console.error('Failed to load random media item:', err)
    } finally {
      isLoading.value = false
    }
  }

  const loadAllItems = async () => {
    if (allItems.value.length > 0) return // Already loaded
    
    isLoading.value = true
    error.value = null
    
    try {
      const items = await dataService.getMediaItems()
      allItems.value = items
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load media items'
      console.error('Failed to load all media items:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    currentItem,
    allItems,
    isLoading,
    error,
    loadRandomItem,
    loadAllItems
  }
})
