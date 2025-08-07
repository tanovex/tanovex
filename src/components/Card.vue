<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMediaStore } from '../stores/mediaStore'

const mediaStore = useMediaStore()
const isLoading = ref(true)
const imageError = ref(false)

// Load random media item when component mounts
onMounted(async () => {
  try {
    await mediaStore.loadRandomItem()
  } catch (error) {
    console.error('Failed to load media item:', error)
  } finally {
    // Add a minimum loading time for better UX
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  }
})

// Function to load a new random item
const loadNewItem = async () => {
  isLoading.value = true
  imageError.value = false // Reset image error state
  try {
    await mediaStore.loadRandomItem()
  } catch (error) {
    console.error('Failed to load media item:', error)
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
		<div v-if="isLoading || mediaStore.isLoading" key="skeleton" class="card">
			<div class="card-img skeleton">
				<!-- waiting for img to load from javascript -->
			</div>
			<div class="card-body">
				<h2 class="card-title skeleton">
					<!-- waiting for title to load from javascript -->
				</h2>
				<p class="card-intro skeleton">
					<!-- waiting for intro to load from Javascript -->
				</p>
			</div>
		</div>
		
		<!-- Loaded content card -->
		<div v-else-if="mediaStore.currentItem" key="loaded" class="card">
			<div class="card-img">
				<img 
					v-if="!imageError"
					:src="mediaStore.currentItem.image" 
					:alt="mediaStore.currentItem.alt"
					@error="handleImageError"
				/>
				<div v-else class="image-fallback">
					<div class="fallback-text">{{ mediaStore.currentItem.alt }}</div>
					<div class="fallback-subtitle">Image unavailable</div>
				</div>
			</div>
			<div class="card-body">
				<h2 class="card-title">
					{{ mediaStore.currentItem.title }}
				</h2>
				<p class="card-intro">
					{{ mediaStore.currentItem.description }}
				</p>
				<div class="card-meta">
					<span class="category">{{ mediaStore.currentItem.category }}</span>
					<span class="stats">
						<span class="likes">❤️ {{ mediaStore.currentItem.likes }}</span>
						<span class="views">👁️ {{ mediaStore.currentItem.views }}</span>
					</span>
				</div>
			</div>
		</div>
		
		<!-- Error state -->
		<div v-else-if="mediaStore.error" key="error" class="card error-card">
			<div class="card-body">
				<h2 class="card-title error-title">
					⚠️ Error Loading Media
				</h2>
				<p class="card-intro">
					{{ mediaStore.error }}
				</p>
				<button class="refresh-btn" @click="loadNewItem">
					🔄 Try Again
				</button>
			</div>
		</div>
	</Transition>
</div>
</template>

<style scoped lang="scss">
*, *:after, *:before {
	box-sizing: border-box;
}

body {
	font-family: "Inter", sans-serif;
	background-color: #f2f5f7;
}

// THE CARD 
.card {
	display: flex;
	flex-direction: column;
	flex-basis: 300px;
	flex-shrink: 0;
	flex-grow: 0;
	max-width: 100%;
	min-width: 400px;;
	background-color: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	border-radius: 12px;
	overflow: hidden;
	margin: 1rem;
	backdrop-filter: blur(10px);
	transition: all 0.3s ease, height 0.5s ease, min-height 0.5s ease, width 0.5s ease;
	text-align: left;
	min-height: 400px; // Ensure consistent minimum height
}

.card:hover {
	transform: translateY(-5px);
	border-color: #00aaff;
	box-shadow: 0 12px 35px rgba(0, 170, 255, 0.2);
}

.card-img {
	position: relative;
	min-height: 200px;
	background-color: rgba(255, 255, 255, 0.05);
	overflow: hidden;
	margin: 0;
	padding: 0;
	border-radius: 12px 12px 0 0; // Match card border radius on top corners
	
	&.skeleton {
		background-color: rgba(255, 255, 255, 0.1);
		background-image:			
			linear-gradient(
				90deg, 
				rgba(255, 255, 255, 0), 
				rgba(0, 170, 255, 0.3),
				rgba(255, 255, 255, 0)
			);
		background-size: 80px 100%; // Wider shine for image area
		background-repeat: no-repeat;
		background-position: left -80px top 0;
		animation: shine 2s ease-in-out infinite;
	}
	
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: all 0.3s ease, transform 0.3s ease;

		margin: 0;
		padding: 0;
		display: block; // Remove any inline spacing
		border-radius: 12px 12px 0 0; // Match container border radius
	}
	
	&:hover img {
		transform: scale(1.05);
	}
	
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
}

.card-body {
	padding: 1.5rem;
	text-align: left;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	transition: all 0.3s ease;
}

.card-title {
	font-size: 1.25rem;
	line-height: 1.33;
	font-weight: 700;
	color: rgba(255, 255, 255, 0.95);
	text-align: left;
	margin: 0;
	transition: all 0.3s ease;
	&.skeleton { // NOTICE THIS
		min-height: 28px;
		border-radius: 4px;
	}
}

.card-intro {
	margin-top: .75rem;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.8);
	text-align: left;
	margin-bottom: 0;
	flex: 1;
	transition: all 0.3s ease;
	&.skeleton { // NOTICE THIS
		min-height: 72px;
		border-radius: 4px;
	}
}

// THE LOADING EFFECT
.skeleton {
	background-color: rgba(255, 255, 255, 0.1);
	// The shine that's going to move across the skeleton:
	background-image:			
			linear-gradient(
				90deg, 
				rgba(255, 255, 255, 0), 
				rgba(0, 170, 255, 0.3),
				rgba(255, 255, 255, 0)
			);
	background-size: 80px 100%; // Wider shine effect
	background-repeat: no-repeat; // No need to repeat the shine effect
	background-position: left -80px top 0; // Adjust position for wider shine
	animation: shine 2s ease-in-out infinite; // Slower, smoother animation
}

@keyframes shine {
	to {
		// Move wider shine from left to right, with offset on the right based on the width of the shine
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

// New styles for dynamic content
.card-meta {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	padding-top: 0.75rem;
	border-top: 1px solid rgba(0, 255, 255, 0.2);
	
	.category {
		color: #00ffff;
		font-size: 0.85rem;
		font-weight: 600;
		background: rgba(0, 255, 255, 0.1);
		padding: 0.25rem 0.5rem;
		border-radius: 12px;
	}
	
	.stats {
		display: flex;
		gap: 1rem;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.7);
		
		.likes, .views {
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
	}
}

.refresh-btn {
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	background: linear-gradient(45deg, #ff00ff, #00ffff);
	border: none;
	border-radius: 8px;
	color: white;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	width: 100%;
	
	&:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(255, 0, 255, 0.3);
	}
	
	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
}

.error-card {
	.card-body {
		text-align: center;
		padding: 2rem;
	}
	
	.error-title {
		color: #ff6b6b;
	}
}
</style>