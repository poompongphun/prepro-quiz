<template>
  <div class="w-full mb-2">
    <button class="greenBtn" style="max-width: 100%" @click="dialog = true">
      {{ choice.value }}
    </button>
    <ConfirmModal
      :choice="choice.value"
      :dialog="dialog"
      @yes="choiceClick(choice)"
      @no="dialog = false"
    />
    {{ $store.state.user.uid }}
  </div>
</template>

<script>
export default {
  name: 'ChoiceButton',
  props: {
    choice: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    async choiceClick(choice) {
      await this.$fire.firestore
        .collection('quiz')
        .doc(this.$route.query.id)
        .update({
          submited_user: [
            ...this.$store.getters.getQuizById(this.$route.query.id)
              .submited_user,
            this.$store.state.user.uid,
          ],
        })
      const me = this.$fire.firestore
        .collection('users')
        .doc(this.$store.state.user.uid)
      const meGet = await me.get()
      const meData = await meGet.data()
      console.log('medata', meGet)
      if (choice.status) {
        await me.update({
          correct_aws: [
            ...meData.correct_aws,
            this.$store.getters.getQuizById(this.$route.query.id).id,
          ],
          score:
            meData.score +
            this.$store.getters.getQuizById(this.$route.query.id).point,
        })
        this.$router.push('/')
      } else {
        await me.update({
          wrong_aws: [
            ...meData.wrong_aws,
            this.$store.getters.getQuizById(this.$route.query.id).id,
          ],
          score:
            meData.score +
            this.$store.getters.getQuizById(this.$route.query.id).point,
        })
        this.$router.push('/')
      }
    },
  },
}
</script>
