<script >
import PushButton from "@/components/PushButton.vue";
import Checkbox from 'primevue/checkbox';
import Widget from "../functions/widget";
import Dropdown from 'primevue/dropdown';
import { createOrder } from "@/services/order"


export default {
	components: { PushButton, Checkbox, Dropdown },
	data() {
		return {
			order: {
				type: "chef",
			},
			isAgreed: false,
			file: {}
		}
	},
	computed: {
		url() {
			return URL.createObjectURL(this.file)
		}
	},
	methods: {
		createOrder() {
			Widget.openLoading()
			createOrder(this.order)
				.then((res) => {
					Widget.dismiss()
					if (res.data.success) {
						this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 3000 });
						this.$router.push('/order/success')
						return;
					}
					this.$toast.add({ severity: 'danger', summary: 'Error', detail: 'unknown error occured', life: 3000 });

				})
		},
		updateFile() {
			const image = this.$refs.image.files[0]
			this.file = image
			console.log(image)
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
	<div class="row -10 p-0 m-0-ps-5" style="min-height:100vh">
		<div class="col-12 col-md-5 d-none d-md-flex align-items-center">
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
		<div class="col-12 col-md-6">
			<form @submit.prevent="createOrder" class="w-100 h-100 p-3 ps-md-1 pe-md-3">
				<icon icon="material-symbols:arrow-circle-left-outline-rounded" class="text-pe-dark fs-1"
					@click="this.$router.go(-1)" />
				<div class="">
					<h2 class="museo-1000 text-pe-green mt-3" _style="font-size:35px">
						Special request details
					</h2>
				</div>
				<div class="nexa-light my-5">
					<div class="row p-0">
						<div class="col-12 col-md-6 mb-3 mb-md-0">
							<input required v-model="order.first_name" class="form-control border rounded-10 p-2"
								placeholder="First Name" />
						</div>
						<div class="col-12 col-md-6 my-0">
							<input required v-model="order.last_name" class="form-control border rounded-10 p-2 "
								placeholder="Last Name" />
						</div>
					</div>
					<input required v-model="order.email" type="email" class="form-control border rounded-10 p-2 my-3"
						placeholder="Email address" />
					<input required v-model="order.phone_number" inputmode="numeric" minlength="11" maxlength="11"
						class="form-control border rounded-10 p-2 my-3" placeholder="Phone Number" />
					<textarea required v-model="order.request" placeholder="Write your request here"
						class="form-control border rounded-10 p-2 my-3" style="min-height:100px;"></textarea>
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
