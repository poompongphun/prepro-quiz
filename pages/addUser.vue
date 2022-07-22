<template>
  <div>
    <input v-model="username" type="text" />
    <input v-model="password" type="text" />
    <button @click="submit">submit</button>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      const user = await this.$fire.auth.createUserWithEmailAndPassword(
        this.username + '@it.kmitl.ac.th',
        this.password
      )
      await this.$fire.firestore.collection('users').doc(user.user.uid).set({
        name: this.username,
        correct_aws: [],
        wrong_aws: [],
        score: 0,
        is_login: false,
      })

      this.username = ''
      this.password = ''
    },
  },
}
</script>
