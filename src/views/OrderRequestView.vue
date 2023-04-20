<script >
import PushButton from "@/components/PushButton.vue";
import Checkbox from 'primevue/checkbox';
import Widget from "../functions/widget";
import Dropdown from 'primevue/dropdown';
import { createOrder } from "@/services/order"
import { uploadImage } from "@/firebase/product"
import { storeUser } from "@/functions/storage";
import CouponCode from '@/components/CouponCode.vue';

export default {
	components: { PushButton, Checkbox, Dropdown, CouponCode },
	data() {
		return {
			order: {
				type: "special",
			},
			isAgreed: false,
			file: {},
			imageUrl: null
		}
	},
	computed: {
		url() {
			return URL.createObjectURL(this.file)
		}
	},
	methods: {
		async createOrder() {
			storeUser(this.order)
			if (!this.imageUrl) {
				this.$toast.add({ severity: 'danger', summary: 'Error Message', detail: 'Unknown error occured', life: 5000 });
				return
			}
			// url =  this.imageUrl ?? url


			createOrder({ ...this.order, meal_to_prepare: this.imageUrl })
				.then((res) => {
					Widget.dismiss()
					if (res.data.success) {
						this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 5000 });
						this.$router.push('/order/success')
						return;
					}
					this.$toast.add({ severity: 'danger', summary: 'Error', detail: 'unknown error occured', life: 3000 });

				})
		},
		uploadImageAndCreateOrder(image) {
			Widget.openLoading()
			const _this = this
			const upl = uploadImage(this.file)
			upl.on(`success`,
				img => {
					// console.log(img)
				},
				error => { console.error(error.message) },
				() => {
					upl.snapshot.ref.getDownloadURL().then((url) => {
						_this.imageUrl = url
						this.createOrder(url)
					});
				})
		},
		async updateFile() {
			const image = this.$refs.image.files[0]
			// const b = this.uploadImage(image)
			this.file = image
			// console.log("Order Image url",b)
		}
	},
	created() {
		console.log("testing")
		try {
			this.order = { ...this.order, ...JSON.parse(localStorage.getItem("user")) }
		}
		catch (e) {

		}

	}
}
</script>

<template>
	<div class="row -10 p-0 m-0-ps-5" style="max-height:100vh">
		<div class="col-12 col-md-5 d-none d-md-flex align-items-center"  style="max-height:100vh">
			<div class="w-100 h-100 p-4 bg-pe-dark d-flex align-items-center">
				<div class="mx-auto" style="max-width: 400px;">
					<div class="px-5 mx-auto">
						<img src="/images/requestOrder.png" class="w-100" />
					</div>
					<div class="text-center text-white mx-auto pt-2">
						<h1 class="museo-1000">Request for the <br>
							food you desire!</h1>
						<p class=" px-4 pt-2 nexa">
							Can't find your desired dish? Don't despair! Try out some delicious substitute dishes that will
							satisfy your cravings
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-7" >
			<form @submit.prevent="uploadImageAndCreateOrder" style="max-height:100vh" class="w-100 overflow-auto h-100 p-3 ps-md-1 pe-md-3">
				<icon icon="material-symbols:arrow-circle-left-outline-rounded" class="text-pe-dark fs-1"
					@click="this.$router.go(-1)" />
				<div class="">
					<h2 class="museo-1000 text-pe-green mt-3" _style="font-size:35px">
						Special request details
					</h2>
				</div>
				<div class="nexa-light mt-5 mb-3">
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
					<input required v-model="order.phone_number" inputmode="numeric" minlength="11" maxlength="15"
						class="form-control border rounded-10 p-3 my-3" placeholder="Phone Number" />
						
					<Dropdown required v-model="order.location" :options="['Abeokuta', 'Lagos', 'Ibadan']"
						placeholder="Where are you ordering from"
						class="form-control text-start m-0 border rounded-10 nexa">
					</Dropdown>
					<input required v-model="order.full_address" inputmode="numeric" minlength="11"
						class="form-control border rounded-10 p-3 my-3" placeholder="Full Address" />
					<coupon-code class="mb-3" v-model="order.coupon"></coupon-code>
					<textarea required v-model="order.note" placeholder="Write your request here"
						class="form-control border rounded-10 p-3 my-3" style="min-height:100px;"></textarea>
					<div class="d-flex position-relative p-4 justify-content-center border-dotted rounded-10 text-center"
						style="border: 1px dashed lightgray">
						<div v-if="!file.name">
							Drop your image or
							<span class="">
								<label for="image" class="text-pe-green text-underline m-0 p-0"> browse</label>
							</span>
							<br>
							File type: png, jpeg, jpg
						</div>
						<div v-else>
							<img :src="url" class="w-100 -100" style="max-height:200px" />
						</div>
						<input type="file" ref="image" required @change="updateFile" id="image" class="" />
					</div>
				</div>
				<push-button text="order now" type="submit" />
			</form>
		</div>
	</div>
</template>

<style lang="less" scoped>
input[type="file"] {
	position: absolute;
	height: 100%;
	width: 100%;
	opacity: 0;
	top: 0;
	left: 0;
}
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
