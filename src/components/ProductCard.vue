<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePropertiesStore } from '../stores/propertiesStore'

const propertiesStore = usePropertiesStore()
const isLoading = ref(true)
const imageError = ref(false)

// Load random property when component mounts
onMounted(async () => {
  try {
    await propertiesStore.loadRandomProperty()
  } catch (error) {
    console.error('Failed to load property:', error)
  } finally {
    // Add a minimum loading time for better UX
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  }
})

// Function to load a new random property
const loadNewProperty = async () => {
  isLoading.value = true
  imageError.value = false // Reset image error state
  try {
    await propertiesStore.loadRandomProperty()
  } catch (error) {
    console.error('Failed to load property:', error)
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }
}

// Handle image loading errors
const handleImageError = () => {
  imageError.value = true
}
</script>

<template>
    <div class="container">
        <Transition name="card-transition" mode="out-in">
            <!-- Skeleton loading card -->
            <div v-if="isLoading" key="skeleton" class="product-card">
                <div class="product-image skeleton">
                    <!-- Loading image placeholder -->
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <div class="product-type skeleton"></div>
                        <div class="product-price skeleton"></div>
                        <div class="product-address skeleton"></div>
                    </div>
                    <div class="product-features">
                        <div class="feature skeleton"></div>
                        <div class="feature skeleton"></div>
                    </div>
                    <div class="product-realtor">
                        <div class="realtor-avatar skeleton"></div>
                        <div class="realtor-info">
                            <div class="realtor-name skeleton"></div>
                            <div class="realtor-phone skeleton"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Loaded content card -->
            <div v-else-if="propertiesStore.currentProperty" key="loaded" class="product-card">
                <div class="product-image">
                    <img 
                        v-if="!imageError"
                        :src="propertiesStore.currentProperty.image" 
                        :alt="propertiesStore.currentProperty.title"
                        @error="handleImageError"
                    />
                    <div v-else class="image-fallback">
                        <div class="fallback-icon">🏠</div>
                        <div class="fallback-text">{{ propertiesStore.currentProperty.title }}</div>
                        <div class="fallback-subtitle">Image unavailable</div>
                    </div>
                    <div class="favorite-icon">
                        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                        </svg>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <p class="product-type">{{ propertiesStore.currentProperty.propertyType }} • {{ new Date().getFullYear() - propertiesStore.currentProperty.yearBuilt }}y old</p>
                        <p class="product-price">{{ propertiesStore.currentProperty.price }}</p>
                        <p class="product-address">{{ propertiesStore.currentProperty.location }}</p>
                    </div>
                    <div class="product-features">
                        <div class="feature">
                            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                            </svg>
                            <span><strong>{{ propertiesStore.currentProperty.bedrooms }}</strong> Bedroom{{ propertiesStore.currentProperty.bedrooms !== 1 ? 's' : '' }}</span>
                        </div>
                        <div class="feature">
                            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                            </svg>
                            <span><strong>{{ propertiesStore.currentProperty.bathrooms }}</strong> Bathroom{{ propertiesStore.currentProperty.bathrooms !== 1 ? 's' : '' }}</span>
                        </div>
                    </div>
                    <div class="product-realtor">
                        <div class="realtor-avatar">
                            <img :src="propertiesStore.currentProperty.realtor.avatar" :alt="propertiesStore.currentProperty.realtor.name" />
                        </div>
                        <div class="realtor-info">
                            <p class="realtor-name">{{ propertiesStore.currentProperty.realtor.name }}</p>
                            <p class="realtor-phone">{{ propertiesStore.currentProperty.realtor.phone }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Error state -->
            <div v-else-if="propertiesStore.error" key="error" class="product-card error-card">
                <div class="product-content">
                    <div class="error-content">
                        <h2 class="error-title">⚠️ Error Loading Property</h2>
                        <p class="error-message">{{ propertiesStore.error }}</p>
                        <button class="refresh-btn" @click="loadNewProperty">
                            🔄 Try Again
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
*, *:after, *:before {
    box-sizing: border-box;
}

// THE CARD 
.product-card {
    display: flex;
    flex-direction: column;
    flex-basis: 350px;
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 100%;
    min-width: 400px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    overflow: hidden;
    margin: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    text-align: left;
    min-height: 500px;
    font-family: 'Lato', Inter, Avenir, Helvetica, Arial, sans-serif;
}

.product-card:hover {
    transform: translateY(-5px);
    border-color: #00aaff;
    box-shadow: 0 12px 35px rgba(0, 170, 255, 0.2);
}

.product-image {
    position: relative;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.05);
    overflow: hidden;
    
    &.skeleton {
        background-color: rgba(255, 255, 255, 0.1);
        background-image:            
            linear-gradient(
                90deg, 
                rgba(255, 255, 255, 0), 
                rgba(0, 170, 255, 0.3),
                rgba(255, 255, 255, 0)
            );
        background-size: 80px 100%;
        background-repeat: no-repeat;
        background-position: left -80px top 0;
        animation: shine 2s ease-in-out infinite;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    &:hover img {
        transform: scale(1.05);
    }
}

.favorite-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
}

.heart-icon {
    width: 1.25rem;
    height: 1.25rem;
    fill: rgba(255, 255, 255, 0.9);
    transition: fill 0.3s ease;
    
    .favorite-icon:hover & {
        fill: #ff4757;
    }
}

.product-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.product-header {
    .product-type {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        margin: 0 0 0.5rem 0;
        
        &.skeleton {
            height: 16px;
            border-radius: 4px;
        }
    }
    
    .product-price {
        font-size: 1.875rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.95);
        margin: 0 0 0.5rem 0;
        background: linear-gradient(135deg, #00aaff, #0088cc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        
        &.skeleton {
            height: 32px;
            border-radius: 4px;
        }
    }
    
    .product-address {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
        
        &.skeleton {
            height: 20px;
            border-radius: 4px;
        }
    }
}

.product-features {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    .feature {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.875rem;
        
        &.skeleton {
            height: 24px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        strong {
            color: rgba(255, 255, 255, 0.95);
            font-weight: 700;
        }
    }
}

.feature-icon {
    width: 1.25rem;
    height: 1.25rem;
    fill: rgba(0, 170, 255, 0.8);
    flex-shrink: 0;
}

.product-realtor {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 0.5rem;
    
    .realtor-avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        border: 2px solid rgba(0, 170, 255, 0.3);
        
        &.skeleton {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    .realtor-info {
        flex: 1;
        
        .realtor-name {
            font-weight: 600;
            color: rgba(255, 255, 255, 0.95);
            margin: 0 0 0.25rem 0;
            font-size: 0.875rem;
            
            &.skeleton {
                height: 16px;
                border-radius: 4px;
                margin-bottom: 0.5rem;
            }
        }
        
        .realtor-phone {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.7);
            margin: 0;
            
            &.skeleton {
                height: 14px;
                border-radius: 4px;
            }
        }
    }
}

// THE LOADING EFFECT
.skeleton {
    background-color: rgba(255, 255, 255, 0.1);
    background-image:            
        linear-gradient(
            90deg, 
            rgba(255, 255, 255, 0), 
            rgba(0, 170, 255, 0.3),
            rgba(255, 255, 255, 0)
        );
    background-size: 80px 100%;
    background-repeat: no-repeat;
    background-position: left -80px top 0;
    animation: shine 2s ease-in-out infinite;
    
    &:not(.product-image):not(.realtor-avatar) {
        width: 100%;
        border-radius: 4px;
    }
}

@keyframes shine {
    to {
        background-position: right -80px top 0;
    }
}

// Smooth transition between skeleton and loaded states
.card-transition-enter-active,
.card-transition-leave-active {
    transition: all 0.4s ease;
}

.card-transition-enter-from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
}

.card-transition-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
}

.card-transition-enter-to,
.card-transition-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

// Image fallback styles
.image-fallback {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(10, 10, 10, 0.9));
    border: 2px dashed rgba(0, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 1rem;
    
    .fallback-icon {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        opacity: 0.6;
    }
    
    .fallback-text {
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: #00ffff;
        line-height: 1.3;
    }
    
    .fallback-subtitle {
        font-size: 0.75rem;
        opacity: 0.6;
        font-style: italic;
    }
}

// Product actions
.product-actions {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    .refresh-btn {
        width: 100%;
        padding: 0.75rem 1rem;
        background: linear-gradient(45deg, #ff00ff, #00ffff);
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.85rem;
        
        &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 0, 255, 0.3);
        }
        
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
}

// Error state
.error-card {
    .error-content {
        text-align: center;
        padding: 2rem;
        
        .error-title {
            color: #ff6b6b;
            margin-bottom: 1rem;
        }
        
        .error-message {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1.5rem;
        }
    }
}

// Responsive design
@media (max-width: 768px) {
    .product-card {
        min-width: 300px;
        margin: 0.5rem;
    }
    
    .product-features {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
