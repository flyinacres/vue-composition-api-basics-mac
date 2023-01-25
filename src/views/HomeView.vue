
<template>
	<div class="home">
		<h2>{{ appTitle }}</h2>
		<h3>{{ counterData.title }}:</h3>
		<div>
			<button @click="decreaseCounter(1)" class="btn">-</button>
			<button @click="decreaseCounter(2)" class="btn">--</button>
			<span class="counter">{{counterData.count}}</span>
			<button @click="increaseCounter(1)" class="btn">+</button>
			<button @click="increaseCounter(2)" class="btn">++</button>
		</div>
		<p>This counter is {{  oddOrEven }}</p>
		<div class="edit">
			<h4>Edit Counter Title:</h4>
			<input v-model="counterData.title" type="text"/>
		</div>
	</div>

</template>

<script setup>
import {reactive, computed, watch, 
	onBeforeMount, onMounted, onBeforeUnmount, onUnmounted,
	onActivated, onDeactivated} from 'vue'

const appTitle = "My OK Counter App"

const oddOrEven = computed(() => {
	if (counterData.count % 2 === 0) {
		return "even"
	}
	return "odd"
})


const counterData = reactive({
	count: 0,
	title: "My Counter"
})

// Note how the data has to be referenced
watch(() => counterData.count, (newCount) => {
	if (newCount === 20) {
		alert('Your made it to 20!')
	}
})


const increaseCounter = amount => {
	counterData.count += amount
}

const decreaseCounter = amount => {
	counterData.count -= amount
}

// There are no specific created hooks as all of the code
// in the setup script is run just before creation
onBeforeMount(() => {
	console.log("onBeforeMount")
})
onMounted(() => {
	console.log("onMounted")
})
onBeforeUnmount(() => {
	console.log("onBeforeUnmount")
})
onUnmounted(() => {
	console.log("onUnmounted")
})
onActivated(() => {
	console.log("onActivated")
})
onDeactivated(() => {
	console.log("onDeactivated")
})
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
