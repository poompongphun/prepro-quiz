<template>
  <div class="fill-height d-flex justify-center align-center px-5">
    <v-card elevation="0" style="background: none" width="100%" max-width="500">
      <GlitchText class="mb-8 text-center" text="LOGIN" size="40px" />
      <v-text-field
        v-model="username"
        class="mb-5"
        name="username"
        label="Username"
        color="white"
        filled
        hide-details
        rounded
      ></v-text-field>
      <v-text-field
        v-model="password"
        class="mb-5"
        type="password"
        name="password"
        label="Password"
        color="white"
        filled
        hide-details
        rounded
      ></v-text-field>
      <v-expand-transition>
        <v-alert v-if="errorText !== ''" dense type="error" rounded="xl">
          {{ errorText }}
        </v-alert>
      </v-expand-transition>
      <v-btn
        class="font-weight-black background--text"
        color="white"
        light
        rounded
        large
        block
        style="opacity: 0.9"
        @click="login"
      >
        Login
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import GlitchText from '../components/GlitchText.vue'
export default {
  name: 'LoginPage',
  components: { GlitchText },
  layout: 'blank',
  validate({ params, query, store, $fire }) {
    return !$fire.auth.currentUser
  },
  data: () => ({
    username: '',
    password: '',
    errorText: '',
  }),
  methods: {
    async login() {
      try {
        this.errorText = ''
        const user = this.$fire.firestore.collection('users')
        const userGet = await user.where('name', '==', this.username).get()
        if (userGet.docs[0].data().is_login === false) {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.username + '@it.kmitl.ac.th',
            this.password
          )
          await user.doc(this.$fire.auth.currentUser.uid).update({
            is_login: true,
          })
          if (this.$route.query.redirect) {
            window.location.href = this.$route.query.redirect
          } else {
            this.$router.push('/')
          }
        } else {
          this.errorText = 'Wrong username or password'
        }
      } catch (error) {
        this.errorText = 'Wrong username or password'
      }
    },
  },
}
</script>
