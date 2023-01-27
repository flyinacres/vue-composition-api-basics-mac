<template>
	<div class="modals">
		<h1> Modals </h1>
		<button @click="showModal=true">Show Modal</button>
		<teleport to=".modals-container">
				<div class="modal" v-if="showModal">
				<h1>This is a Modal</h1>
				<p>Et ea nisi commodo laborum Lorem in. Esse veniam quis enim tempor sint duis ipsum nulla tempor tempor. Pariatur nulla ipsum veniam sit aliqua elit eu aute aute quis. Amet ea exercitation laborum quis fugiat consequat. Id amet magna commodo enim ullamco id nisi amet ut et duis dolore pariatur eiusmod. Non anim culpa excepteur irure Lorem duis.</p>
				<button @click="showModal=false">Hide modal</button>
			</div>
		</teleport>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
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
}
</style>