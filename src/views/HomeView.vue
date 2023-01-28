
<template>
	<div class="home">
		<h2 ref="appTitleRef">{{ appTitle }}</h2>
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
			<input v-autofocus v-model="counterData.title" type="text"/>
		</div>
	</div>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import {useCounter} from '@/use/useCounter'

// Note how the data cannot be directly destructured from the import, but must be done 
// indirectly
const {increaseCounter, decreaseCounter, oddOrEven, counterData} = useCounter()

// Need to access template refs in this way
const appTitleRef = ref(null)

const appTitle = "My OK Counter App"

//  Multiple hooks of the same type allowed
onMounted(() => {
	console.log(`The app title is ${appTitleRef.value.offsetWidth } pixels wide`)
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
