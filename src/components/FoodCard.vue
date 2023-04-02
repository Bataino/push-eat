<script>
import Badge from "primevue/badge"

export default {
  name: "FoodCard",
  props: ["food","selected", "quantity"],
  components: {
    Badge
  }

}
</script>

<template>
  <div class="p-2 text-center" style="max-width:180px;min-width:160px;font-size: .8rem;">
    <div class="btn _rounded-10 py-2" :class="selected ? 'btn-pe-green' : ''" style="height: 230px;">
      <div class="museo-900 position-relative p-2 px-1 px-md-2" style="p-2">
        <img :src="food.image" class="w-100">
        <badge v-if="quantity" class="position-absolute p-badge-success museo-500" :class="selected ? 'bg-white text-pe-green': 'bg-pe-green'" style="right:0">
          {{ quantity }} 
        </badge>
      </div>
      <div class="fs-6 nexa-bold" :class="selected ? 'text-white': 'text-dark'">
        {{food.name}}
      </div>
    </div>
    <div class="text-pe-green nexa-bold pt-3 fs-5" data-test="price">
      ₦{{ food.price }}
    </div>
  </div>
</template>
