<script>
import Card from "primevue/card"
import PushButton from '@/components/PushButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import FoodCard from '@/components/FoodCard.vue';
import Badge from "primevue/Badge"
import InputNumber from "primevue/inputnumber"
import { getProducts } from "@/firebase/product"
import { addorUpdateCart, deletefromCart } from "@/services/cart"
import Dialog from 'primevue/dialog';
import FoodTray from "@/components/FoodTray.vue";

SwiperCore.use([Pagination, Autoplay, Navigation]);

// Import Swiper styles
export default {
	components: {
		Card,
		PushButton,
		Swiper,
		SwiperSlide,
		FoodCard,
		Badge,
		InputNumber,
		Dialog,
		FoodTray
	},
	data() {
		return {
			food: {},
			quantity: 1,
			foodTrayMobile: false
		}
	},
	methods: {
		selectFood(food) {
			this.food = food
			console.log(food)
		},
		addOrUpdateCart() {
			addorUpdateCart({ ...this.food, quantity: this.quantity })
		},
		deletefromCart(id) {
			deletefromCart(id)
		},
		cartQuantity(food) {
			if (this.$store.state.cart[food.id])
				return this.$store.state.cart[food.id].quantity
			return 0
		}
	},
	watch: {
		food: {
			immediate: true,
			deep: true,
			handler(food) {
				const quantity = this.cartQuantity(food)
				this.quantity = (quantity != 0 ? quantity : 1)
			}
		},
		quantity(qty) {
			if (this.cartQuantity(this.food) > 0 && qty > 0)
				this.addOrUpdateCart()
		}
	},
	created() {
		this.food = this.$store.state.foods[0]
		getProducts()
	},
	mounted() {
		setTimeout(() => {
			this.$refs.foodImg.classList.add("twisterInUp animate__bounce")
		}, 3000)
	}
}
</script>

<template>
	<div class="position-relative_">
		<img :src="'/images/curve-mobile.svg'" class="position-absolute d-md-none"
			style="left:0;top:0;width:100%;max-height:400px" />
		<img :src="'/images/curve.svg'" class="position-absolute d-none d-md-inline"
			style="left:0;top:0;width:49%;max-width:500px" />
		<div class="position-relative w-100 text-center d-md-none" style="padding-top:20%">
			<img :src="'/images/spag.png'" class="w-100" style="max-width:300px" />
		</div>
		<div class="row no-gutters _pt-4">
			<div class="col-5 d-none d-md-flex ">
				<div class="position-relative w-100 px-1 ">
					<img :src="'/images/spag.png'" class="w-100" ref="foodImg" style="max-width:500px" />
				</div>
			</div>
			<div class="col-12 col-md-3 position-relative">
				<div class="ps-4 pe-4 pe-md-0 ps-md-1 p-lg-0 row">
					<div class="col-6 col-md-12">
						<h2 class="fw-bold pt-4">
							<b class="fw-bold nexa">
								{{ food.name }}
							</b>
						</h2>
					</div>
					<div class="col-6 col-md-12">
						<form @submit.prevent="addOrUpdateCart">
							<div
								class="mt-md-2 d-flex w-100 align-items-center justify-content-end justify-content-md-start">
								<b class="text-pe-green fs-4 nexa-bold me-2">
									#{{ food.price }}
								</b>
								<div class="border mt-md-2 rounded-10 d-flex w-100 justify-content-center justify-content-md-start align-items-center p-1 px-2"
									style="min-width:100px;max-width:150px">
									<input-number v-model="quantity" :min="1" inputId="horizontal-buttons" showButtons
										buttonLayout="horizontal" :step="1" decrementButtonclass="" incrementButtonclass=""
										class="d-flex align-items-center" incrementButtonIcon="pi pi-plus"
										decrementButtonIcon="pi pi-minus" />

								</div>
							</div>
							<div class="mt-3 text-end text-md-start">
								<push-button type="submit" text="choose" v-if="!cartQuantity(food)"></push-button>
								<!-- <small v-esle>
									Added to Cart
								</small> -->
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="d-none d-md-flex col-md-4">
				<div class="p-1 pe-md-3 w-100">
					<food-tray></food-tray>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-start justify-content-md-center mb-4 my-4">
			<div style="max-width:800px" class="w-100">
				<swiper :breakpoints="{
					// when window width is >= 640px
					300: {
						slidesPerView: 2,
					},
					567: {
						slidesPerView: 3,
					},
					790: {
						slidesPerView: 3,
					},
					// when window width is >= 768px
					968: {
						slidesPerView: 5,
					},
				}" :autoplay="false" :grabCursor="true" :pagination="{ clickable: true, }" :navigation="true" :space-between="3"
					@swiper="onSwiper" @_slideChange="onSlideChange" class="px-5">
					<swiper-slide v-for="food in this.$store.state.foods" :key="food">
						<food-card :food="food" :quantity="cartQuantity(food)" @click="selectFood(food)"
							:selected="this.food == food"></food-card>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="m-5 d-md-none">
			<button
				class="btn rounded-10 bg-pe-dark fs-6 w-100 p-3 text-white d-flex justify-content-between align-items-center"
				@click="this.foodTrayMobile = true">
				<span class="fs-5 nexa">
					View food tray
				</span>
				<icon icon="material-symbols:arrow-circle-right-outline-rounded" class="text-pe-green fs-1" />
			</button>
		</div>
		<Dialog v-model:visible="foodTrayMobile" :dismissableMask="true" modal class="p-3 w-100" style="">
			<div>
				<food-tray trayHeight="400px" style="max-width:400px" class="w-100"></food-tray>
			</div>
		</Dialog>
	</div>
</template>

<style>
.p-inputnumber-button {
	background-color: transparent !important;
	border-color: lightgray;
	color: var(--pusheat-dark) !important;
	border-radius: 50% !important;
	max-width: 20px;
	height: 20px;
}

.p-inputtext {
	border: none;
	border-radius: 0 !important;
}

input:focus {
	border-radius: 0;
	box-shadow: 0 0 0 0 !important;
}

.p-dialog {
	background-color: transparent !important;
	border: none;
	box-shadow: none;
}

.p-dialog-header {
	display: none
}

.p-dialog-content: {
	background-color: transparent !important;
	padding: 0px !important;
}</style>