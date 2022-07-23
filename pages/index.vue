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
          10
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
        :data="['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']"
        color="success"
      />
      <ExpandAnswer title="Incorrect answers" :data="['1']" color="error" />
      <ExpandAnswer title="Answers left" :data="[]" />
    </v-card>
  </div>
</template>

<script>
import ExpandAnswer from '~/components/ExpandAnswer.vue'
export default {
  name: 'IndexPage',
  data: () => ({
    correct: true,
    incorrect: true,
    aws_left: true,
  }),
  components: { ExpandAnswer },
}
</script>
