<template>
  <div
    v-if="dialog"
    class="
      w-screen
      h-screen
      fixed
      top-0
      left-0
      flex
      justify-center
      items-center
      transition-opacity
    "
    :class="{ fadeIn: dialog }"
    style="background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(3px)"
  >
    <div class="w-4/5 text-center p-10 rounded-md bg-white">
      <div class="text-2xl text-gray-600">Are you sure to answer</div>
      <div class="text-3xl font-normal mt-4 mb-6">{{ choice }}</div>
      <div>
        <button
          class="greenBtn mb-1"
          style="background: #dc2626 !important"
          @click="$emit('no', true)"
        >
          No
        </button>
        <button class="greenBtn mb-1" @click="$emit('yes', true)">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    choice: {
      type: String,
      required: false,
      default: '',
    },
    dialog: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {},
  // data: () => ({
  //   dialog: false
  // })
}
</script>

<style>
</style>