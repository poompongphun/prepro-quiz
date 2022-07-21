<template>
  <div
    class="w-full h-14 bg-gray-50 flex justify-center items-center text-2xl font-medium text-gray-600"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: 'Navbar',
    },
  },
}
</script>
