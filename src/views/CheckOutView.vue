<script>
import cart from "@/mixin/cart"
import CheckOut from '@/views/CheckOutDetails.vue'

// Import Swiper styles
export default {
	mixins: [cart],
	components: {
		CheckOut
	},
	data() {
		return {
			cart: {},
			orderDetails:{}
		}
	},
	methods: {

	},
	watch: {
		cart: {
			deep: true,
			handler(cart) {
				this.replaceCart(cart)
			}
		}
	},
	created() {
		this.cart = this.$store.state.cart
	},
	mounted() {

	}
}
</script>

<template>
	<div class="">
		<div class="row no-gutters p-3 px-md-5">
			<div class="col-12 col-md-8">
				<div>
					<h1 class="museo-1000">
						<icon icon="ic:round-arrow-back-ios" @click="this.$router.go(-1)"
							class=" fw-bold mx-0 px-0 d-md-none"></icon>
						<span>
							Check out Page
						</span>
					</h1>
					<table class="w-100 mt-4">
						<thead class="border-bottom nexa-bold">
							<th>
								Food type
							</th>
							<th>
								Quantity
							</th>
							<th>
								Price
							</th>
							<th>

							</th>
						</thead>
						<tr v-for="cartFood in cart" :key="cartFood.id" class="nexa">
							<td>
								{{ cartFood.name }}
							</td>
							<td>
								<div class="text-center border px-2 rounded-10" style="max-width: 100px;">
									<input-number v-model="cartFood.quantity" :min="cartFood.min_order" inputId="horizontal-buttons"
										showButtons buttonLayout="horizontal" @change="console.log('Ohh Oh')" :step="cartFood.min_order" decrementButtonclass=""
										incrementButtonclass="" class="d-flex align-items-center text-center"
										incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />{{ }}
								</div>

							</td>
							<td class="text-pe-green">
								&#x20A6;{{ cartFood.quantity * cartFood.price }}
							</td>
							<td>
								<icon icon="material-symbols:cancel-outline-rounded" class="fs-5 text-pe-green"
									@click="deletefromCart(cartFood.id)"></icon>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="col-md-4 ">
				<div class="d-none d-md-flex">
					<check-out v-model="orderDetails"></check-out>
				</div>
				<div class="mt-5 d-md-none">
					<div class="mt-5 pt-4	" style="border-top:2px lightgray solid">
						<div class="text-end fs-3 nexa-bold fw-bold">
							Total: <span class="text-pe-green nexa-bold">&#x20A6;{{ this.$store.getters.cartSum }}</span>
						</div>
					</div>
					<button class="btn btn-pe-green w-100 rounded-10 p-3 my-2 mt-4 nexa"
						@click="this.$router.push('/checkout/complete')">
						<div class="fs-6 nexa">
							Order now
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
td {
	padding-top: 15px;
}
</style>
