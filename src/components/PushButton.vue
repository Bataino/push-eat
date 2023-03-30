<script>
export default {
  name: "PushButton",
  props: ["text", "type"]

}
</script>

<template>
  <span>
  <button class="btn btn-pe-green position-relative w-100 text-center" :type="type ?? 'button'" style="max-width: 170px;">
    <img src="/images/button-curve.svg" class="text-danger position-absolute" style="left:5%;top:15%" width="23">
    <div class="museo-900 fs-6 p-2 px-2 w-100 text-center" style="">
      {{ text }}
    </div>
  </button>
</span>
</template>
