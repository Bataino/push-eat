<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import ChefView from './ChefView.vue';
import MenuView from './MenuView.vue';
import RequestView from './RequestView.vue';
SwiperCore.use([Autoplay, Navigation]);

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
		<swiper :autoplay="{
			delay: 5000,
		}" 
		:slidesPerView="1" :grabCursor="true" :navigation="false" :space-between="0" @swiper="onSwiper"
			@_slideChange="onSlideChange" class="">
			<swiper-slide class="w-100">
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
</template>

<style>

</style>
