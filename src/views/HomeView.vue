
<template>
	<div class="home">
		<h3>{{ counterTitle }}:</h3>
		<button @click="decreaseCounter" class="btn">-</button>
		<span class="counter">{{counter}}</span>
		<button @click="increaseCounter" class="btn">+</button>

		<div class="edit">
			<h4>Edit Counter Title:</h4>
			<input v-model="counterTitle" type="text"/>
		</div>
	</div>

</template>

<script setup>
import {ref} from 'vue'

const counter = ref(0),
	counterTitle = ref('My Counter')

const increaseCounter = () => {
	counter.value++
}

const decreaseCounter = () => {
	counter.value--
}
</script>

<style scoped>
.home {
	text-align: center;
	padding: 20px;
}

.btn, .counter {
	font-size: 40px;
	margin: 10px;
}

.edit {
	margin-top: 60px;
}

</style>
