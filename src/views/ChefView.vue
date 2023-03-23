<script>
import PushButton from '@/components/PushButton.vue';

export default {
	name: "Home",
	components: {
		PushButton
	}
}
</script>

<template>
	<div class="row -10 p-0 ">
		<div class="col-12 col-md-6">
			<div class="w-100 h-100 ps-4 px-md-5">
				<div class="p-3 -md-5 pb-0 p-md-0 w-75">
					<h1 class="museo-1000 text-black head" style="">
						<span class="text-pe-green"> Order a cook</span>, the<br class="d-md-none"> way you order for Uber, Bolt
					</h1>
				</div>
				<div class="w-100 d-flex justify-content-end d-md-none">
					<img src="/images/illustration1.png" class="" />
				</div>
				<div class="px-3 px-md-0">
					<div class="nexa-light my-3 my-md-4">
						Cooking can be a demanding task and can
						add to the stress of your daily life. But life can
						be easier! you can now order a professional
						chef to your home for as low as  3,000
					</div>
					<push-button @click="this.$router.push('/order')" text="order now" />
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6 d-none d-md-flex ">
			<div class="w-100">
				<img src="/images/illustration1.png" class="w-100" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
@media(max-width:768px) {
	h1 {
		font-size: 3vh
	}

	img {
		// aspect-ratio: 1 !important;
		max-height: 300px;
	}
	.head {
		font-size:40px;
	}
}
@media(min-width:768px) {
	img {
		// aspect-ratio: 1 !important;
		width:100%;
	}
	.head {
		font-size:4vw;
	}
	.w-75 {
		width:100% !important
	}
}
</style>