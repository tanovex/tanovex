<script setup lang="ts">
import ImageCard from '../ImageCard.vue'
import ProductCard from '../ProductCard.vue'
import DigitalProductCard from '../DigitalProductCard.vue'
</script>

<template>
    <div class="demo-page">
        <div class="demo-header">
            <h1>Component Showcase</h1>
            <p class="demo-description">
                Explore our collection of cyberpunk-themed components with glass morphism effects, 
                skeleton loading states, and smooth animations.
            </p>
        </div>
        
        <div class="demo-grid">
            <div class="demo-section">
                <h2>Media Card</h2>
                <p class="section-description">Interactive media card with skeleton loading and hover effects</p>
                <ImageCard />
            </div>
            
            <div class="demo-section">
                <h2>Property Card</h2>
                <p class="section-description">Real estate listing card with property details and realtor information</p>
                <ProductCard />
            </div>
            
            <div class="demo-section">
                <h2>Digital Product Card</h2>
                <p class="section-description">WordPress plugin showcase with pricing, features, and ratings</p>
                <DigitalProductCard />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.demo-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    text-align: left;
}

.demo-header {
    text-align: center;
    margin-bottom: 3rem;
    
    h1 {
        font-size: 3rem;
        font-weight: 700;
        background: linear-gradient(135deg, #00aaff, #33bbff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
    }
    
    .demo-description {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.8);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }
}

.demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
    align-items: start;
}

.demo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #00aaff;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    
    .section-description {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        margin-bottom: 1.5rem;
        max-width: 300px;
        line-height: 1.5;
    }
}

// Responsive design
@media (max-width: 1200px) {
    .demo-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto 4rem;
    }
}

@media (max-width: 768px) {
    .demo-page {
        padding: 1rem;
    }
    
    .demo-header {
        margin-bottom: 2rem;
        
        h1 {
            font-size: 2rem;
        }
        
        .demo-description {
            font-size: 1rem;
        }
    }
    
    .demo-grid {
        gap: 1.5rem;
        margin-bottom: 3rem;
    }
    
    .demo-footer {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 3rem;
        padding-top: 2rem;
    }
    
    .tech-items {
        grid-template-columns: 1fr;
    }
    
    .tech-stack, .features {
        padding: 1.5rem;
    }
}

// Animation for page load
.demo-page {
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

// Stagger animation for cards
.demo-section {
    animation: fadeInScale 0.6s ease-out;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
