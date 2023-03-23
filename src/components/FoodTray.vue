<script>
import Card from "primevue/card"
import { deletefromCart } from "@/services/cart"

export default {
	name: "FoodTray",
	props: ["trayHeight"],
	components: {
		Card,
	},
	methods: {
		deletefromCart(id){
			deletefromCart(id)
		},
	}

}
</script>

<template>
	<Card style="min-width:100%;border-radius: 20px;" :style="`height:${height}`" class="bg-pe-dark text-white position-relative">
		<template #title> Food tray </template>
		<!-- <template #subtitle> Card subtitle </template> -->
		<template #content>
			<div class="" :style="`min-height:${ trayHeight ?? '100px'}`">
				<div class="d-flex justify-content-between mb-3 align-items-center"
					v-for="cartFood in this.$store.state.cart" :key="cartFood">
					<div class="p-0">
						<icon icon="material-symbols:cancel-outline-rounded" class="fs-5 text-l-gray"
							@click="deletefromCart(cartFood.id)"></icon>
						{{ cartFood.name }}
					</div>
					<span class="nexa-bold text-pe-green">
						#{{ Number(cartFood.price) * Number(cartFood.quantity) }}
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
				<button class="btn btn-pe-green text-white w-100 rounded-10 p-2 my-1 nexa" :disabled="!Object.entries(this.$store.state.cart)[0]" @click="this.$router.push('/checkout')">
					<div class="fs-6 nexa">
						Order now
					</div>
				</button>
			</div>
		</template>
	</Card>
</template>
