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
import OverlayPanel from 'primevue/overlaypanel';

export default {
	components: {
		Menu,
		OverlayPanel
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
			socials: [
				{
					name: "Instagram",
					icon: "akar-icons:instagram-fill",
					link: "https://www.instagram.com/rentout.app"
				},
				// {
				//     name: "Facebook",
				//     icon: "dashicons:facebook-alt",
				//     link: "#"
				// },
				{
					name: "LinkedIn",
					icon: "akar-icons:linkedin-box-fill",
					link: "https://www.linkedin.com/company/rentoutapp"
				},
				{
					name: "Twitter",
					icon: "akar-icons:twitter-fill",
					link: "https://twitter.com/rentoutng"
				},
			],
			menuIsOpen: false
		}
	},
	methods: {
		toggle(event) {
			this.$refs.menu.toggle(event);
			console.log(this.$refs.menu.$data)
			console.log(this.$refs.menu)
			// this.menuIsOpen = !this.menuIsOpen
		},
		getData() {
			if (this.$refs.menu) {
				return !this.$refs.menu.$data.overlayVisible
			}
			return false
		}
	}
}

</script>

<template>
	<div class="py-3 py-md-4 px-3 px-md-5 _position-absolute w-100">
		<!-- <ProgressBar mode="indeterminate" style="height: .5em" /> -->
		<div class="d-flex justify-content-between align-items-center">
			<button class="py-2 _bg-danger border-0 bg-transparent img-width" @click="this.$router.push('/')">
				<img src="/images/logo.png" class="w-100" @click="this.$router.push('/')">
			</button>
			<button class="border-0 bg-transparent d-flex align-items-center py-2 pe-point" @click="toggle">
				<img src="/images/icon/Vector.png" v-if="!menuIsOpen" class="" style="width:25px" />
				<!-- <icon icon="humbleicons:times" class="fs-2" @click="toggle" v-else style="" /> -->
				<span class="ms-2 fs-5 nexa">
					Menu
				</span>
			</button>
			<OverlayPanel ref="menu" class="text-end rounded-10 shadow px-2 pb-3" :popup="true" _style="min-width:300px">
				<Menu :model="items" class="text-end  border-0 w-100 pb-3" />
				<div class="text-start">
					<div class="d-flex p-2 text-rt-orange justify-content-end">
						<a v-for="social in socials" :key="social.name" :href="social.link">
							<icon :icon="social.icon" class=" text-rt-orange  text-pe-green icon mx-1 " width="20" />
						</a>
					</div>
					<b class="text-pe-dark small museo-500">
						<a href="mailto:hey@justpusheat.com" class="text-pe-dark">
							hey@justpusheat.com<br>
						</a>
					</b>
					<span class="text-gray small museo-500">
						<b>Copyright 2023</b><br> JustPushEat
					</span>
				</div>
			</OverlayPanel>
			<Teleport to=".menuuu">
				<div class="">
					<p>Hello from the modal!</p>
					<h1>START DEY</h1>
				</div>
			</Teleport>
		</div>
	</div>
</template>

<style scoped></style>

<style lang="less">
.img-width {
	max-width: 130px;

	@media(max-width:768px) {
		max-width: 100px
	}
}

.p-menuitem {
	width: 100%;
	text-align: right !important;
	font-size: 12px;
	border-bottom: 1px solid lightgray;
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
	// border: 1px solid var(--pusheat-dark) !important;
	overflow: hidden;
}
</style>
