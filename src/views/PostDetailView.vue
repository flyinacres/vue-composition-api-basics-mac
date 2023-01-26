<template>
	<div class="post-detail">
		<h1>
			This is a post page
		</h1>
		<p>Proident sint enim voluptate pariatur labore tempor laboris ut officia. Dolore magna laborum nostrud exercitation et aliqua qui commodo occaecat laborum aliquip laboris. Commodo ipsum est nostrud in mollit id ea enim ex incididunt tempor sit. Proident pariatur Lorem ad anim minim adipisicing et in eu adipisicing nisi sint. Sint qui nulla in aliqua elit anim laborum est. Lorem aliqua consectetur ullamco eiusmod.</p>
		<div>
			<button @click="showPostId">Show Post Id</button>
		</div>
		<div>
			<button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
		</div>
		<div>
			<button @click="goToFirstPost">Go to first post</button>
		</div>
		<p><RouterLink to="/posts">&lt; Back </RouterLink></p>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

// Standard way to access the route
const route = useRoute()
const router = useRouter()

const showPostId = () => {
	alert(`The ID of this post is: ${ route.params.id }`)
}

const goHomeIn3Seconds = () => {
	setTimeout(() => {
		router.push({ name: 'home'})
	}, 3000)
}

const goToFirstPost = () => {
	router.push({
		name: 'postDetail',
		params: {
			id: 'id1'
		}
	})
}
</script>