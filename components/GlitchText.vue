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
      :style="`transform: translateX(3px); color: #50accb; font-size: ${size}; animation-delay: 0.5s;`"
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
  animation: shakein 1s infinite;
}
@keyframes shakein {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
