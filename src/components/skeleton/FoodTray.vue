<script>
import Card from "primevue/card"
import Skeleton from "primevue/skeleton"

export default {
	name: "FoodTray",
	props: ["trayHeight"],
	components: {
		Card,
		Skeleton
	},
	methods: {
		
	}

}
</script>

<template>
	<Card style="min-width:100%;border-radius: 20px;height:300px" class="white position-relative">
		<template #title> 
			<skeleton class="w-75 py-3" />
		</template>
		<!-- <template ₦subtitle> Card subtitle </template> -->
		<template #content>
			<div class="" style="min-height:120px">
				<div class="d-flex justify-content-between mb-3 align-items-center"
					v-for="cartFood in [1,2,3]" :key="cartFood">
					<skeleton class="p-0">
					</skeleton>
				</div>
			</div>
		</template>
		<template #footer>
			<div class="w-100 text-center position-abolute bottom">
				<div class="w-100 d-flex justify-content-between">
					<skeleton>
					</skeleton>
					<skeleton class="">
					</skeleton>
				</div>
				<skeleton class="p-3 w-100 rounded-5 p-2 my-1 nexa">
				</skeleton>
			</div>
		</template>
	</Card>
</template>
