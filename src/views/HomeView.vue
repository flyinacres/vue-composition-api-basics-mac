
<template>
	<div class="home">
		<h2 ref="appTitleRef">{{ appTitle }}</h2>
		<h3>{{counter.title}}</h3>
		<div>
			<button class="btn">-</button>
			<button  class="btn">--</button>
			<span class="counter">{{counter.count}}</span>
			<button class="btn">+</button>
			<button  class="btn">++</button>
		</div>
		<p>This counter is odd/even</p>
		<div class="edit">
			<h4>Edit Counter Title:</h4>
			<input v-model="counter.title" v-autofocus type="text"/>
		</div>
	</div>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import {useCounterStore} from '@/stores/counter'

const counter = useCounterStore()


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
