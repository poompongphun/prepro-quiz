<template>
  <div class="mb-4">
    <v-card
      class="d-flex align-center rounded-xl py-1 my-3 px-3"
      style="font-size: 20px; background: rgba(255, 255, 255, 0.2)"
      elevation="0"
      @click="expand = !expand"
    >
      <v-icon v-if="expand" left>mdi-chevron-up</v-icon>
      <v-icon v-else left>mdi-chevron-down</v-icon>
      {{ title }}
      <v-spacer></v-spacer>
      <v-chip class="background" small>{{ data.length }}</v-chip>
    </v-card>
    <v-expand-transition>
      <div
        v-if="expand"
        class="d-flex justify-center align-center flex-wrap"
        style="gap: 10px"
      >
        <v-btn
          v-for="(item, index) in data"
          :key="index"
          :color="color"
          class="rounded-lg"
          fab
          small
          depressed
        >
          {{ item ? item.no : '' }}
        </v-btn>
        <div v-if="data.length === 0"><v-chip outlined>Nothing</v-chip></div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Expand',
    },
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    color: {
      type: String,
      required: false,
      default: 'grey',
    },
  },
  data: () => ({
    expand: false,
  }),
  watch: {
    data(val) {
      if (val.length > 0) {
        this.expand = true
      }
    },
  },
  mounted() {
    if (this.data.length > 0) {
      this.expand = true
    }
  },
}
</script>

<style></style>
