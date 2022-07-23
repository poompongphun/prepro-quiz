<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LogoutPage',
  computed: {
    ...mapGetters(['getQuizById']),
  },
  async mounted() {
    try {
      await this.$fire.firestore
        .collection('users')
        .doc(this.$fire.auth.currentUser.uid)
        .update({
          is_login: false,
        })
      await this.$fire.auth.signOut()
      this.$router.push('/login')
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
