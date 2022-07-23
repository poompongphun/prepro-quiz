<template>
  <div>
    <!-- {{ window.location }} -->
    <v-card
      v-for="(quiz, i) in $store.state.quiz"
      :key="i"
      class="card relative mx-auto my-4 rounded-xl white black--text"
      width="100%"
      max-width="470"
    >
      <div class="">
        <div>{{ quiz.no }}. Link to Quiz:</div>
        <nuxt-link class="text-blue-500" :to="`/quiz?id=${quiz.id}`">
          {{ url + '/quiz?id=' + quiz.id }}
        </nuxt-link>
        <div class="flex absolute bottom-0 my-2">
          <v-chip color="success" class="chip bg-green-600 mr-1"
            >If True +{{ quiz.point }}</v-chip
          >
          <v-chip color="error" class="chip bg-red-500 mr-1"
            >If false {{ quiz.del_point }}</v-chip
          >
        </div>
      </div>
      <div style="width: 150px">
        <img
          :src="`https://api.qrserver.com/v1/create-qr-code/?size=720x720&data=${url}/quiz?id=${quiz.id}`"
          width="150"
        />
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'LinkGen',
  data: () => ({
    url: 'https://pongphun.com/prepro-quiz',
  }),
}
</script>
<style>
.card {
  /* background: red; */
  width: 470px;
  border-radius: 10px;
  box-shadow: 0em 0.7em 2em #0002;
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto;
}
.chip {
  color: #fff;
  padding: 2px 8px;
  border-radius: 50px;
}
.greenBtn {
  width: 100%;
  max-width: 132px;
  background-color: #3ac10a;
  color: white;
  height: 44px;
  border-radius: 0.375rem;
  transition: all 0.2s;
}
</style>
