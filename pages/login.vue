<template>
  <div class="fill-height d-flex justify-center align-center px-5">
    <v-card
      class="text-center"
      elevation="0"
      style="background: none"
      width="100%"
      max-width="500"
    >
      <GlitchText class="mb-8" text="LOGIN" size="40px" />
      <v-text-field
        name="username"
        label="Username"
        color="white"
        filled
        rounded
      ></v-text-field>
      <v-text-field
        name="username"
        label="Password"
        color="white"
        filled
        rounded
      ></v-text-field>
      <v-btn
        class="font-weight-black background--text"
        color="white"
        light
        rounded
        large
        block
        style="opacity: 0.9"
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
  layout: 'blank',
  components: { GlitchText },
}
</script>