<template>
  <div>
    <!-- {{ window.location }} -->
    <div
      class="card relative mx-auto my-4"
      v-for="(quiz, i) in $store.state.quiz"
      :key="i"
    >
      <div class="">
        <div>{{ quiz.no }}. Link to Quiz:</div>
        <nuxt-link class="text-blue-500" :to="`/quiz?id=${quiz.id}`">
          {{ url + '/quiz?id=' + quiz.id }}
        </nuxt-link>
        <div class="flex absolute bottom-0 my-2">
          <div class="chip bg-green-600 mr-1">If True +{{ quiz.point }}</div>
          <div class="chip bg-red-500 mr-1">If false {{ quiz.del_point }}</div>
        </div>
      </div>
      <img
        :src="`https://api.qrserver.com/v1/create-qr-code/?size=720x720&data=${url}?id=${quiz.id}`"
        width="150"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'LinkGen',
  data: () => ({
    url: 'http://pongphun.com/prepro-quiz',
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
</style>