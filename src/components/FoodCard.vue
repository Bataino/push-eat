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
  <div class="p-2 text-center" style="max-width:200px;min-width:170px;font-size: .8rem;">
    <div class="btn py-2" :class="selected ? 'btn-pe-green' : ''" style="">
      <div class="museo-900 position-relative p-3" style="p-2">
        <img src="/images/spag.png" class=" w-100 p-overlay-badge" v-badge.success="'23'">
        <badge v-if="quantity" class="position-absolute p-badge-success museo-500" :class="selected ? 'bg-white text-pe-green': 'bg-pe-green'" style="right:0">
          {{ quantity }} 
        </badge>
      </div>
      <div class="fs-5 nexa-bold" :class="selected ? 'text-white': 'text-dark'">
        {{food.name}}
      </div>
    </div>
    <div class="text-pe-green nexa-bold pt-2 fs-5" data-test="price">
      #{{ food.price }}
    </div>
  </div>
</template>
