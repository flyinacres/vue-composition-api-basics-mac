<template>

	<teleport to=".modals-container">
		<div class="modal">
			<h1>{{ title }}</h1>
			<slot />
			<button @click="$emit('hideModal')">Hide modal</button>
		</div>
	</teleport>

</template>

<script setup>
// How to use props in Vue 3
const props = defineProps({
	title: {
		type: String,
		default: 'No title specified'
	}
})

// How to use emits
const emit = defineEmits(['hideModal'])
</script>


<style scoped>
.modal {
	background: beige;
	padding: 10px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	color: black;
}
</style>