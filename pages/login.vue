<template>
  <div>
    <NavBar title="Login" />
    <div class="container mx-auto mt-10 w-full">
      <div class="mb-6">
        <div class="text-xl my-1 text-gray-600">Username</div>
        <input
          v-model="username"
          type="text"
          class="w-full h-14 border-2 border-slate-500 rounded-md px-2"
          style="outline: none"
        />
      </div>
      <div class="mb-6">
        <div class="text-xl my-1 text-gray-600">Password</div>
        <input
          v-model="password"
          type="password"
          class="w-full h-14 border-2 border-slate-500 rounded-md px-2"
          style="outline: none"
        />
      </div>
      <div
        v-if="errorText !== ''"
        class="
          w-full
          h-14
          px-5
          bg-red-600
          flex
          items-center
          font-medium
          text-white
          rounded-md
          mb-6
        "
      >
        {{ errorText }}
      </div>
      <button class="w-full greenBtn" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  name: 'LoginPage',
  components: { NavBar },
  validate({ params, query, store }) {
    return !store.state.user
  },
  data: () => ({
    username: 'blackslash',
    password: '123456',
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
          alert('This user is already login or password is wrong')
        }

        // console.log(signin)
        // const user = this.$fire.firestore
        //   .collection('users')
        //   .doc(this.$fire.auth.currentUser.uid)
        // const userGet = await user.get()
        // const userData = userGet.data()
        // if (!userData.is_login) {
        //   await user.update({
        //     is_login: true,
        //   })
        // if (this.$route.query.redirect) {
        //   window.location.href = this.$route.query.redirect
        // } else {
        //   this.$router.push('/')
        // }
        // } else {
        //   this.$fire.auth.signOut()
        //   alert('You are already login')
        // }
      } catch (error) {
        console.log(error)
        this.errorText = 'Wrong username or password'
      }
    },
  },
}
</script>

<style></style>
