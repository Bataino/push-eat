<script>
import Card from "primevue/card"
import PushButton from '@/components/PushButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import FoodCard from '@/components/FoodCard.vue';
import InputNumber from "primevue/inputnumber"
import { getProducts } from "@/firebase/product"
import { addorUpdateCart, deletefromCart } from "@/services/cart"
import Dialog from 'primevue/dialog';
import FoodTray from "@/components/FoodTray.vue";
import DishSkeleton from "@/components/skeleton/DishView.vue";
import RequestButton from "@/components/RequestButton.vue";

SwiperCore.use([Pagination, Autoplay, Navigation]);

// Import Swiper styles
export default {
	components: {
		Card,
		PushButton,
		Swiper,
		SwiperSlide,
		FoodCard,
		InputNumber,
		Dialog,
		FoodTray,
		DishSkeleton,
		RequestButton
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
			// console.log(food.id, food["id"])
			if (!food) {
				return 0
			}
			let qty = 0
			let id = food.id
			// console.log("food.id" + this.$store.state.cart)
			if (this.$store.state.cart[id] != undefined || this.$store.state.cart[id] != null) {
				qty = this.$store.state.cart[food.id].quantity
			}
			return qty
		},
		getHeadFormat(name){
			// ['goo','ss','sss']
			let split = name.split(" ")
			if(split.length <= 3){
				return split
			}
			let total = Number((split.length/3).toFixed(0))
			total == 1 ? total+=total :''
			console.log("total", total)
			let arr = []
			for(let x = 0;x<split.length;){
				let sp = split.splice(x,total)
				console.log(x,sp)
				arr.push(sp.join(" "))
				// x++
			}
			return arr
		}
	},
	watch: {
		food: {
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
	async created() {
		// this.food = this.$store.state.products[0] ?? {}
		await getProducts()
			.then((data) => {
				this.food = this.$store.state.products[0] ?? {}
			})
	},
	mounted() {
		setTimeout(() => {
			this.$refs.foodImg.classList.add("animate__shakeX")
		}, 5000)
	}
}
</script>

<template>
	<div v-if="!this.$store.state.products[0]">
		<dish-skeleton></dish-skeleton>
	</div>
	<div class="" v-else>
		<img src="/images/curve-mobile.png" class="position-absolute d-md-none curve-mobile" style="" />
		<img src="/images/curve.svg" class="position-absolute d-none d-md-inline"
			style="left:0;top:0;width:49%;max-width:450px" />
		<div class="position-relative w-100 text-center d-md-none curve-image-wrapper" style="">
			<img src="/images/spag.png" class="w-100" style="max-width:200px" />
		</div>
		<div class="row no-gutters _pt-4">
			<div class="col-5 col-lg-4 d-none d-md-flex ">
				<div class="position-relative w-100 px-1 ">
					<img src="/images/spag.png" class="w-100 ms-3" ref="foodImg" style="max-width:450px" />
				</div>
			</div>
			<div class="col-12 col-md-3 col-lg-4 position-relative">
				<div class="ps-4 pe-4 pe-md-0 ps-md-1 p-lg-0 row">
					<div class="col-6 col-md-12">
						<h2 class="fw-bold pt-0 pt-md-5">
							<span class="fw-bold food-text" v-for="(e, i) in getHeadFormat(food.name)" :key="e"
								:class="i == 0 ? 'nexa-light' : 'nexa'">
								{{ e }}<br>
							</span>
						</h2>
					</div>
					<div class="col-6 col-md-12">
						<form @submit.prevent="addOrUpdateCart">
							<div class="mt-md-2 d-flex w-100 align-items-end justify-content-end justify-content-md-start">
								<b class="text-pe-green fs-4 nexa-bold me-2">
									&#x20A6;{{ food.price }}
								</b>
								<div class="border mt-md-2 ms-3 rounded-10 d-flex w-100 justify-content-center justify-content-md-start align-items-center p-1 px-2"
									style="min-width:100px;max-width:150px">
									<input-number v-model="quantity" :min="food.min_order" inputId="horizontal-buttons" showButtons
										buttonLayout="horizontal" :step="food.min_order" decrementButtonclass="" incrementButtonclass=""
										class="d-flex align-items-center" incrementButtonIcon="pi pi-plus"
										decrementButtonIcon="pi pi-minus" />

								</div>
							</div>
							<div class="mt-3 w-100 d-flex justify-content-end justify-content-md-start text-end text-md-start">
								<div style="min-width:100px;max-width:150px" class="w-100 choose">
									<push-button type="submit" class="w-100"  text="choose" v-if="!cartQuantity(food)"></push-button>
									<!-- <small v-esle>
												Added to Cart
											</small> -->
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="d-none d-md-flex col-md-4">
				<div class="p-1 pe-md-3 w-100">
					<food-tray></food-tray>
					<request-button class="mt-3 max-300"></request-button>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-start justify-content-md-center w-100 my-4 my-md-0">
			<div style="max-width:900px" class="w-100 ">
				<swiper :breakpoints="{
					// when window width is >= 640px
					300: {
						slidesPerView:2,
					},
					400: {
						slidesPerView: 3,
					},
					790: {
						slidesPerView: 5,
					},
					// when window width is >= 768px
					968: {
						slidesPerView: 5,
					},
				}" :autoplay="false" :grabCursor="true" :pagination="{ clickable: true, }" :navigation="true" :space-between="1"
					@swiper="onSwiper" @_slideChange="onSlideChange" class="px-2 px-md-5 mx-auto">
					<swiper-slide v-for="food in this.$store.state.products" :key="food">
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
			<request-button class="mt-3"></request-button>
		</div>
		<Dialog v-model:visible="foodTrayMobile" :dismissableMask="true" :closable="false" modal class="p-3" style="">
			<span class="">
				<food-tray trayHeight="200px" style="max-width:400px;min-width:300px;width:100%"
					class="w-100 mx-auto my-auto"></food-tray>
			</span>
		</Dialog>
	</div>
</template>

<style lang="less">
.choose {
	@media(max-width:468px){
		max-width:110px !important;
	}
}
.curve-image-wrapper {
	padding-top: 8%;

	@media(min-width:567px) {
		padding-top: 5%;
	}
}

.curve-mobile {
	left: 0px;
	top: 0px;
	width: 100%;
	max-height: 250px;

	@media(min-width:567px) {
		max-height: 250px !important;
	}

	/* z-index:-0.99999999 !important; */
}

.food-text {
	font-size: 36px;

	@media(max-width:768px) {
		font-size: 28px;
	}

	@media(min-width:966px) {
		font-size: 42px;
	}
}

.p-dialog-header {
	display: none !important;
}

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

.p-dialog-content {
	background-color: transparent !important;
	padding: 0px !important;
}

.img-anim {
	animation: move-img !important;
	animation-duration: 5000;
}

@keyframes move-img {
	from {
		width: 0px;
	}

	to {
		width: 200px;
	}
}</style>
