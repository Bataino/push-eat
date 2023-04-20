<script>
import ProgressSpinner from 'primevue/progressspinner';
import { confirmCoupons } from '@/firebase/product';

export default {
  name: "CouponCode",
  props: ["class", "modelValue", "type"],
  components: {
    ProgressSpinner,
  },
  data() {
    return {
      code: "",
      loading: false,
      coupon: {}
    }
  },
  computed: {
    percent() {
      return this.type == "meal" ?
        this.coupon.meal_percent :
        this.coupon.chef_percent
    }
  },
  methods: {
    confirmCoupon(code) {
      this.loading = true
      confirmCoupons(code)
        .then((data) => {
          console.log("cpon", data.exists)
          console.log("cpon2", data.data())
          this.coupon = data.data() ?? {}
          this.loading = false
        })
    }
  },
  watch: {
    code(code) {
      if (code.length <= 5) {
        return;
      }
      this.confirmCoupon(code)
    },
    coupon(coupon) {
      if (this.type == "meal" && coupon.meal_percent) {
        this.$emit('update:modelValue', this.code)

      }
      if (coupon.chef_percent) {
        this.$emit('update:modelValue', this.code)
      }
    }
  }

}
</script>

<template>
  <div :class="class">
    <div class="d-flex justify-content-between align-items-center px-2 border input rounded-10  m-0 p-0">
      <input v-model="code" class="w-100 py-3" type="text" placeholder="Enter Coupon Code" />
      <progress-spinner style="width: 30px; height: 30px" strokeWidth="5" fill="var(--surface-ground)"
        animationDuration="3s" aria-label="Custom ProgressSpinner" v-if="code && loading"></progress-spinner>
    </div>
    <small class="text-pe-green" v-if="!loading && percent && code">
      Coupon existis, {{ percent }}% confirmed.
      <span v-if="type == 'meal'">
        You will pay
        <b class="museo-500">
          &#x20A6;{{ (Number(this.$store.getters.cartSum)) - Number(percent) / 100 * Number(this.$store.getters.cartSum) }} 
        </b> now
      </span>
    </small>
    <small class="text-danger" v-if="!loading && !percent && code">Coupon does not exists</small>
  </div>
</template>
<style scoped lang="less">
input {
  all: unset;
}

small {
  font-size: 11px;
}

.fs-md-6 {
  @media(min-width:768px) {
    font-size: 16px
  }
}
</style>