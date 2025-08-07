import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DigitalProduct } from '../types'
import { dataService } from '../services/dataService'

export const useDigitalProductsStore = defineStore('digitalProducts', () => {
  const currentProduct = ref<DigitalProduct | null>(null)
  const allProducts = ref<DigitalProduct[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const loadRandomProduct = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const product = await dataService.getRandomDigitalProduct()
      currentProduct.value = product
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load product'
      console.error('Failed to load random product:', err)
    } finally {
      isLoading.value = false
    }
  }

  const loadAllProducts = async () => {
    if (allProducts.value.length > 0) return // Already loaded
    
    isLoading.value = true
    error.value = null
    
    try {
      const products = await dataService.getDigitalProducts()
      allProducts.value = products
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load products'
      console.error('Failed to load all products:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    currentProduct,
    allProducts,
    isLoading,
    error,
    loadRandomProduct,
    loadAllProducts
  }
})
