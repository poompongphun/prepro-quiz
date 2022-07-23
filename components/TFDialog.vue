<template>
  <v-dialog
    v-model="isShowDialog"
    content-class="rounded-xl overflow-hidden"
    width="400"
    persistent
  >
    <v-card class="rounded-xl text-center pa-5">
      <!-- {{ truefalse }} -->
      <div v-if="truefalse" class="success--text">
        <v-icon class="success--text my-2" style="font-size: 40px">
          mdi-check-circle
        </v-icon>
        <div style="font-size: 20px">
          Congrates! You have completed the quiz.
        </div>
        <v-chip
          color="success"
          class="rounded-sm"
          style="
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 0px 0px 0px 10px !important;
          "
        >
          +{{ data.point }} Score
        </v-chip>
      </div>
      <div v-else class="error--text">
        <v-icon class="error--text my-2" style="font-size: 40px">
          mdi-close-circle
        </v-icon>
        <div style="font-size: 20px">Sorry, you have failed the quiz.</div>
        <v-chip
          color="error"
          class="rounded-sm"
          style="
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 0px 0px 0px 10px !important;
          "
        >
          {{ data.del_point }} Score
        </v-chip>
      </div>
      <div class="mt-5">
        {{ time }} seconds before redirect
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isShowDialog: false,
    truefalse: false,
    time: 0,
  }),
  watch: {
    time: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.time--
          }, 1000)
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  methods: {
    open(bool) {
      this.isShowDialog = true
      this.truefalse = bool
      this.time = 5
    },
    close() {
      this.isShowDialog = false
    },
  },
}
</script>