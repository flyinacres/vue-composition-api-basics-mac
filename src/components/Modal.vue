<template>

	<teleport to=".modals-container">
		<div class="modal">
			<h1><slot name="title" /></h1>
			<slot />
			<!--<pre> {{  $slots.title() }}</pre>-->
			<button >Hide modal</button>
		</div>
	</teleport>

</template>


<style scoped>
.modal {
	background: beige;
	padding: 10px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	color: black;
}
</style>