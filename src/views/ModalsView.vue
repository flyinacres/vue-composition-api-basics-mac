<template>
	<div class="modals">
		<h1> Modals </h1>
		<div>
			<label>
				Show dark modals?
				<input v-model="showDarkModals" type="checkbox" />
			</label>
		</div>
		<button @click="showModal=true">Show Modal</button>
		<component 
			:is="showDarkModals ? ModalDark : Modal"
			v-model="showModal"
			title="My Modal Title vis props">
			<p>Laboris laboris anim laboris ullamco consequat consequat tempor. Deserunt voluptate culpa esse enim qui Lorem velit culpa amet enim aliquip. Consequat sit velit non cillum aliquip nisi reprehenderit. Dolore ullamco eiusmod Lorem proident do velit labore. Et consectetur qui ut incididunt voluptate anim laboris ex. Aliquip incididunt exercitation laborum adipisicing nulla velit laboris deserunt dolore.</p>
		</component>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
const showDarkModals = ref(false)
const showModal = ref(false)

</script>


