<script>
import Card from "primevue/card"
import Checkbox from "primevue/checkbox"
import Dropdown from "primevue/dropdown"
import { createOrder } from "@/services/order"
import Widget from "@/functions/widget"
import { storeUser } from "@/functions/storage"
import CouponCode from '@/components/CouponCode.vue'

export default {
	name: "CheckOut",
	props: ["value"],
	components: {
		Checkbox,
		Card,
		Dropdown,
CouponCode
	},
	data() {
		return {
			isAgreed: false,
			order: {
				type:"meal"
			}
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
			storeUser(this.order)
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
		if (localStorage.getItem("user")){
			const user = JSON.parse(localStorage.getItem("user")) ?? {}
			this.order = { ...this.order, ...user }
		}
	}

}
</script>

<template>
	<form @submit.prevent="createOrder">
		<Card style="min-width:100%;border-radius: 20px;" :style="`height:${height}`"
			class="bg-pe-dark text-white position-relative py-0">
			<template #title>
				<span class="museo-1000 px-2" style="font-size: x-large;">
					Almost there
				</span>
			</template>
			<!-- <template #subtitle> Card subtitle </template> -->
			<template #content>
				<div class="px-2 text-gray" :style="`min-height:${trayHeight ?? '200px'}`">
					<div class="">
						<input type="email" v-model="order.email" id="email" required
							class="p-3 border rounded-10 form-control" placeholder="Email">
					</div>
					<div class="">
						<input type="text" v-model="order.first_name" id="first_name" required
							class="p-3 border rounded-10 form-control"  placeholder="First Name">
					</div>
					<div class="">
						<input type="text" v-model="order.last_name" id="last_name" required
							class="p-3 border  rounded-10 form-control"  placeholder="Last Name">
					</div>
					<div class="">
						<input type="tel" maxlength="11" minlength="11" inputmode="Numeric" v-model="order.phone_number"
							id="phone" required class="p-3 border rounded-10 form-control" placeholder="Phone Number">
					</div>
					<div class="">
						<Dropdown required v-model="order.location" :options="['Abeokuta', 'Lagos', 'Ibadan']"
							placeholder="Where are you ordering from"
							class="p- m-0 mb-2 border text-start rounded-10 form-control shadow-none nexa">
						</Dropdown>
					</div>
					<div class="">
						<input type="text" v-model="order.full_address" id="full_address" required
							class="p-3 mt-1 border  rounded-10 form-control" placeholder="Full Address">
					</div>
					<coupon-code class="mb-3" type="meal" v-model="order.coupon"></coupon-code>
					<div class="d-flex my-2 align-items-start field-checkbox">
						<Checkbox inputId="ingredient1" v-model="isAgreed" required :binary="true" name="pizza" />
						<span for="ingredient1" class="ms-2 gray text-md-white"> I agree to the
							<a class="text-pe-green" href="/terms/service">security agreement</a>, 
							<a class="text-pe-green" href="/terms/policy">terms and conditions</a>.
						</span>
					</div>
				</div>
			</template>

		</Card>
		<div class="py-md-3 text-center px-4 px-md-0">
			<button class="btn btn-pe-green d-none d-md-block w-100 rounded-10 p-3 my-1 nexa"
				:disabled="!Object.entries(this.$store.state.cart)[0] || isNotCompleted" type="submit">
				<span class="fs-6 nexa">
					Order now
				</span>
			</button>

			<button class="btn btn-pe-green d-md-none w-100 rounded-10 p-3 my-1 nexa"
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
input::after,
dropdown {
	// background: transparent !important;
	// border-radius: 0px;
	// border-color: gray !important;
	// margin-top: px;
	margin-bottom: 10px;
	@media(min-width:768px){
		color:white;
	}
	font-size: 12px;
	background-color:transparent;
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
.text-md-white {
	@media(min-width:768px){
		color:white !important;
	}
}
.text-sm {}
</style> 