// This file is in the standard location
// The file and function have the standard naming convention
import {ref, reactive, computed, watch, onMounted, nextTick} from 'vue'

// By moving this outside the function we make the state global accross all usages of
// this composable

const counterData = reactive({
	count: 0,
	title: "My Counter"
})

export function useCounter() {


	
	// These should be in appropriate sections of code
	onMounted(() => {
		console.log('Do Stuff related to counter')
	})
	
	// Note how the data has to be referenced
	watch(() => counterData.count, (newCount) => {
		if (newCount === 20) {
			alert('Your made it to 20!')
		}
	})
	
	
	const increaseCounter = amount => {
		counterData.count += amount
	
		// This could also be done using 'await', if the method is declared async
		nextTick(() => {
			console.log("Do something after next tick")
		})
	}
	
	const decreaseCounter = amount => {
		counterData.count -= amount
	}

	const oddOrEven = computed(() => {
		if (counterData.count % 2 === 0) {
			return "even"
		}
		return "odd"
	})

	return {increaseCounter, decreaseCounter, oddOrEven, counterData}
}