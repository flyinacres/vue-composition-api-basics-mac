<template>

	<teleport to=".modals-container">
		<div 
			v-if="modelValue"
			class="modal">
			<h1>{{ title }}</h1>
			<slot />
			<button @click="handleButtonClick()">Hide modal</button>
			<div>
				User name is {{ userData.username }}
			</div>
		</div>
	</teleport>

</template>

<script setup>
import { inject } from 'vue'

// How to use props in Vue 3
// Note the special modelValue prop
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: 'No title specified'
	}
})

// How to use emits
const emit = defineEmits(['update:modelValue'])

const handleButtonClick = () => {
	emit('update:modelValue', false)
}

// Ensure that the data is available here
const userData = inject('userData')
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