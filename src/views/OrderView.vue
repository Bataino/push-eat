<script >
import PushButton from "@/components/PushButton.vue";
import Checkbox from 'primevue/checkbox';

export default {
	components: { PushButton, Checkbox },
	data() {
		return {
			order: {},
			isAgreed:false
		}
	}
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
					<h2 class="museo-1000">Unleash Epicurean Adventures</h2>
					<p>
						To ensure your satisfaction, please provide us with your preferences, dietary restrictions, event
						details, and we'll handle the rest.
					</p>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<form @submit.prevent="order" class="w-100 h-100 p-5 p-md-3 ps-md-1 pe-md-3">
				<icon icon="material-symbols:arrow-circle-left-outline-rounded" class="text-pe-dark fs-1"
					@click="this.$router.go(-1)" />
				<div class="">
					<h2 class="museo-1000 text-pe-green mt-3" _style="font-size:35px">
						Fill in your details
					</h2>
				</div>
				<div class="nexa-light my-5">
					<div class="row p-0">
						<div class="col-12 col-md-6 mb-3 mb-md-0">
							<input required v-model="order.first_name" class="form-control border rounded-10 p-2"
								placeholder="First Name" />
						</div>
						<div class="col-12 col-md-6 my-0">
							<input required v-model="order.last_name" class="form-control border rounded-10 p-2 "
								placeholder="Last Name" />
						</div>
					</div>
					<input required v-model="order.email" class="form-control border rounded-10 p-2 my-3"
						placeholder="Email address" />
					<input required v-model="order.address" class="form-control border rounded-10 p-2 my-3"
						placeholder="Full addresss" />
					<select v-model="order.option" placeholder=""
						class="form-control border rounded-10 p-2 my-3">
						<option selected disabled="" :value="undefined">For how many hours do you need the chef</option>
						<option>Water</option>
					</select>
					<input required v-model="order.prepare" class="form-control border rounded-10 p-2 my-3"
						placeholder="What will the chef prepare for you?" />
					<input v-model="order.special" class="form-control border rounded-10 p-2 my-3"
						placeholder="Any special request?" />
					<div class="d-flex align-items-start">
						<Checkbox inputId="ingredient1" name="pizza" v-model="isAgreed" :binary="true" />
						<label for="ingredient1" class="ms-2"> I agree to the
							<span class="text-pe-green">
								security agreement, terms and conditions.
							</span>
						</label>
					</div>
				</div>
				<push-button text="order now" type="submit" />
			</form>
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
