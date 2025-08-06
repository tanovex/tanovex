<script setup lang="ts">

</script>
<template>
    <div class="home-content">
        <!-- Hero Section -->
        <div class="hero">            
            <!-- Hero content -->
            <div class="hero-content">
                <h2>Senior Software Engineer</h2>
                <p class="lead">Building innovative integrations and customer experiences.</p>
                <div class="cta-buttons">
                    <a href="https://www.linkedin.com/in/mcgeemd1" class="btn btn-primary">Contact Me</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.home-content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

.hero {
    background: linear-gradient(135deg, #242424 0%, #1a1a1a 100%);
    padding: 4rem 2rem;
    border-radius: 12px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 2;
}


.lead {
    font-size: 1.25rem;
    opacity: 0.8;
    max-width: 600px;
    margin: 1rem auto 2rem;
    line-height: 1.6;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary {
    background: linear-gradient(135deg, #00aaff, #0088cc);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 170, 255, 0.3);
    border: none;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 170, 255, 0.4);
}

/* Remove old animated section styles */

@media (max-width: 768px) {
    .hero {
        padding: 2rem 1rem;
    }
    
    .tech-icon {
        font-size: 1.5rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}
</style>