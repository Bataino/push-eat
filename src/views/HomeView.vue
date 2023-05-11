<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ChefView from './ChefView.vue';
import MenuView from './MenuView.vue';
import RequestView from './RequestView.vue';
SwiperCore.use([Autoplay, Navigation, Pagination]);

// Import Swiper styles
export default {
	components: {
		Swiper,
		SwiperSlide,
		ChefView,
		MenuView,
		RequestView
	},
	data() {
		return {
		}
	},
	methods: {

	},
	watch: {
	},
	created() {
	},
	mounted() {
	}
}
</script>

<template>
	<div class="w-100">
		<div class="w-100 h-100">
			<swiper style="min-height:85vh" :autoplay="{
				delay: 7000,
			}" :slidesPerView="1" :grabCursor="true" :navigation="false" :pagination="true" :space-between="0" @swiper="onSwiper"
				@_slideChange="onSlideChange" class="">
				<swiper-slide class="">
					<chef-view></chef-view>
				</swiper-slide>
				<swiper-slide>
					<menu-view></menu-view>
				</swiper-slide>
				<swiper-slide>
					<request-view></request-view>
				</swiper-slide>
			</swiper>
		</div>
		<div class="whatsapp position-fixed fixed-bottom border-green border-circle p-2">
			<a href="https://wa.link/gvf6o3">
				<!-- <img class="border-circle float-end m-4 mb-5" width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" > -->
				<img class="border-circle float-end m-4 mb-5" width="80"
					src="images/372108180_WHATSAPP_ICON/gif/372108180_WHATSAPP_ICON_400.gif">
			</a>
		</div>
	</div>
</template>

<style>
swiper-slide {}
</style>
