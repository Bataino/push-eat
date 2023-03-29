<script setup>
defineProps({
	msg: {
		type: String,
		required: true
	}
})
</script>

<script>
import Menu from 'primevue/menu';

export default {
	components: {
		Menu
	},
	data() {
		return {
			items: [
				{
					label: 'Food menu',
					to: "/dish"
				},
				{
					label: 'Get a chef',
					to: "/order"
				},
				{
					label: 'Special Request',
					to: "/request"
				},
				{
					label: 'Privacy policy',
					to: '/terms/policy'
				},
				{
					label: 'Terms and condition',
					to: '/terms/refund'
				},
				{
					label: 'Security agreement',
					// icon: 'pi pi-upload',
					to: '/terms/service'
				}
			],
			menuIsOpen: false
		}
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
			// this.menuIsOpen = !this.menuIsOpen
		}
	}
}

</script>

<template>
	<div class="py-3 py-md-4 pe-5 ps-5 _position-absolute w-100">
		<!-- <ProgressBar mode="indeterminate" style="height: .5em" /> -->
		<div class="d-flex justify-content-between align-items-center">
			<button class="py-2 _bg-danger border-0 bg-transparent" style="max-width:100px" @click="this.$router.push('/')">
				<img src="/images/logo.png" class="w-100" @click="this.$router.push('/')">
			</button>
			<button class="border-0 bg-transparent d-flex align-items-center py-2 pe-point" @click="toggle">
				<img src="/images/icon/Vector.png" v-if="!menuIsOpen" class="" style="width:25px" />
				<!-- <icon icon="humbleicons:times" class="fs-2" @click="toggle" v-else style="" /> -->
				<span class="ms-2 nexa">
					Menu
				</span>
			</button>
			<Menu :model="items" ref="menu" class="text-end" :popup="true" />
		</div>
	</div>
</template>

<style scoped></style>

<style lang="less">
.p-menuitem {
	width: 100%;
	text-align: right !important;
}

.p-menuitem-content {
	text-align: right !important;
	display: flex;
	justify-content: end;
	font-family: 'nexa' !important;
	overflow: hidden;
	// font-size: small;
}

.p-menu {
	border-radius: 10px !important;
	border: 1px solid var(--pusheat-dark) !important;
	overflow: hidden;
}
</style>
