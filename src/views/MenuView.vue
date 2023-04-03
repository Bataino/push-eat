<script >
import PushButton from '@/components/PushButton.vue'

export default {
	components: {
		PushButton
	}
}
</script>

<template>
	<div class="d-flex justify-content-center w-100">
	<div class="row w-100">
		<div class="col-12 col-md-6 d-none d-md-block">
			<div class="w-100 ps-4 pe-3 py-1 py-md-0 text-center mx-auto d-flex justify-content-center">
				<img src="/images/spag-green-overlay.png" class="" style="width:100%" />
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="w-100 h-100 px-3 py-3 p-md-0  pe-md-5">
				<div class="">
					<h1 class="museo-1000 h2-sm text-pe-green  text-nowrap" style="font-size:40px">
						<span class="text-pe-dark">Tired of eating</span><br>
						Rice, beans or eba?
					</h1>
				</div>
				<div class="w-100 py-2 d-flex justify-content-center d-md-none">
					<img src="/images/spag-green-overlay.png" class="" />
				</div>
				<div class="nexa-light my-4 my-md-5 col-12 col-lg-10 fs-md-5">
					Are you tired of eating the same meals every day? Rice, Beans, and Eba are becoming boring and unappetizing? It's time to mix things up and try something new!
				</div>
				<push-button text="Try our menu" @click="this.$router.push('/dish')"></push-button>
			</div>
		</div>
		</div>
	</div>
</template>

<style scoped lang="less">
@media(max-width:768px){
	h1 {
		font-size:3vh
	}
	img {
		max-width:50vw;
		min-width:300px
	}
}
</style>