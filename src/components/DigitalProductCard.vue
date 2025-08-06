<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

// Simulate loading delay
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000) // Show skeleton for 2 seconds, then show content
})
</script>

<template>
    <div class="container">
        <Transition name="card-transition" mode="out-in">
            <!-- Skeleton loading card -->
            <div v-if="isLoading" key="skeleton" class="digital-product-card">
                <div class="product-header skeleton">
                    <!-- Loading header placeholder -->
                </div>
                <div class="product-content">
                    <div class="product-icon skeleton"></div>
                    <div class="product-info">
                        <div class="product-title skeleton"></div>
                        <div class="product-description skeleton"></div>
                        <div class="product-price skeleton"></div>
                    </div>
                    <div class="product-features">
                        <div class="feature skeleton"></div>
                        <div class="feature skeleton"></div>
                        <div class="feature skeleton"></div>
                    </div>
                    <div class="product-actions">
                        <div class="action-button skeleton"></div>
                        <div class="action-button skeleton"></div>
                    </div>
                </div>
            </div>
            
            <!-- Loaded content card -->
            <div v-else key="loaded" class="digital-product-card">
                <div class="product-header">
                    <div class="category-tag">WordPress Plugin</div>
                    <div class="rating">
                        <div class="stars">
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star">★</span>
                        </div>
                        <span class="rating-text">4.8 (127 reviews)</span>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                            <path d="M9 12l2 2 4-4"/>
                        </svg>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">CRM Connect Pro</h3>
                        <p class="product-description">
                            Seamlessly integrate your WordPress site with popular CRM platforms including Salesforce, HubSpot, and Pipedrive. Automate lead capture and customer data synchronization.
                        </p>
                        <div class="product-price">
                            <span class="current-price">$99</span>
                            <span class="original-price">$149</span>
                            <span class="discount">33% OFF</span>
                        </div>
                    </div>
                    <div class="product-features">
                        <div class="feature">
                            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span>Multi-CRM Support</span>
                        </div>
                        <div class="feature">
                            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>Auto Lead Capture</span>
                        </div>
                        <div class="feature">
                            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                            </svg>
                            <span>Real-time Sync</span>
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="btn-primary">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0zM9 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"/>
                            </svg>
                            Buy Now
                        </button>
                        <button class="btn-secondary">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                            </svg>
                            Live Demo
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
.digital-product-card {
    display: flex;
    flex-direction: column;
    flex-basis: 400px;
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 100%;
    min-width: 380px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    overflow: hidden;
    margin: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    text-align: left;
    min-height: 550px;
    font-family: 'Lato', Inter, Avenir, Helvetica, Arial, sans-serif;
    position: relative;
}

.digital-product-card:hover {
    transform: translateY(-5px);
    border-color: #00aaff;
    box-shadow: 0 12px 35px rgba(0, 170, 255, 0.2);
}

.digital-product-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00aaff, #0088cc, #00aaff);
    background-size: 200% 100%;
    animation: gradient-flow 3s ease-in-out infinite;
}

@keyframes gradient-flow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.product-header {
    padding: 1.5rem 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    &.skeleton {
        height: 60px;
        margin: 1.5rem;
        border-radius: 8px;
    }
}

.category-tag {
    background: linear-gradient(135deg, rgba(0, 170, 255, 0.2), rgba(0, 136, 204, 0.2));
    color: #00aaff;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid rgba(0, 170, 255, 0.3);
}

.rating {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
}

.stars {
    display: flex;
    gap: 0.1rem;
}

.star {
    color: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    
    &.filled {
        color: #ffd700;
        text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
    }
}

.rating-text {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
}

.product-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.product-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, rgba(0, 170, 255, 0.1), rgba(0, 136, 204, 0.1));
    border: 1px solid rgba(0, 170, 255, 0.3);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
    &.skeleton {
        margin: 0 auto;
    }
    
    svg {
        width: 2rem;
        height: 2rem;
        color: #00aaff;
        stroke-width: 1.5;
    }
}

.product-info {
    text-align: center;
    
    .product-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.95);
        margin: 0 0 1rem 0;
        background: linear-gradient(135deg, #00aaff, #33bbff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        
        &.skeleton {
            height: 32px;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
    }
    
    .product-description {
        font-size: 0.9rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 1.5rem 0;
        
        &.skeleton {
            height: 60px;
            border-radius: 4px;
            margin-bottom: 1.5rem;
        }
    }
    
    .product-price {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        
        &.skeleton {
            height: 28px;
            border-radius: 4px;
        }
        
        .current-price {
            font-size: 1.75rem;
            font-weight: 700;
            color: #00aaff;
            text-shadow: 0 0 10px rgba(0, 170, 255, 0.3);
        }
        
        .original-price {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.5);
            text-decoration: line-through;
        }
        
        .discount {
            background: linear-gradient(135deg, #ff4757, #ff6b7a);
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
}

.product-features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    .feature {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: rgba(255, 255, 255, 0.85);
        font-size: 0.875rem;
        padding: 0.5rem 0;
        
        &.skeleton {
            height: 24px;
            border-radius: 4px;
        }
    }
}

.feature-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: rgba(0, 170, 255, 0.8);
    flex-shrink: 0;
    stroke-width: 1.5;
}

.product-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: auto;
    
    .action-button.skeleton {
        flex: 1;
        height: 44px;
        border-radius: 8px;
    }
    
    button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.875rem;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
        
        .btn-icon {
            width: 1rem;
            height: 1rem;
            stroke-width: 2;
        }
        
        &:hover {
            transform: translateY(-2px);
        }
    }
    
    .btn-primary {
        background: linear-gradient(135deg, #00aaff, #0088cc);
        color: white;
        box-shadow: 0 4px 15px rgba(0, 170, 255, 0.3);
        
        &:hover {
            box-shadow: 0 6px 20px rgba(0, 170, 255, 0.4);
        }
    }
    
    .btn-secondary {
        background: transparent;
        border: 2px solid #00aaff !important;
        color: #00aaff;
        
        &:hover {
            background: rgba(0, 170, 255, 0.1);
            border-color: #33bbff !important;
            color: #33bbff;
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
    
    &:not(.product-header):not(.product-icon) {
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

// Responsive design
@media (max-width: 768px) {
    .digital-product-card {
        min-width: 320px;
        margin: 0.5rem;
    }
    
    .product-actions {
        flex-direction: column;
    }
    
    .product-header {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    
    .rating {
        align-items: center;
    }
}
</style>
