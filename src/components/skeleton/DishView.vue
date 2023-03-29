<script>
import Skeleton from 'primevue/skeleton';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import FoodTraySkeleton from "@/components/skeleton/FoodTray.vue"

SwiperCore.use([Pagination, Autoplay, Navigation]);
export default {
    components: {
        Skeleton,
        Swiper,
        SwiperSlide,
        FoodTraySkeleton
    }
}
</script>

<template>
    <div v-if="true != 1">

    </div>
    <div class="" v-else>
        <img src="/images/curve-mobile.png" class="opacity-25 position-absolute d-md-none curve-mobile" style="" />
        <img src="/images/curve.svg" class="opacity-25 position-absolute d-none d-md-inline"
            style="left:0;top:0;width:49%;max-width:500px" />
        <div class="position-relative w-100 d-flex justify-content-center text-center d-md-none curve-image-wrapper"
            style="">
            <skeleton shape="circle" class="w-100 h-100" style="max-width:250px;min-height:250px" />
        </div>
        <div class="row no-gutters _pt-4">
            <div class="col-5 d-none d-md-flex ">
                <div class="position-relative w-100 px-1 ">
                    <skeleton shape="circle" class="w-100 h-100 ms-4" ref="foodImg" style="max-width:350px;min-height:350px" />
                </div>
            </div>
            <div class="col-12 col-md-3 position-relative">
                <div class="ps-4 mt-4 mt-md-3 pe-4 pe-md-0 ps-md-1 p-lg-0 row">
                    <div class="col-6 col-md-12">
                        <skeleton class="fw-bold pt-4 rounded-5">
                        </skeleton>
                </div>
                <div class="col-6 col-md-12">
                        <form class="">
                            <div
                                class="mt-md-2 d-flex w-100 align-items-center justify-content-end justify-content-md-start">
                                <skeleton class="text-pe-green fs-4 nexa-bold me-2">
                                </skeleton>
                                <skeleton
                                    class="mt-md-2 rounded-5 d-flex w-100 justify-content-center justify-content-md-start align-items-center p-1 px-2"
                                    style="min-width:100px;max-width:150px;">
                                </skeleton>
                            </div>
                            <div class="mt-2 mb-2 text-end text-md-start">
                                <skeleton class="rounded-10" style="min-height:30px"></skeleton>
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
                    <food-tray-skeleton></food-tray-skeleton>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-start justify-content-md-center px-3 px-md-5 mb-4 my-4 mt-md-5">
            <div style="max-width:800px" class="w-100 mx-auto">
                <swiper :breakpoints="{
                    // when window width is >= 640px
                    300: {
                        slidesPerView: 2,
                    },
                    567: {
                        slidesPerView: 3,
                    },
                    790: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    968: {
                        slidesPerView: 5,
                    },
                }" :autoplay="false" :grabCursor="true" :pagination="{ clickable: true, }" :navigation="true"
                    :space-between="3" @swiper="onSwiper" class="px-5">
                    <swiper-slide v-for="food in [1, 2, 3, 4, 5, 6,7,8]" :key="food">
                        <skeleton borderRadius="20px" style="min-height:170px;max-width:150px" class="w-100"></skeleton>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="p-5 d-md-none">
            <skeleton class="p-4 rounded-5" />
        </div>
    </div>
</template>

<style lang="less">
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
}
</style>
