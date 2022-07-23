<template>
  <div>
    <span
      class="text"
      :style="`transform: translateX(-3px); color: #fe7210; font-size: ${size};`"
    >
      {{ text }}
    </span>
    <span
      class="text"
      :style="`transform: translateX(3px); color: #50accb; font-size: ${size};`"
    >
      {{ text }}
    </span>
    <span class="text" :style="`font-size: ${size}; position: relative`">{{
      text
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: false,
      default: '50px',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
.text {
  font-weight: 900;
  position: absolute;
  font-style: italic;
  letter-spacing: 8px;
}
</style>
