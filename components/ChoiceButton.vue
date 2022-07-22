<template>
  <div class="w-full mb-2">
    <button
      class="greenBtn"
      style="max-width: 100%"
      @click="choiceClick(choice)"
    >
      {{ choice.value }}
    </button>
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
      if (choice.status) {
        alert('True')
      } else {
        alert('False')
      }
    },
  },
}
</script>