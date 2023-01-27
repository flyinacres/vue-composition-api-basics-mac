<template>
	<div class="modals">
		<h1> Modals </h1>
		<button @click="showModal=true">Show Modal</button>
		<Modal v-if="showModal">
			<template #title>My new title</template>
			<p>Laboris laboris anim laboris ullamco consequat consequat tempor. Deserunt voluptate culpa esse enim qui Lorem velit culpa amet enim aliquip. Consequat sit velit non cillum aliquip nisi reprehenderit. Dolore ullamco eiusmod Lorem proident do velit labore. Et consectetur qui ut incididunt voluptate anim laboris ex. Aliquip incididunt exercitation laborum adipisicing nulla velit laboris deserunt dolore.</p>
		</Modal>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>


