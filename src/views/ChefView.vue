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
				<div class="ps-2 py-3 pe-0 pb-0 p-md-0 w-100">
					<h1 class="museo-1000 h2-sm head w-100 text-nowrap" style="">
						<span class="text-pe-green"> Order a cook</span>, the<br
							class=""> way you order for
							<br> Uber, Bolt
					</h1>
				</div>
				<div class="w-100 d-flex justify-content-end d-md-none">
					<img src="/images/illustration1.png" class="" />
				</div>
				<div class="ps-2 py-3 px-md-0">
					<div class="nexa-light my-3 my-md-4 col-12 col-lg-10">
					<div class="fs-md-5">
						Cooking can be a demanding task and can
						add to the stress of your daily life. But life can
						be easier! you can now order a professional
						chef to your home for as low as
						<span class="text-pe-green">
							₦3,000
						</span>
					</div>
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
		font-size: 40px;
	}

}

@media(min-width:768px) {
	img {
		// aspect-ratio: 1 !important;
		width: 100%;
	}

	.head {
		font-size: 40px;
	}
}

.w-pe-75 {
	width: 100%;

	@media(min-width:768px) {
		width: 75%;
	}
}

</style>
<style>
.fs-xs-6 {
	@media(max-width:468px){
		font-size:10px !important;
	}
}

</style>