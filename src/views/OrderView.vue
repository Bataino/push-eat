<script >
import PushButton from "@/components/PushButton.vue";
import Checkbox from 'primevue/checkbox';
import Widget from "../functions/widget";
import Dropdown from 'primevue/dropdown';
import { createOrder } from "@/services/order"
import { storeUser } from "@/functions/storage";


export default {
	components: { PushButton, Checkbox, Dropdown },
	data() {
		return {
			order: {
				type: "chef",
			},
			isAgreed: false
		}
	},
	methods: {
		createOrder() {
			storeUser(this.order)
			Widget.openLoading()
			createOrder(this.order)
				.then((res) => {
					Widget.dismiss()
					if (res.data.success) {
						this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 5000 });
						this.$router.push('/order/success')
						return;
					}
					this.$toast.add({ severity: 'danger', summary: 'Error', detail: 'unknown error occured', life: 5000 });

				})
		}
	},
	created() {
		try {
			this.order = { ...this.order, ...JSON.parse(localStorage.getItem("user")) }
		}
		catch (e) {

		}

	}
}
</script>

<template>
	<div class="row -10 p-0 m-0-ps-5" style="min-height:100vh">
		<div class="col-12 col-md-5 d-none d-md-flex align-items-center">
			<div class="w-100 h-100 p-4 bg-pe-dark d-flex align-items-center">
				<div class="mx-auto" style="max-width: 400px;">
					<div class="px-5 mx-auto">
						<img src="/images/spag-green-overlay.png" class="w-100" />
					</div>
					<div class="text-center text-white mx-auto">
						<h1 class="museo-1000">Unleash<br> Epicurean <br>Adventures</h1>
						<p class="mx-auto px-5 pt-2 nexa">
							To ensure your satisfaction, please provide us with your preferences, dietary restrictions,
							event
							details, and we'll handle the rest.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<form @submit.prevent="createOrder" class="w-100 h-100 p-3 ps-md-1 pe-md-3">
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
							<input required v-model="order.first_name" class="form-control border rounded-10 p-3"
								placeholder="First Name" />
						</div>
						<div class="col-12 col-md-6 my-0">
							<input required v-model="order.last_name" class="form-control border rounded-10 p-3 "
								placeholder="Last Name" />
						</div>
					</div>
					<input required v-model="order.email" type="email" class="form-control border rounded-10 p-3 my-3"
						placeholder="Email address" />
					<input required v-model="order.phone_number" inputmode="numeric" minlength="11" maxlength="11"
						class="form-control border rounded-10 p-3 my-3" placeholder="Phone Number" />
						<Dropdown v-model="order.location" :options="['Abeokuta', 'Lagos', 'Ibadan']"
						placeholder="Where are you ordering from"
						class="form-control text-start m-0 _p-0 border rounded-10 nexa" required>
					</Dropdown>
					<input required v-model="order.full_address" class="form-control border rounded-10 p-3 my-3"
						placeholder="Full addresss" />
					<Dropdown v-model="order.duration" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
						placeholder="For how many hours do you need the chef" min="1"
						class="form-control text-start _p-0 border rounded-10 nexa" required>
					</Dropdown>		
					<input required v-model="order.meal_to_prepare" class="form-control border rounded-10 p-3 my-3"
						placeholder="What will the chef prepare for you?" />
					<input v-model="order.note" class="form-control border rounded-10 p-3 my-3"
						placeholder="Any special request?" />
					<div class="d-flex align-items-start">
						<Checkbox inputId="ingredient1" name="pizza" required v-model="isAgreed" :binary="true" />
						<small for="ingredient1" class="ms-2"> I agree to the
							<span class="text-pe-green">
								security agreement, terms and conditions.
							</span>
						</small>
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
.p-dropdown-label {
	text-align: start;
	font-family: 'nexa light';
}

.input {}

input {
	.input
}
</style>
