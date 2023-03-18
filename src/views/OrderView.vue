<script >
import PushButton from "@/components/PushButton.vue";
export default {
	components: { PushButton }
}
</script>

<template>
	<div class="row -10 p-0 m-0-ps-5" style="min-height:100vh">
		<div class="col-12 col-md-6 d-none d-md-flex">
			<div class="w-100 h-100 p-4 bg-pe-dark">
				<div class="px-5">
					<img src="/images/spag-green-overlay.png" class="w-100" />
				</div>
				<div class="text-center text-white ">
					<h2 class="museo-1000">Quench the Hunger</h2>
					<p>
						To ensure prompt delivery of your order, please provide accurate and complete details of your
						desired dishes and any specific requests or dietary restrictions in the form.
					</p>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="w-100 h-100 p-5 p-md-3 ps-md-1 pe-md-3">
				<icon icon="material-symbols:arrow-circle-left-outline-rounded" class="text-pe-dark fs-1" @click="this.$router.go(-1)" />
				<div class="">
					<h2 class="museo-1000 text-pe-green mt-3" _style="font-size:35px">
						Fill in your details
					</h2>
				</div>
				<div class="nexa-light my-5">
					<div class="row p-0">
						<div class="col-12 col-md-6 mb-3 mb-md-0">
							<input class="form-control border rounded-10 p-2" placeholder="First Name" />
						</div>
						<div class="col-12 col-md-6 my-0">
							<input class="form-control border rounded-10 p-2 " placeholder="Last Name" />
						</div>
					</div>
					<input class="form-control border rounded-10 p-2 my-3" placeholder="Email address" />
					<input class="form-control border rounded-10 p-2 my-3" placeholder="Full addresss" />
					<select placeholder="What is the chef preparing" class="form-control border rounded-10 p-2 my-3">
						<option>Water</option>
					</select>
					<input class="form-control border rounded-10 p-2 my-3"
						placeholder="What will the chef prepare for you?" />
					<input class="form-control border rounded-10 p-2 my-3" placeholder="Any special request?" />
				</div>
				<push-button text="order now" />
			</div>
		</div>
	</div>
</template>

<style>
.input {}
</style>

<style lang="less">
.input {}

input {
	.input
}
</style>
