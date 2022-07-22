<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  async mounted() {
    try {
      await this.$store.dispatch('bindQuizDocument')
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
