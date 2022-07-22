<template>
  <div></div>
</template>

<script>
export default {
  name: 'LogoutPage',
  async mounted() {
    try {
      await this.$fire.firestore
        .collection('users')
        .doc(this.$fire.auth.currentUser.uid)
        .update({
          is_login: false,
        })
      await this.$fire.auth.signOut()
      window.location = '/login'
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
