<script>
import Card from "primevue/card"
import PushButton from '@/components/PushButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import FoodCard from '@/components/FoodCard.vue';
import InputNumber from "primevue/inputnumber"
import Badge from "primevue/Badge"

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
		InputNumber
	},
	data(){
		return {
			foods:[
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
				{name:"Vegan Spage", price:6000, img:""},
			]
		}
	}
}
</script>

<template>
	<div class="position-relative_">
		<img src="/images/curve-mobile.svg" class="position-absolute d-md-none"
			style="left:0;top:0;width:100%;max-height:400px" />
		<img src="/images/curve.svg" class="position-absolute d-none d-md-inline"
			style="left:0;top:0;width:49%;max-width:500px" />
		<div class="position-relative w-100 text-center d-md-none" style="padding-top:20%">
			<img src="/images/spag.png" class="w-100" style="max-width:300px" />
		</div>
		<div class="row no-gutters _pt-4">
			<div class="col-5 d-none d-md-flex ">
				<div class="position-relative w-100 px-1">
					<img src="/images/spag.png" class="w-100" style="max-width:500px" />
				</div>
			</div>
			<div class="col-12 col-md-3 position-relative">
				<div class="p-4 p-md-0 row">
					<div class="col-6 col-md-12">
						<h2 class="fw-bold pt-4">
							<b class="fw-bold nexa">
								Vegan SingaPore Noodles
							</b>
						</h2>
					</div>
				<div class="col-6 col-md-12">
					<div class="mt-md-3 d-flex align-items-center justify-content-end">
						<b class="text-pe-green fs-4 nexa-bold me-2">
							#2000
						</b>
						<div class="border mt-md-2 rounded-10 d-flex justify-content-center align-items-center p-1 px-2"
							style="max-width:150px">
							<input-number model="" inputId="horizontal-buttons" showButtons buttonLayout="horizontal"
								:step="1" decrementButtonclass="" incrementButtonclass="" class="d-flex align-items-center"
								incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />

						</div>
					</div>
					<div class="mt-3 my-md-5 text-end">
						<push-button text="choose"></push-button>
					</div>
				</div>
				</div>
			</div>
			<div class="d-none d-md-flex col-md-4">
				<div class="p-1 w-100">
					<Card style="min-width:100%;border-radius: 20px;" class="bg-pe-dark text-white position-relative">
						<template #title> Food tray </template>
						<!-- <template #subtitle> Card subtitle </template> -->
						<template #content>
							<div class="" style="min-height:100px">
								<div class="d-flex justify-content-between">
									<div class="">
										Vegan Spaghetti <badge>2</badge>
									</div>
									<span class="nexa-bold text-pe-green">
										#4000
									</span>
								</div>
							</div>
						</template>
						<template #footer>
							<div class="w-100 text-center position-abolute bottom">
								<div class="w-100 d-flex justify-content-between">
									<span>
										Total
									</span>
									<span class="fw-bold text-pe-green nexa">
										#3000
									</span>
								</div>
								<button class="btn btn-pe-green text-white w-100 rounded-10 p-2 my-1 nexa">
									<div class="fs-6 nexa">
										Order now
									</div>
								</button>
							</div>
						</template>
					</Card>
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
				}" :autoplay="false" :grabCursor="true" :pagination="{
	clickable: true,
}" :navigation="true" :space-between="3" @swiper="onSwiper" @_slideChange="onSlideChange" class="px-5">
					<swiper-slide v-for="food in foods" :key="food">
						<food-card :food="food"></food-card>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="m-5 d-md-none" >
			<button class="btn rounded-10 bg-pe-dark fs-6 w-100 p-3 text-white d-flex justify-content-between align-items-cener">
				<span class="fs-5 nexa">
					View food tray
				</span>
				<icon icon="material-symbols:arrow-circle-right-outline-rounded" class="text-pe-green fs-1" />
			</button>
		</div>
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
</style>
