import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({
		count: 10,
		title: "My Counter Title"
	}),
	actions: {
		increaseCounter(amount) {
			this.count+=amount
		},
		decreaseCounter(amount) {
			this.count-=amount
		}
	}
})