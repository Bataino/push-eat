<script>
export default {
  name: "PushButton",
  props: ["text"]

}
</script>

<template>
  <span>
  <button class="btn btn-pe-green position-relative">
    <img src="../assets/images/button-curve.svg" class="text-danger position-absolute" style="left:5%;top:15%" width="23">
    <div class="museo-900 fs-6 p-2 px-5" style="">
      {{ text }}
    </div>
  </button>
</span>
</template>
