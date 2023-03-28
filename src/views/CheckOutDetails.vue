<script>
import Card from "primevue/card"
import Checkbox from "primevue/checkbox"
import { createOrder } from "@/services/order"
import Widget from "@/functions/widget"

export default {
	name: "CheckOut",
	props: ["value"],
	components: {
		Checkbox,
		Card
	},
	data() {
		return {
			isAgreed: true,
			order: {}
		}
	},
	computed: {
		isNotCompleted() {
			if (Object.keys(this.order) < 5)
				return true
			return false
		}
	},
	methods: {
		createOrder() {
			Widget.openLoading()

			const cart = this.$store.state.cart
			let products = Object.entries(cart).map((e) => {
				return {
					product: e[1].id,
					quantity: e[1].quantity
				}
			})

			this.order.phone_number = this.order.phone_number.toString()
			createOrder({
				...this.order,
				products
			})
				.then((data) => {
					Widget.dismiss()
					if (data.data.success) {
						localStorage.setItem("user", JSON.stringify(this.order))
						this.$router.push("/order/success")
					}
				})
		}
	},
	watch: {
		order: {
			deep: true,
			handler(order) {
				this.$emit('input', order)
			}
		}
	},
	created() {
		if (localStorage.getItem("user"))
			this.order = JSON.parse(localStorage.getItem("user")) ?? {}
	}

}
</script>

<template>
	<form @submit.prevent="createOrder">
		<Card style="min-width:100%;border-radius: 20px;" :style="`height:${height}`"
			class="bg-pe-dark text-white position-relative">
			<template #title>
				<span class="museo-1000" style="font-size: x-large;">
					Almost there
				</span>
			</template>
			<!-- <template #subtitle> Card subtitle </template> -->
			<template #content>
				<div class="px-2 text-gray" :style="`min-height:${trayHeight ?? '200px'}`">
					<div class="">
						<span for="email" class="text-sm">
							Email
						</span>
						<input type="email" v-model="order.email" id="email" required
							class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="">
						<span for="first_name" class="text-sm">
							First name
						</span>
						<input type="text" v-model="order.first_name" id="first_name" required
							class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="">
						<span for="last_name" class="text-sm">
							Last name
						</span>
						<input type="text" v-model="order.last_name" id="last_name" required
							class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="">
						<span for="phone">
							Phone Number
						</span>
						<input type="tel" maxlength="11" minlength="11" inputmode="Numeric" v-model="order.phone_number"
							id="phone" required class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="">
						<span for="full_address">
							Full Address
						</span>
						<input type="text" v-model="order.full_address" id="full_address" required
							class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="d-flex align-items-start field-checkbox">
						<Checkbox inputId="ingredient1" v-model="isAgreed" required :binary="true" name="pizza" />
						<span for="ingredient1" class="ms-2"> I agree to the
							security agreement, terms and conditions.
						</span>
					</div>
				</div>
			</template>

		</Card>
		<div class="py-3 text-center px-4 px-md-0">
			<button class="btn btn-pe-green d-none d-md-block w-100 rounded-10 p-2 my-1 nexa"
				:disabled="!Object.entries(this.$store.state.cart)[0] || isNotCompleted" type="submit">
				<span class="fs-6 nexa">
					Order now
				</span>
			</button>

			<button class="btn btn-pe-green d-md-none w-100 rounded-10 p-2 my-1 nexa"
				:disabled="!Object.entries(this.$store.state.cart)[0] && isNotComplete" type="submit">
				<div class="fs-6 nexa">
					Order now
				</div>
			</button>
		</div>
	</form>
</template>

<style scoped lang="less">
@media(max-width:768px) {
	.museo-1000 {
		color: var(--pusheat-dark)
	}

	.p-card {
		background-color: transparent !important;
		border-bottom: 0px !important;
		box-shadow: none;
	}
}

input,
input:active,
input:focus,
input::after {
	background: transparent !important;
	border-radius: 0px;
	border-color: gray !important;
	margin-top: px;
	margin-bottom: 10px;
	color: gray;
	font-size: 12px;
}

span {
	.text-sm !important;
	font-size: 12px
}

.p-checkbox {
	background-color: transparent !important;
}

.p-checkbox-box {
	background-color: transparent !important;
}

p-checkbox-icon {
	background-color: transparent !important;
}

.text-sm {}
</style> 