import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Property } from '../types'
import { dataService } from '../services/dataService'

export const usePropertiesStore = defineStore('properties', () => {
  const currentProperty = ref<Property | null>(null)
  const allProperties = ref<Property[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const loadRandomProperty = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const property = await dataService.getRandomProperty()
      currentProperty.value = property
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load property'
      console.error('Failed to load random property:', err)
    } finally {
      isLoading.value = false
    }
  }

  const loadAllProperties = async () => {
    if (allProperties.value.length > 0) return // Already loaded
    
    isLoading.value = true
    error.value = null
    
    try {
      const properties = await dataService.getProperties()
      allProperties.value = properties
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load properties'
      console.error('Failed to load all properties:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    currentProperty,
    allProperties,
    isLoading,
    error,
    loadRandomProperty,
    loadAllProperties
  }
})
