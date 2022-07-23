<template>
  <v-app dark>
    <v-app-bar
      :collapse="$route.path !== '/'"
      absolute
      :light="$route.path !== '/'"
      :dense="$route.path !== '/'"
      :width="$route.path !== '/' ? 60 : ''"
      :style="$route.path !== '/' ? `opacity: 0.8;` : 'background: none'"
      :height="$route.path !== '/' ? '' : 125"
      elevation="0"
    >
      <v-btn v-if="$route.path !== '/'" light icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <GlitchText text="Collapsing Bar" size="30px" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="background">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import GlitchText from '~/components/GlitchText.vue'
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  components: { GlitchText },
}
</script>
