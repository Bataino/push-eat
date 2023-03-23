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
			<img src="/images/logo.png" class="w-100" />
		</div>
		<div class="_d-flex align-items-center">
			<img src="/images/icon/Vector.png" class="my-auto " style="max-width:25px" />
			<!-- <icon icon="mingcute:dot-grid-line" class="text-pe-dark fs-2" /> -->
			<span class="fs-4 ">
				Menu
			</span> 
		</div>
	</div>
</template>

<style scoped>

</style>
