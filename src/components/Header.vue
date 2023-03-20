<script setup>
defineProps({
	msg: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div class="d-flex justify-content-between align-items-center pt-4 pe-5 ps-5 pb-4">
		<div class="" style="max-width:100px">
			<img :src="'/images/logo.png'" class="w-100" />
		</div>
		<div class="fs-4">
			<icon icon="mingcute:dot-grid-line" class="text-pe-dark fs-2" />
			Menu
			
		</div>
	</div>
</template>

<style scoped>

</style>
