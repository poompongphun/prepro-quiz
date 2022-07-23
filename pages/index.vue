<template>
  <div class="px-5" style="margin-top: 125px">
    <v-card
      class="mx-auto rounded-xl d-flex justify-center align-center"
      elevation="0"
      style="position: relative; background: none"
      width="100%"
      max-width="500"
      height="300"
    >
      <div class="text-center">
        <div class="font-weight-bold" style="font-size: 20px">Score</div>
        <h1 class="font-weight-black success--text" style="font-size: 60px">
          {{ $store.state.user.score }}
        </h1>
      </div>
    </v-card>
    <v-card
      class="mx-auto rounded-xl pa-3"
      elevation="0"
      style="position: relative; background: none"
      width="100%"
      max-width="500"
    >
      <ExpandAnswer
        title="Corrected answers"
        :data="
          $store.state.user.correct_aws.map((element) => {
            const quiz = getQuizById(element)
            return quiz
          })
        "
        color="success"
      />
      <ExpandAnswer
        title="Incorrect answers"
        :data="
          $store.state.user.wrong_aws.map((element) => {
            const quiz = getQuizById(element)
            return quiz
          })
        "
        color="error"
      />
      <ExpandAnswer title="Answers left" :data="$store.getters.awsLeft" />
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExpandAnswer from '~/components/ExpandAnswer.vue'
export default {
  name: 'IndexPage',
  layout: 'auth',
  components: { ExpandAnswer },
  validate({ params, query, store, redirect, $fire }) {
    if (!$fire.auth.currentUser) {
      redirect('/login')
    }
    return true
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['getQuizById']),
  },
}
</script>
