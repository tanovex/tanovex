<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Define the ad type
interface AffiliateAd {
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

const isLoading = ref(true)
const currentAd = ref<AffiliateAd | null>(null)

// Sample affiliate ads data
const affiliateAds: AffiliateAd[] = [
  {
    id: 1,
    title: "NordVPN - Ultimate Security",
    description: "Get 70% off NordVPN's 2-year plan + 3 months free. Military-grade encryption for ultimate online privacy.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
    price: "$3.99/month",
    originalPrice: "$11.95/month",
    discount: "70% OFF",
    cta: "Get Deal",
    badge: "Sponsored",
    category: "VPN",
    rating: 4.9,
    features: ["256-bit encryption", "60+ countries", "No-logs policy"]
  },
  {
    id: 2,
    title: "Hostinger - Web Hosting",
    description: "Start your website today with Hostinger's premium hosting. Free domain, SSL, and 24/7 support included.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    price: "$2.99/month",
    originalPrice: "$9.99/month",
    discount: "Save 70%",
    cta: "Start Now",
    badge: "Ad",
    category: "Hosting",
    rating: 4.7,
    features: ["Free domain", "99.9% uptime", "24/7 support"]
  },
  {
    id: 3,
    title: "Skillshare - Learn Design",
    description: "Join millions learning creative skills on Skillshare. Get 30% off annual premium membership.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    price: "$168/year",
    originalPrice: "$240/year",
    discount: "30% OFF",
    cta: "Join Now",
    badge: "Partner",
    category: "Education",
    rating: 4.6,
    features: ["15,000+ classes", "Offline viewing", "No ads"]
  },
  {
    id: 4,
    title: "Canva Pro - Design Tools",
    description: "Create stunning designs with Canva Pro. Access premium templates, fonts, and collaboration tools.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    price: "$14.99/month",
    originalPrice: "$19.99/month",
    discount: "25% OFF",
    cta: "Try Free",
    badge: "Sponsored",
    category: "Design",
    rating: 4.8,
    features: ["Premium templates", "Brand kit", "Team collaboration"]
  },
  {
    id: 5,
    title: "ExpressVPN - Fast & Secure",
    description: "Experience lightning-fast VPN with ExpressVPN. 30-day money-back guarantee included.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=250&fit=crop",
    price: "$8.32/month",
    originalPrice: "$12.95/month",
    discount: "35% OFF",
    cta: "Get Started",
    badge: "Ad",
    category: "VPN",
    rating: 4.9,
    features: ["30-day guarantee", "94+ countries", "24/7 support"]
  }
]

// Load a random ad
const loadRandomAd = () => {
  const randomIndex = Math.floor(Math.random() * affiliateAds.length)
  currentAd.value = affiliateAds[randomIndex]
}

// Simulate loading and load random ad
onMounted(() => {
  setTimeout(() => {
    loadRandomAd()
    isLoading.value = false
  }, 1500) // Show skeleton for 1.5 seconds
})

// Function to refresh ad
const refreshAd = () => {
  isLoading.value = true
  setTimeout(() => {
    loadRandomAd()
    isLoading.value = false
  }, 800)
}
</script>

<template>
    <div class="container">
        <Transition name="ad-transition" mode="out-in">
            <!-- Skeleton loading ad -->
            <div v-if="isLoading" key="skeleton" class="ads-card">
                <div class="ad-header">
                    <div class="ad-badge skeleton"></div>
                    <div class="refresh-btn skeleton"></div>
                </div>
                <div class="ad-image skeleton"></div>
                <div class="ad-content">
                    <div class="ad-category skeleton"></div>
                    <div class="ad-title skeleton"></div>
                    <div class="ad-description skeleton"></div>
                    <div class="ad-features">
                        <div class="feature skeleton"></div>
                        <div class="feature skeleton"></div>
                        <div class="feature skeleton"></div>
                    </div>
                    <div class="ad-pricing">
                        <div class="price-section skeleton"></div>
                        <div class="cta-button skeleton"></div>
                    </div>
                </div>
            </div>
            
            <!-- Loaded ad content -->
            <div v-else-if="currentAd" key="loaded" class="ads-card">
                <div class="ad-header">
                    <div class="ad-badge">{{ currentAd.badge }}</div>
                    <button class="refresh-btn" @click="refreshAd" title="Load new ad">
                        <img src="../assets/refresh-icon.svg" alt="Refresh" class="refresh-icon" />
                    </button>
                </div>
                <div class="ad-image">
                    <img :src="currentAd.image" :alt="currentAd.title" />
                    <div class="image-overlay">
                        <div class="category-tag">{{ currentAd.category }}</div>
                    </div>
                </div>
                <div class="ad-content">
                    <div class="ad-title">{{ currentAd.title }}</div>
                    <div class="ad-rating">
                        <div class="stars">
                            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= Math.floor(currentAd.rating) }">★</span>
                        </div>
                        <span class="rating-value">{{ currentAd.rating }}</span>
                    </div>
                    <p class="ad-description">{{ currentAd.description }}</p>
                    <div class="ad-features">
                        <div v-for="feature in currentAd.features" :key="feature" class="feature">
                            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 6L9 17l-5-5"/>
                            </svg>
                            <span>{{ feature }}</span>
                        </div>
                    </div>
                    <div class="ad-pricing">
                        <div class="price-section">
                            <span class="current-price">{{ currentAd.price }}</span>
                            <span class="original-price">{{ currentAd.originalPrice }}</span>
                            <span class="discount">{{ currentAd.discount }}</span>
                        </div>
                        <button class="cta-button">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 17L17 7"/>
                                <path d="M7 7h10v10"/>
                            </svg>
                            {{ currentAd.cta }}
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

// THE ADS CARD 
.ads-card {
    display: flex;
    flex-direction: column;
    flex-basis: 350px;
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 100%;
    min-width: 320px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    overflow: hidden;
    margin: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    text-align: left;
    min-height: 480px;
    font-family: 'Lato', Inter, Avenir, Helvetica, Arial, sans-serif;
    position: relative;
}

.ads-card:hover {
    transform: translateY(-5px);
    border-color: #00aaff;
    box-shadow: 0 12px 35px rgba(0, 170, 255, 0.2);
}

.ads-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
    background-size: 300% 100%;
    animation: rainbow-flow 4s ease-in-out infinite;
}

@keyframes rainbow-flow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.ad-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem 0.5rem;
    
    .ad-badge {
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 159, 243, 0.2));
        color: #ff6b6b;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border: 1px solid rgba(255, 107, 107, 0.3);
        
        &.skeleton {
            width: 80px;
            height: 24px;
        }
    }
    
    .refresh-btn {
        width: 2rem;
        height: 2rem;
        min-width: 2rem;
        min-height: 2rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
        flex-shrink: 0;
        
        &:hover {
            background: rgba(0, 170, 255, 0.1);
            border-color: #00aaff;
            transform: rotate(180deg);
            
            .refresh-icon {
                filter: brightness(0) invert(1);
            }
        }
        
        &.skeleton {
            width: 32px;
            height: 32px;
        }
        
        .refresh-icon {
            width: 1rem;
            height: 1rem;
            transition: all 0.3s ease;
        }
    }
}

.ad-image {
    position: relative;
    height: 160px;
    margin: 0 1.5rem;
    border-radius: 8px;
    overflow: hidden;
    
    &.skeleton {
        background-color: rgba(255, 255, 255, 0.1);
        background-image: linear-gradient(
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
    
    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, transparent 60%, rgba(0, 0, 0, 0.4));
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 1rem;
    }
    
    .category-tag {
        background: rgba(0, 0, 0, 0.7);
        color: #00aaff;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 600;
        backdrop-filter: blur(10px);
    }
}

.ad-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.ad-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    
    &.skeleton {
        height: 28px;
        border-radius: 4px;
    }
}

.ad-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .stars {
        display: flex;
        gap: 0.1rem;
    }
    
    .star {
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.9rem;
        
        &.filled {
            color: #ffd700;
        }
    }
    
    .rating-value {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 600;
    }
}

.ad-description {
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    
    &.skeleton {
        height: 40px;
        border-radius: 4px;
    }
}

.ad-features {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .feature {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.75rem;
        
        &.skeleton {
            height: 18px;
            border-radius: 4px;
        }
    }
}

.feature-icon {
    width: 0.875rem;
    height: 0.875rem;
    color: #00aaff;
    flex-shrink: 0;
}

.ad-pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    gap: 1rem;
    
    .price-section {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        
        &.skeleton {
            width: 100px;
            height: 40px;
            border-radius: 4px;
        }
        
        .current-price {
            font-size: 1.25rem;
            font-weight: 700;
            color: #00aaff;
        }
        
        .original-price {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
            text-decoration: line-through;
        }
        
        .discount {
            font-size: 0.7rem;
            color: #ff6b6b;
            font-weight: 600;
        }
    }
    
    .cta-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        background: linear-gradient(135deg, #00aaff, #0088cc);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 170, 255, 0.4);
        }
        
        &.skeleton {
            width: 80px;
            height: 36px;
        }
        
        .btn-icon {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
}

// THE LOADING EFFECT
.skeleton {
    background-color: rgba(255, 255, 255, 0.1);
    background-image: linear-gradient(
        90deg, 
        rgba(255, 255, 255, 0), 
        rgba(0, 170, 255, 0.3),
        rgba(255, 255, 255, 0)
    );
    background-size: 80px 100%;
    background-repeat: no-repeat;
    background-position: left -80px top 0;
    animation: shine 2s ease-in-out infinite;
    border-radius: 4px;
}

@keyframes shine {
    to {
        background-position: right -80px top 0;
    }
}

// Smooth transition between skeleton and loaded states
.ad-transition-enter-active,
.ad-transition-leave-active {
    transition: all 0.4s ease;
}

.ad-transition-enter-from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
}

.ad-transition-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
}

.ad-transition-enter-to,
.ad-transition-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

// Responsive design
@media (max-width: 768px) {
    .ads-card {
        min-width: 300px;
        margin: 0.5rem;
    }
    
    .ad-pricing {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
    }
    
    .cta-button {
        width: 100%;
        justify-content: center;
    }
}
</style>
