<script>
import Card from "primevue/card"
import Checkbox from "primevue/checkbox"

export default {
	name: "CheckOut",
	props: [""],
	components: {
		Checkbox,
		Card
	},
	data() {
		return {
			isAgreed: true
		}
	},
	methods: {
	}

}
</script>

<template>
	<div>
		<Card style="min-width:100%;border-radius: 20px;" :style="`height:${height}`"
			class="bg-pe-dark text-white position-relative">
			<template #title>
				<span class="museo-1000" style="font-size: x-large;">
					Almost there
				</span>
			</template>
			<!-- <template #subtitle> Card subtitle </template> -->
			<template #content>
				<div class="px-2 text-gray" :style="`min-height:${trayHeight ?? '200px'}`">
					<div class="">
						<label for="full_name" class="text-sm">
							Full name
						</label>
						<input type="text" id="full_name" class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="">
						<label for="phone">
							Phone Number
						</label>
						<input type="text" id="phone" class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="">
						<label for="full_address">
							Full Address
						</label>
						<input type="text" id="full_address" class="px-2 border-0 border-bottom form-control">
					</div>
					<div class="d-flex align-items-start field-checkbox">
						<Checkbox inputId="ingredient1" v-model="isAgreed" :binary="true" name="pizza" />
						<label for="ingredient1" class="ms-2"> I agree to the
							security agreement, terms and conditions.
						</label>
					</div>
				</div>
			</template>

		</Card>
		<div class="py-3 text-center px-4 px-md-0">
			<button class="btn btn-pe-green w-100 rounded-10 p-2 my-1 nexa"
				:disabled="!Object.entries(this.$store.state.cart)[0]" @click="this.$router.push('/checkout/success')">
				<div class="fs-6 nexa">
					Order now
				</div>
			</button>
		</div>
	</div>
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
input::after {
	background: transparent !important;
	border-radius: 0px;
	border-color: gray !important;
	margin-top: 0px;
	margin-bottom: 20px;
	color: gray;
	font-size: 12px;
}

label {
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

.text-sm {}</style> 