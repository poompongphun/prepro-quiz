<template>
  <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
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
    submit() {
      this.$fire.auth.createUserWithEmailAndPassword(
        this.username + '@it.kmitl.ac.th',
        this.password
      )
      this.$fire.firestore
        .collection('users')
        .add({
          name: this.username,
          correct_aws: [],
          wrong_aws: [],
          score: 0,
          is_login: false,
        })
        .then(() => {
          this.username = ''
        })
    },
  },
}
</script>