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
		<div v-if="isLoading" key="skeleton" class="card">
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
		<div v-else key="loaded" class="card">
			<div class="card-img">
				<img src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" alt="Drive movie poster" />
			</div>
			<div class="card-body">
				<h2 class="card-title">
					Drive (2011)
				</h2>
				<p class="card-intro">
					Driver is a skilled Hollywood stuntman who moonlights as a getaway driver...
				</p>
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
	transition: all 0.3s ease, height 0.5s ease, min-height 0.5s ease;
	text-align: left;
	min-height: 400px; // Ensure consistent minimum height
}

.card:hover {
	transform: translateY(-5px);
	border-color: #00aaff;
	box-shadow: 0 12px 35px rgba(0, 170, 255, 0.2);
}

.card-img {
	padding-bottom: 56.25%;
	position: relative;
	background-color: rgba(255, 255, 255, 0.05);
	
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
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
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
</style>