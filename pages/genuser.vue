<template>
  <div>
    <div v-for="(user, i) in $store.state.users" :key="i" class="my-4">
      <div>User: {{ user.name }}</div>
      <div>Password: {{ user.password }}</div>
      <div>Score: {{ user.score }}</div>
      <div>
        Is Login:
        <input
          type="checkbox"
          :checked="user.is_login"
          @click="updateLogin($event, user)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenUser',
  data: () => ({
    users: [],
  }),
  async mounted() {
    try {
      await this.$store.dispatch('bindUsersDocument')
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    updateLogin(val, user) {
      this.$fire.firestore.collection('users').doc(user.id).update({
        is_login: val.target.checked,
      })
    },
  },
}
</script>
