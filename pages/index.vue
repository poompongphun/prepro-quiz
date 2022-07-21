<template>
  <div>
    <Tutorial />
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    logout() {
      this.$fire.auth.signOut()
    },
  },
}
</script>
