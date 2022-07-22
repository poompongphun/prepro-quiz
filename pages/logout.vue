<template>
  <div></div>
</template>

<script>
export default {
  name: 'LogoutPage',
  async mounted() {
    try {
      await this.$fire.auth.signOut()
      this.$router.push('/login')
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
