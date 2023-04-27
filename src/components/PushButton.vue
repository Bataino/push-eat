<script>
export default {
  name: "PushButton",
  props: ["text", "type", "disabled", "class"]

}
</script>

<template>
  <span>
    <button :disabled="disabled" :class="class" class="btn btn-pe-green position-relative w-100 text-center" :type="type ?? 'button'"
      style="">
      <img src="/images/button-curve.svg" class="text-danger position-absolute" style="left:5%;top:15%" width="20">
      <div class="museo-900 fs-md-6 p-2 px-md-3 w-100 text-center" style="">
        {{ text }}
      </div>
    </button>
  </span>
</template>
<style scoped lang="less">
button {
  max-width: 160px;

  @media(min-width:768px) {
    max-width: 180px
  }
}

.fs-md-6 {
  @media(min-width:768px) {
    font-size: 16px
  }
}</style>