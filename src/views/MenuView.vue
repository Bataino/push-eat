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
		<div class="col-12 col-md-6">
			<div class="w-100 ps-4 pe-3 py-1 py-md-0 text-center mx-auto d-flex justify-content-center">
				<img src="/images/spag-green-overlay.png" class="" style="width:100%" />
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="w-100 h-100 px-3 pe-md-5">
				<div class="">
					<h1 class="museo-1000 text-pe-green" style="font-size:40px">
						<span class="text-pe-dark">Tired of eating</span><br>
						Rice, beans or eba?
					</h1>
				</div>
				<div class="nexa-light my-4 my-md-5 col-12 col-sm-10 col-md-12 col-lg-8">
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