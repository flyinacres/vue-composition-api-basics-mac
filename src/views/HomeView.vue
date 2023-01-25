
<template>
	<div class="home">
		<h2>{{ appTitle }}</h2>
		<h3>{{ counterData.title }}:</h3>
		<button @click="decreaseCounter" class="btn">-</button>
		<span class="counter">{{counterData.count}}</span>
		<button @click="increaseCounter" class="btn">+</button>

		<div class="edit">
			<h4>Edit Counter Title:</h4>
			<input v-model="counterData.title" type="text"/>
		</div>
	</div>

</template>

<script setup>
import {ref, reactive} from 'vue'

const counter = ref(0),
	counterTitle = ref('My Counter')

const appTitle = "My Amazing Counter App"
const counterData = reactive({
	count: 0,
	title: "My Counter"
})

const increaseCounter = () => {
	counterData.count++
}

const decreaseCounter = () => {
	counterData.count--
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
