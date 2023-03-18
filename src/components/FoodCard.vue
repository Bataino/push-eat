<script>
import Badge from "primevue/Badge"

export default {
  name: "FoodCard",
  props: ["food"],
  components: {
    Badge
  }

}
</script>

<template>
  <div class="p-2 text-center" style="max-width:200px;min-width:170px;font-size: .8rem;">
    <div class="btn py-2" :class="isSelected ? 'btn-pe-green' : ''" style="">
      <div class="museo-900 position-relative p-3" style="p-2">
        <img src="/images/spag.png" class="w-100 p-overlay-badge" v-badge.success="'23'">
        <badge class="position-absolute p-badge-success bg-pe-green" :class="isSelected ? 'bg-white text-pe-green': ''" style="right:0">2</badge>
      </div>
      <div class="fs-5 nexa-bold">
        {{food.name}}
      </div>
    </div>
    <div class="text-pe-green nexa-bold pt-2 fs-5">
      #{{ food.price }}
    </div>
  </div>
</template>
