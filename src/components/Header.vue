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
					// icon: 'pi pi-refresh',
					to:"/dish"
				},
				{
					label: 'Get a chef',
					// icon: 'pi pi-times',
					to:"/order"
				},
				{
					label: 'Privacy policy',
					// icon: 'pi pi-external-link',
					to: '/terms/policy'
				},
				{
					label: 'Terms and condition',
					// icon: 'pi pi-upload',
					to: '/terms'
				},
				{
					label: 'Security agreement',
					// icon: 'pi pi-upload',
					to: '/terms/security'
				}
			]
		}
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
		}
	}
}

</script>

<template>
	<div class="py-4 py-md-5 pe-5 ps-5">
		<div class="d-flex justify-content-between align-items-center">
			<div class="" style="max-width:100px">
				<img src="/images/logo.png" class="w-100" @click="this.$router.push('/')"/>
			</div>
			<div class="d-flex align-items-center pe-point" @click="toggle" >
				<img src="/images/icon/Vector.png" class="" style="width:25px" />
				<div class="fs-4 ms-1  py-1">
					<div class="my-auto">
						Menu
					</div>
				</div>
			</div>
			<Menu :model="items" ref="menu" class="text-end" :popup="true" />
		</div>
	</div>
</template>

<style scoped></style>

<style lang="less">
	.p-menuitem {
		width:100%;
		text-align: right !important;
	}
	.p-menuitem-content {
		text-align: right !important;
		display:flex;
		justify-content: end;
		font-family:'nexa' !important;
		overflow:hidden;
		// font-size: small;
	}
	.p-menu {
		border-radius:10px !important;
		border: 1px solid var(--pusheat-dark) !important;
		overflow:hidden;
	}		
</style>
