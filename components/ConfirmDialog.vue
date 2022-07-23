<template>
  <v-dialog
    v-model="isShowDialog"
    content-class="rounded-xl overflow-hidden"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }"
    @keydown.esc="cancel"
  >
    <v-card class="rounded-xl text-center">
      <h2 class="pt-3 pb-2 my-3">{{ title }}</h2>
      <h3 class="mb-3 success--text" v-show="!!message">"{{ message }}"</h3>
      <v-card-actions>
        <v-row no-gutters>
          <v-col cols="6" class="pa-1">
            <v-btn
              ref="btnOk"
              class="rounded-lg"
              :color="options.color"
              block
              @click.native="agree"
            >
              Yes
            </v-btn>
          </v-col>
          <v-col cols="6" class="pa-1">
            <v-btn
              ref="cancelDialog"
              class="rounded-lg"
              color="grey"
              block
              @click.native="cancel"
            >
              No
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    isShowDialog: false,
    resolve: null,
    reject: null,
    message: null,
    title: null,
    options: {
      color: 'primary',
      width: 290,
      zIndex: 200,
    },
  }),
  methods: {
    open(title, message, options) {
      this.isShowDialog = true
      this.$nextTick(() => this.$refs.cancelDialog.$el.focus())
      this.title = title
      this.message = message
      this.options = Object.assign(this.options, options)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    agree() {
      this.isShowDialog = false
      this.resolve(true)
      this.$emit('onOk')
    },
    cancel() {
      this.isShowDialog = false
      this.resolve(false)
      this.$emit('onCancel')
    },
  },
}
</script>