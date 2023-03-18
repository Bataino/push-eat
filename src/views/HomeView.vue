<script>
import PushButton from '@/components/PushButton.vue';

export default{
	name:"Home",
	components: {
		PushButton
	}
}
</script>

<template>
		<div class="row -10 p-0 ">
			<div class="col-12 col-md-6">
				<div class="w-100 h-100 px-md-5">
					<div class="p-5 pb-0 p-md-0">
						<h1 class="museo-1000 text-black" style="font-size:40px">
							<span class="text-pe-green"> Order a cook</span>, the way you order for Uber, Bolt
						</h1>
					</div>
					<div class="w-100 d-md-none">
					<img src="/images/illustration1.svg" class="w-100" />
				</div>
					<div class="px-5 px-md-0">
					<div class="nexa-light my-5">
						Cooking can be a demanding task and can
						add to the stress of your daily life. But life can
						be easier! you can now order a professional
						chef to your home for as low as  3,000
					</div>
					<push-button text="order now" />
				</div>
				</div>
			</div>
			<div class="col-12 col-md-6 d-none d-md-flex">
				<div class="w-100">
					<img src="/images/illustration1.svg" class="w-100" />
				</div>
			</div>
		</div>
</template>
