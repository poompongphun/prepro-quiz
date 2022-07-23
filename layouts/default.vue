<template>
  <v-app>
    <v-main class="background">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'BlankLayout',
  async mounted() {
    try {
      await this.$store.dispatch('bindQuizDocument')
    } catch (e) {
      console.error(e)
    }
  },
}
</script>